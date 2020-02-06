import React from "react";
import newEntry from "../../utils/svg/undraw_new_entries_nh3h.svg";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {setApplicationModal} from "../../store/actions"
const CreateApplication = ({setApplicationModal}) => {
  return (
    <div className="w-full mt-16">
      <div className="items-center">
        <img src={newEntry} alt="new entry" className="max-w-sm mx-auto hover:opacity-50 cursor-pointer" onClick={()=>setApplicationModal(true)}/>
      </div>
      <p className="text-3xl text-gray-700 text-center py-8">Stay organized in your job application process.<br/> Create an Entry!!</p>
    </div>
  );
};
CreateApplication.propTypes = {
    setApplicationModal: PropTypes.func.isRequired
  };
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        setApplicationModal
      },
      dispatch
    );
  };
  export default connect(null, mapDispatchToProps)(CreateApplication);
