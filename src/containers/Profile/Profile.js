import React, { useState } from "react";
import MaterialIcon from "material-icons-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import getGravatar from "../../utils/getGravatar";
import profileData from "../../utils/svg/undraw_profile_data_mk6k.svg";
import Modal from "../../components/reusable-components/Modal";
import { bindActionCreators } from "redux";
import Register from "../auth/Register";
import { resetError, setEditModal } from "../../store/actions";
const Profile = ({ user, resetError, isEditModal, setEditModal }) => {
  const handleClose=()=>{
  setEditModal(false);
  resetError();
  }
  return (
    <div className="max-w-4xl h-7/8 flex items-center mx-auto">
      <div id="profile" className="w-full flex shadow-2xl bg-white">
        <div className="lg:w-3/5">          
          <div className="p-4 md:p-12 lg:text-left">
            <div className="flex">
            <img
            src={getGravatar(`${user.emailAddress}`)}
            className="w-12 h-12 my-auto mx-4 rounded-full"
            alt="profile"
          />
              <h1 className="text-3xl font-bold pt-8 lg:pt-0 mr-4">
                {user.firstName+" "+user.lastName}
              </h1>
              <div
                className="my-auto cursor-pointer"
                onClick={()=>setEditModal(true)}
              >
                <MaterialIcon icon="edit" color="#9F7AEA" />
              </div>
            </div>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-50 pl-6 pt-4">
              <div className="flex">
                <div className="mr-4">
                  <MaterialIcon icon="email" color="#609B9C" />
                </div>                
                <p className="text-xs font-bold">{user.emailAddress}</p>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <MaterialIcon icon="home" color="#609B9C" />
                </div>
                {user.address ? (
                  <p className="text-xs font-bold">
                    {user.address.city}, &nbsp; {user.address.country}, &nbsp;
                    {user.address.zip}
                  </p>
                ) : null}
              </div>
            </div>
            <p className="pt-8 text-sm">
              <i>
                “The crowning fortune of a man is to be born to some pursuit
                which finds him employment and happiness, whether it be to make
                baskets, or broadswords, or canals, or statues, or songs.”
              </i>
              <br />
              —Ralph Waldo Emerson
            </p>
          </div>
        </div>

        <div className="hidden lg:block w-2/5 m-8">
          <img src={profileData} alt="profileData" />
        </div>
      </div>
      {isEditModal&&<Modal isOpen={isEditModal} onClose={handleClose}>  
      <div className="m-12">
      <Register edit={true}/>
      </div>
      </Modal>}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user, home }) => {
  return {
    user: user,
    isEditModal: home.isEditModal,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetError,
      setEditModal
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
