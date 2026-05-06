import { createPayloadQuery } from "./createPayloadQuery";
import type { Config } from "payload-default";

export const payloadQuery = createPayloadQuery<Config>(
  process.env.PAYLOAD_BASE_URL!,
);
