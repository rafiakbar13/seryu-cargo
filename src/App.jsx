import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Favorite from "./pages/Favorite";
import Watchlist from "./pages/Watchlist";
import Landing from "./pages/Landing";
import Details from "./pages/Details";
import SearchResult from "./pages/SearchResult";
import { GlobalContextProvider } from "./context/GlobalState";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/movie/:id",
        element: <Details />,
      },
      {
        path: "/search/:query",
        element: <SearchResult />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <RouterProvider router={router} />
      </GlobalContextProvider>
    </>
  );
};

export default App;
