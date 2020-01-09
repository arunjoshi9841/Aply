import React from 'react';


import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Modal } from "../../components/reusable-components";

import {setApplicationModal} from "../../store/actions"

const ApplicationModal = ({isModalOpen, setApplicationModal}) => {
    const handleClose=()=>{
        setApplicationModal(false);
    }
    return (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
        <form className="mt-12 flex flex-col mx-4 mb-4">
        <div className="mb-4 flex flex-col">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="companyName"
            type="text"
            value={""}
            onChange={()=>{}}
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

            id="passpositionword"
            type="text"
            value={""}
            onChange={()=>{}}
            required
          />
         
        </div>
         <div className="flex items-center justify-between">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
              onClick={()=>{}}
          >
            Sign In
          </button>
        </div>
      </form>

        </Modal>
    );
};

ApplicationModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setApplicationModal: PropTypes.func.isRequired
  };
  
  const mapStateToProps=({dashboard})=>{
  return{
    isModalOpen: dashboard.isModalOpen
  }
  }
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        setApplicationModal
      },
      dispatch
    );
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ApplicationModal); 