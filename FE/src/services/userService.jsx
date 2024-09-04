import { http } from "./urlConfig";

export const userService = {
  getFieldList: () => {
    let url = "/user/fields";
    return http.get(url);
  },

  getWhyUsPost: () => {
    let url = "/user/why-us";
    return http.get(url);
  },

  getAboutUs: () => {
    let url = "/user/about-us";
    return http.get(url);
  },

  getComment: () => {
    let url = "/user/feedback";
    return http.get(url);
  },

  getFieldPost: (id) => {
    let url = `user/fields-detail/`;
    return http.get(url);
  },
};
