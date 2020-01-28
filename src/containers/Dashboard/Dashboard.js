import React, { useEffect } from "react";
import ApplicationNumber from "./ApplicationNumber";
import ApplicationList from "./ApplicationList";

import MaterialIcon from "material-icons-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {setApplicationModal} from "../../store/actions"
import ApplicationModal from "./ApplicationModal"

const Dashboard = ({setApplicationModal}) => {
  useEffect(() => {}, []);
  return (
    <div className="w-full lg:flex lg:flex-row-reverse mt-8">
      <ApplicationNumber className="w-1/4"/>     
      <ApplicationList className="w-3/4"/>
     
      
      <div className="lg:hidden fixed bottom-0 right-0 z-30 mx-4 my-4 bg-purple-600 w-12 h-12 rounded-full text-center pt-3" onClick={()=>setApplicationModal(true)}>
        <MaterialIcon icon="add" color="white" />
      </div>
      <ApplicationModal/>
    </div>
  );
};

Dashboard.propTypes = {
  setApplicationModal: PropTypes.func.isRequired
};

// const mapStateToProps=({dashboard})=>{
// return{
//   isModalOpen: dashboard.isModalOpen
// }}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setApplicationModal
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(Dashboard);
