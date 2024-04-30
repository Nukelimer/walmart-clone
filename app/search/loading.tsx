import React from "react";
import Loader from "../components/Loader";

function loader() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h2 className="font-semibold animate-pulse mb-8">
       
        Hold on, I am scrapping your products for you.
      </h2>
      <Loader />
    </div>
  );
}

export default loader;
