import React, { useState } from "react";

import MaterialIcon from "material-icons-react";
import getColor from "../../utils/getColor";

const ApplicationCard = ({ job }) => {
 
  return (
    <div className="my-8 mx-4 lg:mx-8">
      <div
        className="flex bg-white shadow-lg rounded-r-lg px-4 hover:bg-gray-100" style={{borderLeft:`4px solid ${getColor(job.status)}`}} >
        <div className="flex">
          <div className="mx-4 my-4 flex flex-col">
            <p className="font-bold text-md lg:text-xl md-text-lg uppercase text-gray-700 my-2">
              {job.company.name}
            </p>
            <p className="text-gray-700 text-xs lg:text-sm md:text-sm">
              {job.createdAt[0]}
            </p>
            <p className="text-blue-500 text-xs lg:text-sm md:text-sm">
              {job.position}
            </p>
            <div className="my-2">
              <div className="flex my-2">
                <MaterialIcon icon="location_on" color="green" />
                <p className="text-gray-700 text-xs lg:text-sm md:text-sm">
                  {`${job.company.address.city}, ${job.company.address.country}`}
                </p>
              </div>
              <div className="flex border cursor-pointer">
                <div className="mr-1 mt-2 ml-1">
                  <MaterialIcon
                    icon="fiber_manual_record"
                    color={getColor(job.status)}
                    size={18}
                  />
                </div>
                <select
                  className="w-full block py-2 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs lg:text-sm md:text-sm"
                  style={{color: getColor(job.status)}}
                  value={job.status}           
                >
                <option value={1}>Applied</option>
                <option value={2}>Rejected</option>
                <option value={3}>Interview</option>
                <option value={4}>Offer</option>
                <option value={5}>Accepted</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <img
              src={`http://logo.clearbit.com/${job.company.name
                .toString()
                .toLowerCase()}.com`}
              alt="company logo"
              className="w-24 m-8"
            />
            <div className="mt-4 float-right pr-4  flex">
              <div className="cursor-pointer mx-2 hover:text-lg">
                {job.isStarred?<MaterialIcon icon="star" color="#ffd700" />:<MaterialIcon icon="star" />}
              </div>
              {/* <div className="cursor-pointer mx-2 hover:text-lg">
                {" "}
                <MaterialIcon icon="share" />
              </div> */}
              {job.link ? (
                <div className="cursor-pointer mx-2 hover:text-lg">
                  <a href={job.link} target="_blank">
                    <MaterialIcon icon="link" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
