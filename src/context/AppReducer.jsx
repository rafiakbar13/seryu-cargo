export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "ADD_MOVIE_TO_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };

    case "REMOVE_MOVIE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "SET_REQUEST_TOKEN":
      return {
        ...state,
        requestToken: action.payload,
      };

    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      };

    case "SET_SESSION_ID":
      return {
        ...state,
        sessionId: action.payload,
      };

    case "SET_IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case "SET_TOGGLE_MENU":
      return {
        ...state,
        toggleMenu: action.payload,
      };

    case "SET_LOGIN_POPUP":
      return {
        ...state,
        loginPopup: action.payload,
      };

    default:
      return state;
  }
};
