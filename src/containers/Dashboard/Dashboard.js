import React, { useEffect, useState } from "react";
import ApplicationNumber from "./ApplicationNumber";
import ApplicationList from "./ApplicationList";
import CreateApplication from "./CreateApplication";

import MaterialIcon from "material-icons-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setApplicationModal, getJobs } from "../../store/actions";
import ApplicationModal from "./ApplicationModal";

const Dashboard = ({ setApplicationModal, getJobs, jobsAll }) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized) {
      getJobs();
      setInitialized(true);
    }
  },[]);
  return (
    <div className="w-full lg:flex lg:flex-row-reverse mt-8">
      <ApplicationNumber className="w-1/4"/>
      {initialized && jobsAll.length > 0 ? (
        <ApplicationList className="w-3/4" />
      ) : (
        <CreateApplication />
      )}

      <div
        className="lg:hidden fixed bottom-0 right-0 z-30 mx-4 my-4 bg-purple-600 w-12 h-12 rounded-full text-center pt-3"
        onClick={() => setApplicationModal(true)}
      >
        <MaterialIcon icon="add" color="white" />
      </div>
      <ApplicationModal />
    </div>
  );
};

Dashboard.propTypes = {
  setApplicationModal: PropTypes.func.isRequired,
  jobsAll: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    jobsAll: state.dashboard.jobsAll
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setApplicationModal,
      getJobs
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
