import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ReactTyped } from "react-typed";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/api";
import Movies from "@/components/movies/Movies";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchparams.get("q") || "");
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["movie"],
    queryFn: () =>
      request
        .get("/search/movie", {
          params: {
            query: searchValue,
          },
        })
        .then((res) => res.data),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    queryClient.invalidateQueries({ queryKey: ["movie"] });
    setSearchParams({ q: searchValue });
  };

  const handleClear = () => {
    setSearchParams({});
    setSearchValue("");
  };
  useEffect(() => {
    if (!searchValue) {
      queryClient.invalidateQueries({ queryKey: ["movie"] });
    }
  }, [searchValue]);

  return (
    <div className="bg-black">
      <div className="container py-5">
        <form
          onSubmit={handleSearch}
          className="border max-w-[800px] mx-auto h-10 flex"
          action=""
        >
          <ReactTyped
            strings={["Avengers", "Venom", "Avatar", "Spiderman"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
            className="flex-1"
          >
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="h-full outline-none w-full indent-3"
              type="text"
            />
          </ReactTyped>
          {searchValue.length ? (
            <button
              type="button"
              onClick={handleClear}
              className="w-10 grid place-items-center bg-slate-200"
            >
              <span>X</span>
            </button>
          ) : (
            <></>
          )}
          <button className="w-10 grid place-items-center bg-slate-200">
            <CiSearch />
          </button>
        </form>
        <div>
          {!data?.total_results && (
            <p className="text-center py-6">Movie not found</p>
          )}
        </div>
        <Movies data={data} />
      </div>
    </div>
  );
};

export default Search;
