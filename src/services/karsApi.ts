import axios from "axios";

export const karsApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 21700,
});
