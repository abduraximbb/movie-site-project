import React from "react";

const Loading = () => {
  return (
    <div className="bg-black">
      <div className=" flex flex-wrap items-center justify-around py-4 bg-slate-200 w-full">
        <div className="w-full h-[36px]"></div>
      </div>
      <div className="flex flex-col items-center mt-3">
        <div className="container w-[900px] h-[400px] relative rounded-xl bg-slate-200"></div>
      </div>
      <div className="flex w-[400px] gap-5 mx-auto justify-between mt-3">
        <div className="h-[50px] w-[50%] bg-slate-200 rounded-xl"></div>
        <div className="h-[50px] w-[50%] bg-slate-200 rounded-xl"></div>
      </div>
      <div className="container w-[400px] h-[400px] bg-slate-200 rounded-xl mt-4"></div>
      <div className="h-[50px] w-[400px] bg-slate-200 rounded-xl mx-auto mt-3"></div>
      <div className="w-[970px] flex justify-between flex-row container mt-3">
        <div className="w-[20%] h-5 bg-slate-200 rounded-xl "></div>
        <div className="w-[20%] h-5 bg-slate-200 rounded-xl"></div>
      </div>
      <div className="container justify-center flex gap-4 mt-3">
        <div>
          <div className="bg-slate-200 w-56 rounded-lg h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-200 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-200 w-56 rounded-lg  h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-200 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-200 w-56 rounded-lg  h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-200 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-200 w-56 rounded-lg  h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-200 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="bg-slate-200 container mx-auto h-44 mt-4 rounded-lg"></div>
    </div>
  );
};

export default Loading;
