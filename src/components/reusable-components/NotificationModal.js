import MaterialIcon from "material-icons-react";
import propTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeNotification } from "../../store/actions/home.actions";

const Dialog = (isOpen) => {
  return {
    display: isOpen ? "flex" : "none",
    position: "fixed",
    right: 15,
    bottom: 15,
    zIndex: 5,
    backgroundColor: "#fefefe",
    margin: "auto",
    width: "auto",
    height: "auto",
    overflow: "10%",
    justifyContent: "center",
    alignItems: "center",
  };
};

const NotificationModal = ({
  notification,
  notificationMessage,
  closeNotification,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeNotification();
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);
  return (
    <div style={Dialog(notification)} className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow">
      {notificationMessage[0] === "success" ? (
        <div className="flex flex-grow justify-between items-center mx-4">
          <MaterialIcon icon="check" size="50px" color="green" />
          <p className="ml-4 font-normal mb-2">
            {notificationMessage[1]}
          </p>
        </div>
      ) : (
        <div className="flex flex-grow justify-between items-center mx-4">
          <MaterialIcon icon="error_outline" size="50px" color="red" />
          <p className="ml-4 font-normal mb-2">
            {notificationMessage[1]}
          </p>
        </div>
      )}
    </div>
  );
};
NotificationModal.propTypes = {
  notification: propTypes.bool.isRequired,
  notificationMessage: propTypes.array.isRequired,
  closeNotification: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    notification: state.home.notification,
    notificationMessage: state.home.notificationMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeNotification,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal);
