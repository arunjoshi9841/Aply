import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
//import reusable components
import { Modal } from "../../components/reusable-components";
//import Actions
import * as Actions from "../../store/actions/home.actions";
import MaterialIcon from "material-icons-react";
const Auth = ({ isModalOpen, setLoginModal }) => {
  const [view, setView] = useState(1);

  const handleClose = () => {
    setLoginModal(false);
  };

  const getCircularText = () => {
    if (view === 2 || view === 3) {
      return (
        <div className="m-auto text-center" onClick={() => setView(1)}>
          <MaterialIcon icon="account_circle" size="50px" color="#9F7AEA" />
          <p className="block text-gray-700 text-sm font-bold mb-2 mx-5">
            {" "}
            Go Back to Sign In
          </p>
        </div>
      );
    } else
      return (
        <div className="m-auto w-full text-center" onClick={() => setView(2)}>
          <MaterialIcon icon="how_to_reg" size="50px" color="#9F7AEA" />
          <p className="block text-gray-700 text-sm font-bold mb-2 mx-5">
            {" "}
            Register Here
          </p>
        </div>
      );
  };
  return (
    isModalOpen?<Modal isOpen={isModalOpen} onClose={handleClose}>        
        <div className="z-50 w-32 h-32 rounded-full float-right md:-mr-16 -mt-12 md:mt-12 flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-gray-300">
          {getCircularText()}
        </div>
        <div className="m-12">
          {view === 1 ? (
            <div>
              <Login />
              {/* <span
                className="font-bold underline text-sm text-blue-500 hover:text-blue-800"
                onClick={() => setView(3)}
              >
                Forgot Password?
              </span> */}
            </div>
          ) : null}
          {view === 2 ? <Register onClose={handleClose}/> : null}
          {view === 3 ? <ForgotPassword /> : null}
        </div>
      </Modal>:<></>
  );
};

Auth.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isModalOpen: state.home.isModalOpen
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setLoginModal: Actions.setLoginModal
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));
