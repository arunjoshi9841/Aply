import React from "react";
import History from "../../history";

const PageNotFound = () => {
  return (
    <div className="mx-auto mt-20 bg-purple-500 rounded-lg max-w-xs shadow-lg h-74">
      <div className="text-center relative text-white px-6 pb-6 mt-6">
        <p className="text-2xl">404 NOT FOUND</p>
        <div
          className="flex justify-center text-md"
          onClick={() => History.push("/")}
        >
          Go Back to Home
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
