import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../api";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import imdb from "../../assets/images/imdb.png";
import kinopoisk from "../../assets/images/kinopoisk.png";
// import {} from "number-brm";
import translate from "translate";
import "./Detail.css";
import Movies from "../../components/movies/Movies";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [credits, setCredits] = useState(null);
  const [translatedCountries, setTranslatedCountries] = useState([]);
  const [translatedGenres, setTranslatedGenres] = useState([]);
  const [translatedJobs, setTranslatedJobs] = useState([]);
  const [translatedCasts, setTranslatedCasts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Ma'lumotlarni olish
    request.get(`/movie/${id}`).then((res) => setData(res.data));
    request.get(`/movie/${id}/similar`).then((res) => setSimilar(res.data));
    request.get(`/movie/${id}/credits`).then((res) => setCredits(res.data));
  }, [id]);
  console.log(credits);

  useEffect(() => {
    // Production mamlakatlarini tarjima qilish
    const translateCountries = async () => {
      if (data?.production_countries) {
        const translated = await Promise.all(
          data.production_countries.map(async (country) => {
            const translatedName = await translate(country.name, "ru");
            return translatedName;
          })
        );
        setTranslatedCountries(translated);
      }
    };

    translateCountries();

    const translateGenres = async () => {
      if (data?.genres) {
        const translated = await Promise.all(
          data.genres.map(async (genre) => {
            const translatedName = await translate(genre.name, "ru");
            return translatedName;
          })
        );
        setTranslatedGenres(translated);
      }
    };
    translateGenres();

    const translateCrew = async () => {
      if (credits?.crew) {
        const translatedCrew = await Promise.all(
          credits.crew.map(async (member) => {
            if (member.job === "Director") {
              const translatedName = await translate(member.name, "ru");
              return translatedName;
            }
            return null;
          })
        );
        setTranslatedJobs(translatedCrew.filter((name) => name !== null));
      }
    };
    translateCrew();

    const translateCasts = async () => {
      if (credits?.cast) {
        const translatedCasts = await Promise.all(
          credits.cast.map(async (member) => {
            const translatedCharacter = await translate(member.character, "ru");
            const translatedName = await translate(member.name, "ru");
            return {
              character: translatedCharacter,
              name: translatedName,
            };
          })
        );
        setTranslatedCasts(translatedCasts);
      }
    };
    translateCasts();

    const translateOverviews = async () => {
      if (data?.overview) {
        const translatedOverview = await translate(data.overview, "ru");
        setData({ ...data, overview: translatedOverview });
      }
    };
    translateOverviews();
  }, [data]);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60); // Soatlar
    const remainingMinutes = minutes % 60; // Qolgan daqiqalar
    return `${hours}ч ${remainingMinutes}м / ${minutes} минут`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-secondary">
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-[1360px] h-[640px] relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
            alt=""
          />
          <button
            onClick={() => navigate(-1)}
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary active:bg-primary transition duration-300 absolute top-3 left-3 opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="w-6 h-6 stroke-primary active:stroke-secondary transition duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div class="mt-96 absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 class="text-2xl md:text-5xl font-bold mb-4">{data?.title}</h1>
            <p class="text-sm md:text-lg mb-6">
              2023 • Драма • 2ч 10мин • EN •
            </p>
            <button class="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full shadow-lg">
              Купить билет
            </button>
          </div>
        </div>
        <div className="detail-list w-[380px] mt-12">
          <div className="first-buttons grid grid-cols-2">
            <button className="bg-[#111111] text-white py-4 px-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
              Билеты
            </button>

            <button className="bg-[#1D1D1D] text-primary py-4 px-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all">
              О Фильме
            </button>
          </div>
          <div className="second-buttons grid grid-cols-2 gap-4 mt-12">
            <button className="flex items-center justify-around border text-white border-[#111111] px-4  rounded-xl text-xl font-[900]">
              {((data?.vote_average / 100) * 90).toFixed(1)}
              <img className="w-20 h-16" src={imdb} alt="" />
            </button>
            <button className="flex items-center text-white justify-around border border-[#111111] px-4  rounded-xl text-xl font-[900]">
              {data?.vote_average?.toFixed(1)}
              <img className="w-20 h-16" src={kinopoisk} alt="" />
            </button>
          </div>
          <div className="Detali border-b pb-8 border-[#2D2D2D]">
            <h3 className="mt-12 text-white text-xl">Детали</h3>
            <div className="flex flex-wrap justify-between mt-6">
              <p className="text-sm ">Продолжительность</p>
              <p className="text-sm "> {formatTime(data?.runtime)}</p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm ">Премьера</p>
              <p className="text-sm ">
                {new Date(data?.release_date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm ">Производство</p>
              <p className="text-sm ">{translatedCountries.join(", ")}</p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm flex-1 ">Жанр</p>
              <p className="text-sm ">
                {translatedGenres.slice(0, 2).join(", ")}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm ">Режиссер</p>
              <p className="text-sm ">
                {translatedJobs.join(", ") == ""
                  ? "Грета Гервиг, Дени Вильнёв"
                  : translatedJobs.slice(0, 2).join(", ")}
              </p>
            </div>
          </div>
          <div className="Roli border-b pb-8 border-[#2D2D2D]">
            <h3 className="mt-12 text-white text-xl">В ролях</h3>
            {translatedCasts.slice(0, 5).map((member, index) => (
              <div key={index} className="flex flex-wrap justify-between mt-6">
                <p className="text-sm ">{member.name}</p>
                <p className="text-sm ">{member.character}</p>
              </div>
            ))}
          </div>
          <div className="Roli pb-6">
            <h3 className="mt-12 text-white text-xl">Сюжет</h3>
            <p className="mt-6 text-base">{data?.overview}</p>
          </div>
          <button className="mt-6 mb-60 bg-primary w-full px-6 py-4 rounded-xl text-white">
            Купить билет
          </button>
        </div>
      </div>

      <Movies isDetail={true} data={similar} />
      <Footer />
    </div>
  );
};

export default Details;
