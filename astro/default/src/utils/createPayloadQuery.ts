import { PayloadSDK } from "@payloadcms/sdk";

export function createPayloadQuery<T>(baseURL: string) {
  return new PayloadSDK<T>({
    baseInit: { credentials: "include" },
    baseURL,
    fetch: async (url, init) => {
      const response = await fetch(url, init);
      return response;
    },
  });
}
