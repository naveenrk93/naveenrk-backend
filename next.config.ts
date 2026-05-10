import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LangChain ships lots of dynamic imports for optional integrations
  // (vector DBs, loaders, etc.). Marking these as server externals tells
  // Next.js to load them from node_modules at runtime instead of trying
  // to bundle them, which avoids "Module not found" warnings during build
  // and keeps the serverless function bundle small (Vercel 50MB limit).
  serverExternalPackages: [
    "@langchain/classic",
    "@langchain/core",
    "@langchain/google-genai",
    "@google/generative-ai",
    "langchain",
  ],
};

export default nextConfig;
