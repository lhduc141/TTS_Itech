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

  getFieldPostDetail: (id) => {
    let url = `user/fields-detail/${id}`;
    return http.get(url);
  },

  getCarousel: () => {
    let url = "/user/carousel";
    return http.get(url);
  },

  getTeamMembers: () => {
    let url = "/user/members";
    return http.get(url);
  },

  getCustomer: () => {
    let url = "/user/customer";
    return http.get(url);
  },

  getInformation: (id) => {
    let url = `/user/detail-information/${id}`;

    return http.get(url);
  },
};
