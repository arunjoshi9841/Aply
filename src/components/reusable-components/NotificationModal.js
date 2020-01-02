import React, { useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MaterialIcon from "material-icons-react";
import { closeNotification } from "../../store/actions/home.actions";

const Dialog = isOpen => {
  return {
    display: isOpen ? "flex" : "none",
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 2,
    backgroundCcolor: "#fefefe",
    margin: "auto",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width: "20%",
    height: "10%",
    overflow: "10%"
  };
};

const NotificationModal = ({
  notification,
  notificationMessage,
  closeNotification
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeNotification();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={Dialog(notification)}>
      {notificationMessage[0] === "success" ? (
        <div className="flex">
          <MaterialIcon
            icon="account_circle"
            size="50px"
            color="#9F7AEA"
          />
          <p className="text-green-700 text-md font-bold mb-2 my-auto">
            {notificationMessage[1]}
          </p>
        </div>
      ) : (
        <div className="flex">
          <MaterialIcon
            icon="account_circle"
            size="50px"
            color="#9F7AEA"
          />
          <p className="text-red-700 text-md font-bold mb-2 my-auto">
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
  closeNotification: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    notification: state.home.notification,
    notificationMessage: state.home.notificationMessage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      closeNotification
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal);
