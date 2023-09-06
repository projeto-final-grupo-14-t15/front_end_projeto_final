import axios from "axios";

export const api = axios.create({
  baseURL: "https://road-rovers-api.onrender.com",
  timeout: 22000,
});
