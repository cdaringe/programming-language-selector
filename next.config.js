const crypto = require("crypto");
const fs = require("fs");
const modelTypesFilename = "./src/app/model/types.ts";
const modelTypesHash = crypto
  .createHash("sha256")
  .update(fs.readFileSync(modelTypesFilename, "utf-8"))
  .digest("base64");

process.env.NEXT_PUBLIC_MODEL_TYPES_HASH = modelTypesHash;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
