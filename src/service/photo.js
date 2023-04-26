import { api } from "./api";

export const photoService = {
  getList(page, query) {
    return api.get(`/search/photos`, { page, query }).then(res=>res.data);
  },
};
