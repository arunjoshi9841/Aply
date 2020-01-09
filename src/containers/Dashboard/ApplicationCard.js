import React, { useState } from "react";

import MaterialIcon from "material-icons-react";

const ApplicationCard = ({ status }) => {
  const getColor = () => {
    let color = "blue";
    if (status === 0) {
      color = "red";
    } else if (status === 1) {
      color = "green";
    } else {
      color = "blue";
    }

    return color;
  };
  return (
    <div className="my-8 mx-4 lg:mx-8">
      <div
        className={
          status === 0
            ? "flex bg-white shadow-lg border-l-4 border-red-600 rounded-r-lg px-4 hover:bg-gray-100"
            : status === 1
            ? "flex bg-white shadow-lg border-l-4 border-green-600 rounded-r-lg px-4 hover:bg-gray-100"
            : "flex bg-white shadow-lg border-l-4 border-blue-600 rounded-r-lg px-4  hover:bg-gray-100"
        }
      >
        <div className="flex">
          <div className="mx-4 my-4 flex flex-col">
            <p className="font-bold text-md lg:text-xl md-text-lg uppercase text-gray-700 my-2">
              Google
            </p>
            <p className="text-gray-700 text-xs lg:text-sm md:text-sm">12 june 2019</p>
            <p className="text-blue-500 text-xs lg:text-sm md:text-sm">Front end Developer</p>
            <div className="my-2">
              <div className="flex my-2">
                <MaterialIcon icon="location_on" color="green" />
                <p className="text-gray-700text-xs lg:text-sm md:text-sm">New York, USA</p>{" "}
              </div>
              <div className="flex border cursor-pointer">              
              <div className="mr-1 mt-2 ml-1">
                 
                 <MaterialIcon
                   icon="fiber_manual_record"
                   color={getColor()}
                   size={18}
                 />
               </div>
               <select  className={
                    status === 0
                      ? "block py-2 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs lg:text-sm md:text-sm text-red-600"
                      : status === 1
                      ? "block py-2 pr-8 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 text-xs lg:text-sm md:text-sm text-green-600"
                      : "block py-2 pr-8 leading-tight focus:outline-none focus:bg-bg-gray-100 focus:border-gray-500 text-xs lg:text-sm md:text-sm text-blue-600"
                  }
                >
                  <option>Accepted

                  </option>
                  <option>Rejected</option>
                  <option>Pending</option>
                  </select>               
              </div>              
            </div>
          </div>

          <div>
            <img
              src="https://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png"
              alt="company logo"
              className="w-24 m-8"
            />
            <div className="mt-4 flex">
          <div className="cursor-pointer mx-2 hover:text-lg">
            <MaterialIcon icon="star" color="#ffd700" />
          </div>
          <div className="cursor-pointer mx-2 hover:text-lg">
            {" "}
            <MaterialIcon icon="share" />
          </div>
          <div className="cursor-pointer mx-2 hover:text-lg">
            {" "}
            <MaterialIcon icon="link" />
          </div>
        </div>
          </div>
        </div> 
              
      </div>
    </div>
  );
};

export default ApplicationCard;
