import { http } from "./urlConfig";

export const adminService = {
  loginAccount: () => {
    let url = "/user/fields";
    return http.get(url);
  },

  changeCompanyInfor: (payload) => {
    console.log(payload);

    let url = `/admin/detail-information/${payload.id}`;
    return http.put(url, payload.company);
  },

  updateCarouselImage: (payload) => {
    let url = `/admin/carousel/${payload.img_id}`;
    return http.put(url, payload.formData);
  },

  updateCustomerImage: (payload) => {
    let url = `/admin/customers/${payload.img_id}`;
    return http.put(url, payload.formData);
  },

  updateFeedback: (payload) => {
    let url = `/admin/feedback/${payload.id}`;
    return http.put(url, payload.data);
  },

  getAllPost: () => {
    let url = `/user/post`;
    return http.get(url);
  },

  updatePost: (payload) => {
    let url = `/admin/post-change/${payload.pDetail_id}`;
    console.log("url", url);
    console.log(payload.data);
    return http.put(url, payload.data);
  },

  updateMember: (payload) => {
    console.log(payload);
    let url = `/admin/members/${payload.mem_id}`;
    return http.put(url, payload.formData);
  },

  getFieldList: () => {
    let url = `/user/all-field-post`;
    return http.get(url);
  },

  updateFieldPost: (payload) => {
    let url = `/admin/field-detail/${payload.fPost_id}`;
    console.log(payload.fPost_id);
    return http.put(url, payload.formData);
  },
};
