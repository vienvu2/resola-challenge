import axios from "axios";

const client_id = "fvdBInTkgFEaCKZwarb8F_9nHOElII2GRWI2asTNwjs";
const baseUrl = `https://api.unsplash.com`;

export const api = {
  get(url, params) {
    params = {
      ...params,
      client_id: client_id,
    };
    return axios.get(`${baseUrl}${url}?${new URLSearchParams(params)}`);
  },
};
