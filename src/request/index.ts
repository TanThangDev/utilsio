import fetch from 'isomorphic-fetch';
import { isEmptyObj } from '../object/isEmptyObj';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export interface IRequestArgs {
  method: Method;
  path: any;
  data?: any;
  headers?: any;
  origin?: any;
}

export interface IResponse<T> {
  status: number;
  statusText: string;
  headers: any;
  data: T;
}

export default async function request<T>({
  method = Method.GET,
  path,
  data,
  headers,
  origin,
}: IRequestArgs): Promise<IResponse<T>> {
  if (method === Method.GET && !isEmptyObj(data)) {
    path = new URL(path);
    Object.entries(data).forEach(([name, value]) => {
      if (!value) return;
      path.searchParams.append(name, value);
    });
    path.toString();
  }

  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    origin: typeof window !== 'undefined' ? window.origin : origin,
    ...headers,
  };
  let body;

  if (
    (method === Method.PUT || method === Method.POST) &&
    data instanceof FormData
  ) {
    delete headers['Content-Type'];
    body = data;
  } else if (
    method === Method.POST ||
    method === Method.PUT ||
    method === Method.DELETE
  ) {
    body = JSON.stringify(data);
  }
  const res = await fetch(path, {
    method,
    headers,
    body,
  })
    .then((response: any) => {
      return response.text();
    })
    .then((response: any) => {
      return response ? JSON.parse(response) : {};
    })
    .then((responseData: T) => {
      return responseData;
    });

  return res;
}
