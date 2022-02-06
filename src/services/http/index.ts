import { AxiosHttpClient } from "./implementations/AxiosHttpClient";

const httpClient = new AxiosHttpClient({
  baseURL: "http://localhost:3000",
});

export { httpClient };
