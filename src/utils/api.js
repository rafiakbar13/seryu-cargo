import axios from "axios";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URLV4 = import.meta.env.VITE_APP_BASE_URL_V4;
const BASE_URLV3 = import.meta.env.VITE_TMDB_BASEURL_V3;
const token = import.meta.env.VITE_APP_TMDB_TOKEN;
const accountId = import.meta.env.VITE_APP_ACCOUNT_ID;

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URLV3 + url, {
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

export const loginWithSessionId = async (token, accessToken) => {
  try {
    const response = await axios.post(
      `${BASE_URLV3}/authentication/session/convert/4`,
      {
        access_token: accessToken,
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

export const Logout = async (token, sessionId) => {
  try {
    const response = await axios.delete(
      `${BASE_URLV3}/authentication/session`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          session_id: sessionId,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const addFavorites = async (accountId, mediaId) => {
  try {
    const response = await axios.post(
      `${BASE_URLV3}/account/${accountId}/favorite?api_key=${apiKey}`,
      {
        media_type: "movie",
        media_id: mediaId,
        favorite: true,
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

export const AddWatchList = async (accountId, mediaId) => {
  try {
    const response = await axios.post(
      `${BASE_URLV3}/account/${accountId}/watchlist?api_key=${apiKey}`,
      {
        media_type: "movie",
        media_id: mediaId,
        watchlist: true,
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
