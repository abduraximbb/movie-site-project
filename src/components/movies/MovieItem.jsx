import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addSavedList } from "../redux/slices/saved-slice";

const MovieItem = ({item
  // title,
  // poster_path,
  // original_language,
  // id,
  // vote_average,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-56 rounded-lg shadow-md overflow-hidden opacity-100 transition-transform hover:scale-105 relative">
      <img
        onClick={() => navigate(`/movie/${item.id}`)}
        src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden">
          {item.title}
        </h3>
        <h3 className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden">
          {item.vote_average}
        </h3>
        <p className="text-sm text-white mt-1">
          Language: {item.original_language.toUpperCase()}
        </p>
      </div>

      <button onClick={() => dispatch(addSavedList(item))}>
        <BsFillBookmarkPlusFill className="text-red-700 absolute top-3 right-3 border-red-500 text-2xl" />
      </button>
    </div>
  );
};

export default memo(MovieItem);
