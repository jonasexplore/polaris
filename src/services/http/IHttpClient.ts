export interface httpRequest {
  url: string;
  headers?: any;
  body?: any;
}

export interface IHttpClient {
  get(params: httpRequest): Promise<any>;
  post(params: httpRequest): Promise<any>;
  put(params: httpRequest): Promise<any>;
  delete(params: httpRequest): Promise<any>;
}
