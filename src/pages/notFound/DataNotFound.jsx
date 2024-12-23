import React from "react";

import foto from "@/assets/images/dataNotFound.avif";

const DataNotFound = () => {
  return (
    <div>
      <img
        src={foto}
        alt=""
        className="container justify-center h-[500px] w-[800px]"
      />
    </div>
  );
};

export default DataNotFound;
