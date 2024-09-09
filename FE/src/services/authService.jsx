import { http } from "./urlConfig";

export const authService = {
  loginAccount: (data) => {
    let url = "/auth/login";
    return http.post(url, data);
  },
};
