import React from "react";
import History from "../../history";
import notFound from "../../utils/svg/undraw_page_not_found_su7k.svg"

const PageNotFound = () => {
  return (
    <div className="mt-20 border-2 max-w-xs max-h-xs shadow-lg py-12 mx-auto">
      <div className="text-center px-6 pb-6 mt-6">

        <p className="text-xl">PAGE NOT FOUND</p>
        <img src={notFound} alt="404notFound"/>
        <div
          className="flex justify-center text-md text-purple-600 cursor-pointer"
          onClick={() => History.push("/")}
        >
          Go Home
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
