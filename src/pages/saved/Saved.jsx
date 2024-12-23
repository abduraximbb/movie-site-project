import Movies from "@/components/movies/Movies";
import React from "react";
import { useSelector } from "react-redux";

const Saved = () => {
  const savedList = useSelector((state) => state.savedSlice.value);
  console.log(savedList);

  return (
    <div>
      <h2>Saved list</h2>
      {savedList?.map((item) => (
        <Movies key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Saved;
