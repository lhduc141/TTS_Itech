export const storage = {
  setLangId: (lang_id) => {
    let json = JSON.stringify(lang_id);
    localStorage.setItem("lang_id", json);
  },

  getLangId: () => {
    let json = localStorage.getItem("lang_id");
    if (json) {
      return JSON.parse(json);
    }
    return null;
  },

  changeLangId: (lang_id) => {
    let currentLangId = storage.getLangId();
    if (currentLangId !== null) {
      let newLangId = JSON.stringify(lang_id);
      localStorage.setItem("lang_id", newLangId);
    } else {
      storage.setLangId(lang_id);
    }
  },

  // Lưu token vào localStorage
  setToken: (token) => {
    let json = JSON.stringify(token);
    localStorage.setItem("token", json);
  },

  // Lấy token từ localStorage
  getToken: () => {
    let json = localStorage.getItem("token");
    if (json) {
      return JSON.parse(json);
    }
    return null;
  },

  // Thay đổi token trong localStorage
  changeToken: (token) => {
    let currentToken = storage.getToken();
    if (currentToken !== null) {
      let newToken = JSON.stringify(token);
      localStorage.setItem("token", newToken);
    } else {
      storage.setToken(token);
    }
  },

  deleteToken: () => {
    localStorage.removeItem("token");
  },
};
