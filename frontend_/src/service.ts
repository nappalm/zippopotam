import axios from "axios";

export const zippopotamApi  = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
