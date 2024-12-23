import React from "react";

const LoadingMovies = () => {
  return (
    <div className="bg-black">
      <div className="flex gap-6 container justify-center py-6 ">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index + 1}
            className="w-[100px] h-[40px] bg-slate-700 rounded-lg"
          ></div>
        ))}
      </div>
      <div className="container justify-center flex gap-4 py-3">
        <div>
          <div className="bg-slate-700 w-56 rounded-lg h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-700 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-700 w-56 rounded-lg  h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-700 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-700 w-56 rounded-lg  h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-700 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-700 w-56 rounded-lg  h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-700 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="flex container justify-center pt-3 pb-6 gap-2">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index + 1}
            className="w-[40px] h-[40px] bg-slate-700 rounded-[50%]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingMovies;
