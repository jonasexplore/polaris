import axios, { AxiosDefaults } from "axios";
import { httpRequest, IHttpClient } from "../IHttpClient";

type AxiosHttpClientOptions = { baseURL: string };

class AxiosHttpClient implements IHttpClient {
  constructor(config?: AxiosHttpClientOptions) {
    axios.defaults = { ...axios.defaults, ...config };
  }

  private errorHandler = (error: any) => {
    if (error && error.status === 401) {
      return error.data;
    }

    return {
      message: error.data.message,
    };
  };

  public get({ url, headers }: httpRequest): Promise<any> {
    return new Promise((resolve, reject) =>
      axios
        .get(url, { headers: headers })
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.errorHandler(error)))
    );
  }

  public post({ url, body, headers }: httpRequest): Promise<any> {
    return new Promise((resolve, reject) =>
      axios
        .post(url, body, { headers })
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.errorHandler(error)))
    );
  }

  public put({ url, body, headers }: httpRequest): Promise<any> {
    return new Promise((resolve, reject) =>
      axios
        .put(url, body, { headers })
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.errorHandler(error)))
    );
  }

  public delete({ url, headers }: httpRequest): Promise<any> {
    return new Promise((resolve, reject) =>
      axios
        .delete(url, { headers })
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.errorHandler(error)))
    );
  }
}

export { AxiosHttpClient };
