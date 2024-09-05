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
};
