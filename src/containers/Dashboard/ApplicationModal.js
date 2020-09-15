import MaterialIcon from "material-icons-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "../../components/reusable-components";
import { createJob, setApplicationModal, updateJob } from "../../store/actions";
import getCountries from "../../utils/getCountries";

const initialJob = {
  status: 1,
  note: "",
  position: "",
  recruiter: {
    name: "",
    emailAddress: "",
  },
  company: {
    name: "",
    address: {
      country: "United States",
      city: "",
      zipCode: null,
    },
  },
  isStarred: false,
  link: "",
};

const ApplicationModal = ({
  isModalOpen,
  setApplicationModal,
  selectedJob,
  createJob,
  jobError,
  updateJob,
}) => {
  const [toggleRecruiter, setToggleRecruiter] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [job, setJob] = useState(initialJob);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (selectedJob.jobId) {
      setIsNew(false);
      setJob({...selectedJob});
    }
  }, [selectedJob]);
  useEffect(()=>{
    if(job.status && job.company.name.length>0 && job.position.length>0){
      setValidated(true);
    }else{
      setValidated(false);
    }
  }, [job])

  const handleClose = () => {
    setToggleRecruiter(false);
    if (!isNew) {
      setJob(initialJob);
    }
    setIsNew(true);
    setApplicationModal(false);
  };
  const handleChange = (e) => {
    if(e.target.id==="status"){
      setJob({ ...job, [e.target.id]:parseInt(e.target.value)});
    }else{
      setJob({ ...job, [e.target.id]: e.target.value});
    }
  };
  const handleRecruiterChange = (e) => {
    let tempRecruiter = { ...job.recruiter };
    tempRecruiter = { ...tempRecruiter, [e.target.id]: e.target.value };
    setJob({ ...job, recruiter: tempRecruiter });
  };
  const handleCompanyChange = (e) => {
    let tempComp = { ...job.company };
    if (e.target.id === "name") {
      tempComp.name = e.target.value;
      setJob({ ...job, company: tempComp });
    } else {
      let tempCompAdd = { ...job.company.address };
      tempCompAdd = { ...tempCompAdd, [e.target.id]: e.target.value};
      tempComp.address = tempCompAdd;
      setJob({ ...job, company: tempComp });
    }
  };
  const handleSubmit = () => {
    isNew ? createJob(job) : updateJob(job);
    setToggleRecruiter(false);
    setJob(initialJob);
    setIsNew(true);
  };
  return (
    <Modal isOpen={isModalOpen} onClose={handleClose}>
      <div className="m-12">
        <div>
          <p className="text-2xl text-center uppercase text-blue-900 font-bold leading-none tracking-wide">
            {isNew ? "Create Application" : "Update Application"}
          </p>
        </div>
        <form
          className="mt-12"
          style={{ maxHeight: "60vh", overflowY: "auto", overflowX: "hidden" }}
        >
          <div className="mb-4 flex flex-col">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Company Name
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="name"
              type="text"
              value={job.company.name}
              onChange={(e) => handleCompanyChange(e)}
              required
            />
          </div>
          <div className="mb-6 flex flex-col">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="position"
            >
              Position
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="position"
              type="text"
              value={job.position}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="status"
                  value={job.status}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                >
                  <option value={1}>Applied</option>
                  <option value={2}>Rejected</option>
                  <option value={3}>Interview</option>
                  <option value={4}>Offer</option>
                  <option value={5}>Accepted</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="link"
              >
                URL/Link
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="link"
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="link"
                value={job.link}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="country"
                  onChange={(e) => handleCompanyChange(e)}
                  value={job.company.address.country}
                >
                  <option value="none" key={0}>
                    Select an Option
                  </option>
                  {getCountries().map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="city"
                type="text"
                onChange={(e) => {
                  handleCompanyChange(e);
                }}
                placeholder="City"
                value={job.company.address.city}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="zipCode"
                type="tel"
                onChange={(e) => {
                  handleCompanyChange(e);
                }}
                placeholder="Zip"
                value={job.company.address.zipCode}
              />
            </div>
          </div>
          <div className="flex">
            <p className="text-gray-700 text-sm font-bold mb-2 mr-2">
              Recruiter Info
            </p>
            <div onClick={() => setToggleRecruiter(!toggleRecruiter)}>
              <MaterialIcon
                icon={
                  toggleRecruiter ? "keyboard_arrow_up" : "keyboard_arrow_down"
                }
              />
            </div>
          </div>
          {toggleRecruiter ? (
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2 md:pr-3 mb-6 md:mb-0">
                <label
                  className="text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Recruiter"
                >
                  Recruiter's Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  onChange={(e) => handleRecruiterChange(e)}
                  placeholder="Recruiter"
                  value={job.recruiter.name}
                />
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Recruiter"
                >
                  Recruiter's Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="emailAddress"
                  type="Email"
                  onChange={(e) => handleRecruiterChange(e)}
                  placeholder="RecruiterEmail"
                  value={job.recruiter.emailAddress}
                />
              </div>
            </div>
          ) : null}
          <p className="text-center text-red-500 text-sm">{jobError}</p>
          <div className="flex items-center justify-between mt-4">
            <button
              className={`shadow bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${!validated?`opacity-50 cursor-not-allowed`:`hover:bg-purple-400`}`}
              type="button"
              disabled={!validated}
              onClick={handleSubmit}
            >
              {isNew ? "Submit" : "Update"}
            </button>
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-3"
              type="button"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

ApplicationModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setApplicationModal: PropTypes.func.isRequired,
  selectedJob: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.dashboard.isApplicationOpen,
    userId: state.user.uid,
    jobError: state.dashboard.error,
    selectedJob: state.dashboard.job,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setApplicationModal,
      createJob,
      updateJob,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationModal);
