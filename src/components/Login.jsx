import React, { useState, useContext } from "react";
import {
  getRequestToken,
  getAccessToken,
  loginWithSessionId,
} from "../utils/api";
import tmdbImg from "../assets/tmdb.png";
import { GlobalContext } from "../context/GlobalState";

const Login = ({ closeLoginPopup, onLogin }) => {
  const {
    getAccessTokenHandler,
    getRequestTokenHandler,
    loginWithSessionIdHandler,
    requestToken,
    accessToken,
  } = useContext(GlobalContext);
  // const [requestToken, setRequestToken] = useState("");
  // const [accessToken, setAccessToken] = useState("");
  const token = import.meta.env.VITE_APP_TMDB_TOKEN;
  const webHost = import.meta.env.VITE_APP_WEBHOST;

  // const getRequestTokenHandler = async () => {
  //   try {
  //     const response = await getRequestToken(token);
  //     if (response.success) {
  //       setRequestToken(response.request_token);
  //       window.open(
  //         `${webHost}/auth/access?request_token=${response.request_token}`
  //       );
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getAccessTokenHandler = async () => {
  //   try {
  //     const response = await getAccessToken(token, requestToken);
  //     console.log(response);
  //     if (response.success) {
  //       setAccessToken(response.access_token);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const loginWithSessionIdHandler = async () => {
  //   try {
  //     const response = await loginWithSessionId(token, accessToken);
  //     console.log(response);
  //     if (response.success) {
  //       closeLoginPopup();
  //       onLogin(true);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <div className="flex items-center justify-center gap-x-3">
        <button
          className="px-5 py-2 text-black rounded-md bg-primary"
          onClick={getRequestTokenHandler}
        >
          Request Token
        </button>
        <button
          className={`px-5 py-2 text-black rounded-md bg-primary ${
            !requestToken && "opacity-50"
          }`}
          onClick={getAccessTokenHandler}
          disabled={!requestToken}
        >
          Get Access Token
        </button>
        <button
          className={`flex flex-col items-center justify-center ${
            !accessToken && "opacity-50"
          }`}
          onClick={loginWithSessionIdHandler}
          disabled={!accessToken}
        >
          <img src={tmdbImg} alt="" className="object-cover w-20 h-20" />
          <p className="text-black">Login with TMDB</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
