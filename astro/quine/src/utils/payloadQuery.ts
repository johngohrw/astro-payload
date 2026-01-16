import { PayloadSDK } from "@payloadcms/sdk";
import type { Config as PayloadDefaultConfig } from "payload-quine";

export const payloadQuery = new PayloadSDK<PayloadDefaultConfig>({
  baseInit: { credentials: "include" },
  baseURL: process.env.PAYLOAD_BASE_URL!,
  fetch: async (url, init) => {
    const response = await fetch(url, init);
    return response;
  },
});
