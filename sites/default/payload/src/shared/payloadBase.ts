import path from "path";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import type { CollectionConfig } from "payload";

export const r2Storage = s3Storage({
  collections: {
    media: {
      disableLocalStorage: true,
      prefix: "media",
      generateFileURL: ({ filename, prefix }) =>
        `https://${process.env.R2_ENDPOINT_PUBLIC}/${prefix}/${filename}`,
    },
  },
  bucket: process.env.R2_BUCKET || "",
  config: {
    endpoint: `https://${process.env.R2_ENDPOINT}` || "",
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    },
    region: "auto",
    forcePathStyle: true,
  },
});

export const baseDb = sqliteAdapter({
  client: {
    url: process.env.DATABASE_URL || "",
  },
  // Auto-create schema tables on first connection.
  // Safe for self-hosted SQLite; use migrations for hosted Postgres.
  push: true,
});

export const baseEditor = lexicalEditor();

export function baseAdmin(
  collections: CollectionConfig[],
  baseDir: string,
) {
  return {
    user: collections.find((c) => c.slug === "users")!.slug,
    importMap: {
      baseDir: path.resolve(baseDir),
    },
  };
}

export function baseTypescript(baseDir: string) {
  return {
    outputFile: path.resolve(baseDir, "payload-types.ts"),
  };
}
