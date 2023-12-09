import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_BASEURL_V3;
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
