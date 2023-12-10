import React, { useState } from "react";
import { getRequestToken, getAccessToken } from "../utils/api";
import tmdbImg from "../assets/tmdb.png";

const Login = ({ closeLoginPopup, onLogin }) => {
  const [requestToken, setRequestToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = import.meta.env.VITE_APP_TMDB_TOKEN;
  const webHost = import.meta.env.VITE_APP_WEBHOST;

  const getRequestTokenHandler = async () => {
    try {
      const response = await getRequestToken(token);
      console.log(response);
      if (response.success) {
        setRequestToken(response.request_token);
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
      const response = await getAccessToken(token, requestToken);
      if (response.access_token) {
        setIsLoggedIn(true);
        closeLoginPopup();
        onLogin(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="px-5 py-2 text-black rounded-md bg-primary"
          onClick={getRequestTokenHandler}
        >
          Request Token
        </button>
        <button
          className={`flex flex-col items-center justify-center ${
            !requestToken && "opacity-50"
          }`}
          onClick={getAccessTokenHandler}
          disabled={!requestToken}
        >
          <img src={tmdbImg} alt="" className="object-cover w-20 h-20" />
          <p className="text-black">Login with TMDB</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
