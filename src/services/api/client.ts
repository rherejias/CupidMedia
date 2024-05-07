/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function apiGet<T>(uri: string): Promise<T> {
  return api<T>(uri, "get", undefined);
}

export function apiDelete<T>(uri: string): Promise<T> {
  return api<T>(uri, "delete");
}

export function apiPost<T>(
  uri: string,
  data: any,
): Promise<T> {
  return api<T>(uri, "post", data);
}

export function apiPut<T>(uri: string, data: any): Promise<T> {
  return api<T>(uri, "put", data);
}

export function apiPatch<T>(uri: string, data: any): Promise<T> {
  return api<T>(uri, "patch", data);
}

async function api<T>(
  uri: string,
  method: Method = "GET",
  data: any = null,
): Promise<T> {
  return call(uri, method, data);
}

function call<T>(
  uri: string,
  method: Method = "GET",
  data: any = null,
): Promise<T> {
  let request: AxiosRequestConfig = {
    url: `${API_URL}/${uri}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": API_KEY
    },
    method,
  };

  if (data !== null) {
    request = {
      ...request,
      data,
    };
  }

  return axios(request)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.response);
    });
}

const apiClient = {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  patch: apiPatch,
  delete: apiDelete,
};

export default apiClient;
