import axios from "axios";
import { storage } from "./storage";

export const BASE_URL = "http://localhost:8080";
export const BASE_URL_IMG = "http://localhost:8080/public/imgs/";

let lang_id = storage.getLangId();

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    // token:
    lang_id: lang_id,
  },
});
