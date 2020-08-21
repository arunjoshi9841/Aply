import MaterialIcon from "material-icons-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { setUnauthorized } from "../../store/actions";
import getGravatar from "../../utils/getGravatar";

const NavBar = ({
  isAuthenticated,
  userName,
  setUnauthorized,
  emailAddress,
}) => {
  const [nav, setNav] = useState("Home");
  const [menuToogle, setMenuToggle] = useState(false);
  const [sidebarToogle, setSidebarToogle] = useState(false);
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setNav("Home");
        break;
      // case "/Contact":
      //   setNav("Contact");
      //   break;
      case "/:user":
        setNav("Profile");
        break;
      // case "/About":
      //   setNav("About");
      //   break;
      case "/:user/Dashboard":
        setNav("Dashboard");
        break;
      default:
        setNav("Home");
        break;
    }
  }, []);

  const handleProfile = () => {
    setNav("Profile");
    setMenuToggle(!menuToogle);
  };
  const handleLogOut = () => {
    setUnauthorized();
    setMenuToggle(!menuToogle);
  };
  return (
    <div>
      <div className="h-20 w-full mt-12">
        <div className="h-12 bg-purple-500">
          {isAuthenticated ? (
            <div className="w-full flex flex-row-reverse">
              <div
                className="mr-8 mt-2"
                onClick={() => setMenuToggle(!menuToogle)}
              >
                <img
                  src={getGravatar(`${emailAddress}`)}
                  className={
                    nav === "Profile"
                      ? "w-12 h-12 mt-4 rounded-full cursor-pointer"
                      : "w-8 h-8 rounded-full cursor-pointer"
                  }
                  alt="profile"
                />
              </div>
              <div className="flex w-full flex-row-reverse">
                <Link to={`/${userName}/Dashboard`} className="no-underline">
                  <div
                    className={
                      nav === "Dashboard"
                        ? "flex mr-8 cursor-pointer p-2"
                        : "flex mr-8 cursor-pointer p-2 opacity-75"
                    }
                    onClick={() => setNav("Dashboard")}
                  >
                    <MaterialIcon icon="dashboard" color="white" /> &nbsp;
                    <span className="text-white text-sm">Dashboard</span>
                  </div>
                </Link>               
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-row-reverse">
              <div className="flex w-full flex-row-reverse">               
                <Link to="/" className="no-underline">
                  <div
                    className={
                      nav === "Home"
                        ? "flex mr-8 cursor-pointer p-2"
                        : "flex mr-8 cursor-pointer p-2 opacity-75"
                    }
                    onClick={() => setNav("Home")}
                  >
                    <MaterialIcon icon="home" color="white" /> &nbsp;
                    <span className=" inline text-white text-sm">Home</span>
                  </div>
                </Link>
              </div>              
            </div>
          )}
        </div>
        <div className="h-24 bg-purple-500 w-24 ml-12 -mt-16 flex justify-center items-center">
          <Link to={`/`} className="no-underline">
            <div className="bg-white rounded-full p-2">
              <img src="/logo.png" alt="paperClipLogo" width="40" />
            </div>
          </Link>
        </div>
        <div className="bg-purple-500 ml-40 -mt-16">
          <p className="text-white font-bold text-xl">PAPERCLIP</p>
        </div>
      </div>
      <div
        className={
          menuToogle
            ? "bg-white shadow-md mt-2 mr-2 absolute mt-24 top-0 right-0 overflow-auto z-30"
            : "bg-white shadow-md mt-2 mr-2 absolute mt-24 top-0 right-0 overflow-auto z-30 hidden"
        }
      >
        <ul className="list-reset">
          <Link to={`/${userName}`}>
            <li
              className="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline"
              onClick={handleProfile}
            >
              My account
            </li>
          </Link>
          <li>
            <hr className="border-t mx-2 border-gray-400" />
          </li>
          <li
            className="px-4 py-2 block text-orange-600 font-bold hover:bg-orange-600 hover:text-white no-underline hover:no-underline"
            onClick={handleLogOut}
          >
            Logout
          </li>
        </ul>
      </div>      
    </div>
  );
};

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setUnauthorized: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.user.userName,
    emailAddress: state.user.emailAddress,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setUnauthorized,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
