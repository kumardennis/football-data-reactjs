import axios, { AxiosRequestConfig } from "axios";

const API_KEY = "d4c211a2fcbd4268b66b430969f34fbc"; // TODO: Use env vars

const instance = axios.create({
  baseURL: "/api/v2/competitions/",
  headers: { "X-Auth-Token": API_KEY },
  timeout: 10000,
});

export const competitionClient = {
  get: (url: string, params: AxiosRequestConfig) =>
    instance.get(url, params).then((response) => response.data),
};
