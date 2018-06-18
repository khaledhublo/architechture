import { SomeHTTPRequest } from "./http.js";

export async function getWorkers() {
  let response = await SomeHTTPRequest();
  return response.data;
}

export async function getWorkerById(id) {
  let response = await SomeHTTPRequest(id);
  return response.data;
}

export async function insert() {
  let response = await SomeHTTPRequest();
  return response.data;
}

export async function update() {
  let response = await SomeHTTPRequest();
  return response.data;
}

export async function remove() {
  let response = await SomeHTTPRequest();
  return response.data;
}
