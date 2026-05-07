import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import {
  baseAdmin,
  baseDb,
  baseEditor,
  baseTypescript,
  r2Storage,
} from "payload-default/shared/payloadBase";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const collections = [Users, Media, Pages];

export default buildConfig({
  admin: baseAdmin(collections, dirname),
  collections,
  editor: baseEditor,
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: baseTypescript(dirname),
  db: baseDb,
  sharp,
  plugins: [r2Storage],
});
