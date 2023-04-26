import { api } from "./api";

export const photoService = {
  getList(page) {
    return api.get(`/photos`, { page }).then((res) => res.data);
  },
};
