import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_BASEURL_V3;
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URLV4 = import.meta.env.VITE_APP_BASE_URL_V4;
const token = import.meta.env.VITE_APP_TMDB_TOKEN;

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

export const getRequestToken = async () => {
  try {
    const response = await axios.post(
      `${BASE_URLV4}/auth/request_token`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const getAccessToken = async (token, requestToken) => {
  try {
    const response = await axios.post(
      `${BASE_URLV4}/auth/access_token`,
      {
        request_token: requestToken,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const loginWithSessionId = async (sessionId) => {
  try {
    const response = await axios.post(
      `${BASE_URLV4}/auth/session`,
      {
        session_id: sessionId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
