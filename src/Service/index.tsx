import axios from "axios";

export function createApi() {
  const api = axios.create({
    baseURL: "https://swapi.dev/api",
  });

  return api;
}

export const api = createApi();
