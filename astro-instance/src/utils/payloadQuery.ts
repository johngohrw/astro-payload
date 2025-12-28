import { PayloadSDK } from "@payloadcms/sdk";
import type { Config } from "payload-instance";

export const payloadQuery = new PayloadSDK<Config>({
  baseInit: { credentials: "include" },
  baseURL: process.env.PAYLOAD_BASE_URL || `http://localhost:3000/api`,
  fetch: async (url, init) => {
    const response = await fetch(url, init);
    return response;
  },
});
