import { createContext, useContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";
import { useHref } from "react-router-dom";
import {
  getRequestToken,
  getAccessToken,
  loginWithSessionId,
  Logout,
  addFavorites,
  AddWatchList,
} from "../utils/api";

const token = import.meta.env.VITE_APP_TMDB_TOKEN;
const webHost = import.meta.env.VITE_APP_WEBHOST;
const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  isLoggedIn: false,
  accessToken: "",
  requestToken: "",
  sessionId: "",
  loginPopup: false,
  toggleMenu: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    try {
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [state.watchList]);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [state.favorites]);

  const addMovieToWatchList = async (movie) => {
    try {
      const response = await AddWatchList("movie", movie.id);
      console.log(response);
      if (response.success) {
        dispatch({ type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToFavorites = async (movie) => {
    try {
      const response = await addFavorites("movie", movie.id);
      console.log(response);
      if (response.success) {
        dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: movie });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeMovieFromFavorites = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITES", payload: id });
  };

  const getRequestTokenHandler = async () => {
    try {
      const response = await getRequestToken(token);
      if (response.success) {
        dispatch({
          type: "SET_REQUEST_TOKEN",
          payload: response.request_token,
        });
        window.open(
          `${webHost}/auth/access?request_token=${response.request_token}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAccessTokenHandler = async () => {
    try {
      const response = await getAccessToken(token, state.requestToken);
      console.log(response);
      if (response.success) {
        dispatch({
          type: "SET_ACCESS_TOKEN",
          payload: response.access_token,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithSessionIdHandler = async () => {
    try {
      const response = await loginWithSessionId(token, state.accessToken);
      console.log(response);
      if (response.success) {
        dispatch({
          type: "SET_SESSION_ID",
          payload: response.session_id,
        });
        dispatch({
          type: "SET_IS_LOGGED_IN",
          payload: true,
        });
        dispatch({
          type: "SET_LOGIN_POPUP",
          payload: false,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openLoginPopup = () => {
    dispatch({
      type: "SET_LOGIN_POPUP",
      payload: true,
    });
  };

  const closeLoginPopup = () => {
    dispatch({
      type: "SET_LOGIN_POPUP",
      payload: false,
    });
  };

  const handleLogin = () => {
    dispatch({
      type: "SET_IS_LOGGED_IN",
      payload: true,
    });
    closeLoginPopup();
  };

  const handleLogout = () => {
    dispatch({
      type: "SET_IS_LOGGED_IN",
      payload: false,
    });
    Logout(token, state.sessionId);
  };

  const handleToggleMenu = () => {
    dispatch({
      type: "SET_TOGGLE_MENU",
      payload: !state.toggleMenu,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        addMovieToWatchList,
        removeMovieFromWatchList,
        addMovieToFavorites,
        removeMovieFromFavorites,
        favorites: state.favorites,
        isLoggedIn: state.isLoggedIn,
        accessToken: state.accessToken,
        requestToken: state.requestToken,
        sessionId: state.sessionId,
        loginPopup: state.loginPopup,
        toggleMenu: state.toggleMenu,
        getRequestTokenHandler,
        getAccessTokenHandler,
        loginWithSessionIdHandler,
        openLoginPopup,
        closeLoginPopup,
        handleLogin,
        handleLogout,
        handleToggleMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
