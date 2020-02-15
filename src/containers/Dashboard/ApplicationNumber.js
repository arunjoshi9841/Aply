import React, { useState } from "react";
import getColor from "../../utils/getColor";

import MaterialIcon from "material-icons-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setApplicationModal } from "../../store/actions";

const ApplicationNumber = ({ setApplicationModal, jobsAll }) => {
  const [selected, setSelected]= useState(1);
  const [value, setValue]=useState(jobsAll.length)
  const handleChange=(e)=>{
    setSelected(e.target.value);
    setValue( jobsAll.filter(job=>job.status===e.target.value).length)
  }
  return (
    <div className="pb-4">
      <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
        <div className="border-b px-6">
          <div className="flex justify-between -mb-px">
            <div className="lg:hidden text-blue-dark py-4 text-lg">
              Application
            </div>
          </div>
        </div>
        <div className="flex items-center px-6 lg:hidden">
          <div className="flex-grow flex-no-shrink py-6">
            <div className="text-grey-darker mb-2">
              <span className="text-5xl text-blue-600"  style={{ color: getColor(2) }}>{value}</span>
            </div>           
          </div>
          <div className="flex-shrink w-40 inline-block">
            <select className="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded" onChange={(e)=>handleChange(e)} value={selected}>
              <option value={1} style={{ color: getColor(1) }}>Pending</option>
              <option value={2} style={{ color: getColor(2) }}>Rejected</option>
              <option value={3} style={{ color: getColor(2) }}>Interview</option>
              <option value={4} style={{ color: getColor(4) }}>Offer</option>
              <option value={5} style={{ color: getColor(5) }}>Accepted</option>
            </select>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <div
            className="text-center py-4 cursor-pointer"
            onClick={() => setApplicationModal(true)}
          >
            <div className="border-b">
              <div className="bg-purple-600 w-12 h-12 rounded-full text-center pt-3 mx-auto my-2">
                <MaterialIcon icon="add" color="white" />
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                create new Application
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div className="border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-2xl" style={{ color: getColor(2) }}>
                {jobsAll.filter(job=>job.status===2).length}
                </span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Rejected
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div className="border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-2xl" style={{ color: getColor(1) }}>
                {jobsAll.filter(job=>job.status===1).length}
                </span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Pending
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div className="border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-2xl" style={{ color: getColor(3) }}>
                  {jobsAll.filter(job=> job.status===3).length}
                </span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Interview
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div className="border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-2xl" style={{ color: getColor(3) }}>
                  {jobsAll.filter(job=> job.status===4).length}
                </span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Offer
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div>
              <div className="text-grey-darker mb-2">
                <span className="text-2xl text-blue-600">{jobsAll.length}</span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Applications
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ApplicationNumber.propTypes = {
  setApplicationModal: PropTypes.func.isRequired,
  jobsAll: PropTypes.array.isRequired
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setApplicationModal
    },
    dispatch
  );
};
const mapStateToProps = state => {
  return {
    jobsAll: state.dashboard.jobsAll
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationNumber);
