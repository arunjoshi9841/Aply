import React from "react";

import Undraw from "react-undraw";
import History from "../../history";

const PageNotFound = () => {
  return (
    <div className="mt-20 border-2 max-w-xs max-h-xs shadow-lg py-12 mx-auto">
      <div className="text-center px-6 pb-6 mt-6">
      <Undraw name="page-not-found" primaryColor="#9F7AEA"/>
        <p className="text-xl">PAGE NOT FOUND</p>
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
