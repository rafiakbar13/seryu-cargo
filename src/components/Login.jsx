import React, { useContext } from "react";
import tmdbImg from "../assets/tmdb.png";
import { GlobalContext } from "../context/GlobalState";

const Login = () => {
  const {
    getAccessTokenHandler,
    getRequestTokenHandler,
    loginWithSessionIdHandler,
    requestToken,
    accessToken,
  } = useContext(GlobalContext);

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
