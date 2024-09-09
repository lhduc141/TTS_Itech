import axios from "axios";
import { storage } from "./storage";

export const BASE_URL = "http://localhost:8080";
export const BASE_URL_IMG = "http://localhost:8080/public/img/";

let token = storage.getToken();
let lang = storage.getLangId();

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    lang_id: lang,
  },
});
