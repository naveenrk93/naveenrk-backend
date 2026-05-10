import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { knowledgeDocs } from "./knowledge";

let vectorStorePromise: Promise<MemoryVectorStore> | null = null;

/**
 * Lazily build (and cache) an in-memory vector store from `knowledgeDocs`.
 *
 * Embeddings: Google `gemini-embedding-001` (default 3072 dims, MRL-truncatable).
 *  - GA since July 2025; replaced the deprecated `text-embedding-004`
 *    (which Google sunset on January 14, 2026).
 *  - No native binaries → ~0 KB bundle impact (HTTP only).
 *  - Free tier covers ~1 batch per cold start with huge headroom.
 *  - Vercel-compatible (no /tmp model download, no ONNX runtime).
 *
 * The store is built once per Node.js process / serverless instance and
 * reused for every request that hits a warm function.
 */
export function getVectorStore(): Promise<MemoryVectorStore> {
  if (vectorStorePromise) return vectorStorePromise;

  vectorStorePromise = (async () => {
    const embeddings = new GoogleGenerativeAIEmbeddings({
      model: "gemini-embedding-001",
    });

    const store = await MemoryVectorStore.fromDocuments(
      knowledgeDocs,
      embeddings,
    );

    console.log(
      `[vectorstore] MemoryVectorStore initialized with ${knowledgeDocs.length} documents`,
    );
    return store;
  })().catch((err) => {
    vectorStorePromise = null;
    throw err;
  });

  return vectorStorePromise;
}
