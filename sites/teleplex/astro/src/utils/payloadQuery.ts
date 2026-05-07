import { createPayloadQuery } from "@astro-default/utils/createPayloadQuery";
import type { Config } from "payload-teleplex";

export const payloadQuery = createPayloadQuery<Config>(
  process.env.PAYLOAD_BASE_URL!,
);
