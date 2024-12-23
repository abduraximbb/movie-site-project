import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Latest from "../pages/latest/Latest";
import Details from "../pages/details/Details";
import Loading from "@/pages/loading/Loading";
import LoadingMain from "@/pages/loading/LoadingMain";
import AllMovies from "@/pages/allMovies/AllMovies";
import Saved from "@/pages/saved/Saved";
import Search from "@/pages/search/Search";
import Layout from "@/pages/layout/Layout";
import PageNotFound from "@/pages/notFound/PageNotFound";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/latest",
          element: <Latest />,
        },
        {
          path: "/movies",
          element: <AllMovies />,
        },
        {
          path: "/saved",
          element: <Saved />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/movie/:id",
          element: <Details />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
};

export default Router;
