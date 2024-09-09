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

  updateFeedback: (payload) => {
    let url = `/admin/feedback/${payload.id}`;
    return http.put(url, payload.data);
  },
};
