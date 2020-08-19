import MaterialIcon from "material-icons-react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Image from "../../components/reusable-components/Image";
import { setApplicationModal, setJob, updateJob } from "../../store/actions";
import getColor from "../../utils/getColor";

const ApplicationCard = ({ job, setApplicationModal, setJob, updateJob }) => {
  const [localJob, setLocalJob] = useState("");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setLocalJob(job);
    if (localJob.jobId !== "undefined") {
      setInitialized(true);
    }
  }, [job]);

  const handleJobSelection = () => {
    setJob(localJob);
    setApplicationModal(true);
  };
  const handleStatusChange = (e) => {
    e.stopPropagation();
    updateJob({ ...localJob, status: parseInt(e.target.value) });
    setLocalJob({ ...localJob, status: parseInt(e.target.value) });
  };
  const handleStarred = (e) => {
    e.stopPropagation();
    updateJob({ ...localJob, isStarred: !localJob.isStarred });
    setLocalJob({ ...localJob, isStarred: !localJob.isStarred });
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    const updatedJob = localJob;
    updatedJob.isDeleted = true;
    updateJob(updatedJob);
  };

  return (
    <div className="my-8 mx-4 lg:mx-8 cursor-pointer">
      {initialized ? (
        <div
          className="flex bg-white shadow-lg rounded-r-lg hover:bg-gray-100"
          style={{ borderLeft: `4px solid ${getColor(localJob.status)}` }}
          onClick={(e) => handleJobSelection()}
        >
          <div className="flex">
            <div className="mx-4 my-4 flex flex-col">
              <p className="font-bold text-md lg:text-xl md-text-lg uppercase text-gray-700 my-2">
                {localJob.company.name}
              </p>
              <p className="text-gray-700 text-xs lg:text-sm md:text-sm">
                {localJob.createdAt[0]}
              </p>
              <p className="text-blue-500 text-xs lg:text-sm md:text-sm">
                {localJob.position}
              </p>
              <div className="my-2">
                <div className="flex my-2">
                  <MaterialIcon icon="location_on" color="green" />
                  <p className="text-gray-700 text-xs lg:text-sm md:text-sm">
                    {`${localJob.company.address.city}, ${localJob.company.address.country}`}
                  </p>
                </div>
                <div
                  className="flex border cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <select
                    className="w-full block py-2 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs lg:text-sm md:text-sm"
                    onChange={handleStatusChange}
                    value={localJob.status}
                  >
                    <option value={1} style={{ color: getColor(1) }}>
                      Applied
                    </option>
                    <option value={2} style={{ color: getColor(2) }}>
                      Rejected
                    </option>
                    <option value={3} style={{ color: getColor(3) }}>
                      Interview
                    </option>
                    <option value={4} style={{ color: getColor(4) }}>
                      Offer
                    </option>
                    <option value={5} style={{ color: getColor(5) }}>
                      Accepted
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={`http://logo.clearbit.com/${localJob.company.name
                  .toString()
                  .toLowerCase()}.com`}
                fallbackSrc={`https://ui-avatars.com/api/?${localJob.company.name.replace(/\s/g, '')}`}
                alt="company logo"
                className="w-24 m-8"
              />
              <div className="mt-4 float-right pr-4  flex">
                <div
                  className="cursor-pointer mx-2 hover:opacity-50"
                  onClick={handleStarred}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={
                      localJob.isStarred ? "text-yellow-400 fill-current" : ""
                    }
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                </div>
                <div className="cursor-pointer mx-2 hover:text-lg">
                  <MaterialIcon
                    icon="delete"
                    onClick={(e) => handleDelete(e)}
                  />
                </div>
                {localJob.link ? (
                  <div className="cursor-pointer mx-2 hover:opacity-50">
                    <a
                      href={
                        localJob.link.indexOf("://") === -1
                          ? "http://" + localJob.link
                          : localJob.link
                      }
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MaterialIcon icon="link" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setApplicationModal,
      setJob,
      updateJob,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(ApplicationCard);
