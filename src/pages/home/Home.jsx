import React, { memo, useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import { request } from "../../api";
import { Carousel } from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Genre from "../../components/genre/Genre";
import Pagination from "@mui/material/Pagination";
import LoadingMain from "../loading/LoadingMain";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    request("/discover/movie", {
      params: {
        without_genres: "18,10749,99",
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <LoadingMain />
  ) : (
    <div className="bg-black">
      <Carousel data={data} />
      <Movies data={data} />
    </div>
  );
};

export default memo(Home);
