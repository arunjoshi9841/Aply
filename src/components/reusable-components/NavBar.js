import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import getGravatar from "../../utils/getGravatar";
import Folder from "../../utils/svg/undraw_folder_39kl.svg"

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { setUnauthorized } from "../../store/actions";

const NavBar = ({ isAuthenticated, userName, setUnauthorized, emailAddress }) => {
  const [nav, setNav] = useState("Home");
  const [menuToogle, setMenuToggle] = useState(false);
  const [sidebarToogle, setSidebarToogle] = useState(false);
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setNav("Home");
        break;
      case "/Contact":
        setNav("Contact");
        break;
      case "/:user":
        setNav("Profile");
        break;
      case "/About":
        setNav("About");
        break;
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
                className="lg:hidden mr-8 mt-2"
                onClick={() => setSidebarToogle(!sidebarToogle)}
              >
                <MaterialIcon icon="menu" color="white" />
              </div>
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
              <div className="hidden lg:flex w-full flex-row-reverse">
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
                <Link to={`/${userName}/Statistics`} className="no-underline">
                  <div
                    className={
                      nav === "Statistics"
                        ? "flex mr-8 cursor-pointer p-2"
                        : "flex mr-8 cursor-pointer p-2 opacity-75"
                    }
                    onClick={() => setNav("Statistics")}
                  >
                    <MaterialIcon icon="data_usage" color="white" /> &nbsp;
                    <span className="text-white text-sm">Statistics</span>
                  </div>
                </Link>
                <Link to={`/${userName}/Shared`} className="no-underline">
                  <div
                    className={
                      nav === "Shared"
                        ? "flex mr-8 cursor-pointer p-2"
                        : "flex mr-8 cursor-pointer p-2 opacity-75"
                    }
                    onClick={() => setNav("Shared")}
                  >
                    <MaterialIcon icon="share" color="white" /> &nbsp;
                    <span className="text-white text-sm">Shared</span>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-row-reverse">
              <div className="hidden lg:flex w-full flex-row-reverse">
                <Link to="/About" className="no-underline">
                  <div
                    className={
                      nav === "About"
                        ? "flex mr-8 cursor-pointer p-2"
                        : "flex mr-8 cursor-pointer p-2 opacity-75"
                    }
                    onClick={() => setNav("About")}
                  >
                    <MaterialIcon icon="description" color="white" /> &nbsp;
                    <span className="text-white text-sm">About</span>
                  </div>
                </Link>
                <Link to="/Contact" className="no-underline">
                  <div
                    className={
                      nav === "Contact"
                        ? "flex mr-8 cursor-pointer p-2"
                        : "flex mr-8 cursor-pointer p-2 opacity-75"
                    }
                    onClick={() => setNav("Contact")}
                  >
                    <MaterialIcon icon="perm_contact_calendar" color="white" />{" "}
                    &nbsp;
                    <span className="text-white text-sm">Contact</span>
                  </div>
                </Link>
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
              <div
                className="lg:hidden mr-8 mt-2"
                onClick={() => setSidebarToogle(!sidebarToogle)}
              >
                <MaterialIcon icon="menu" color="white" />
              </div>
            </div>
          )}
        </div>
        <div className="h-24 bg-purple-500 w-24 ml-12 -mt-16"></div>
        <div className="-mt-48 ml-16 w-20 h-20 pr-2">
          <img src={Folder} alt="paperClipLogo"/>
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
      <div
        className={
          sidebarToogle
            ? "flex flex-col absolute top-0 mt-24 right-0 h-screen w-64 bg-white border border-gray-light"
            : "hidden"
        }
      >
        {isAuthenticated ? (
          <div>
            {" "}
            <Link to={`/${userName}/Dashboard`} className="no-underline">
              <div className="flex border-b-2 py-4 px-4 h-16 hover:bg-grey-200 cursor-pointer">
                <MaterialIcon icon="dashboard" /> &nbsp;
                <span className="text-lg">Dashboard</span>
              </div>
            </Link>
            <Link to={`/${userName}/Statistics`} className="no-underline">
              <div className="flex border-b-2 py-4 px-4 h-16 hover:bg-grey-200 cursor-pointer">
                <MaterialIcon icon="data_usage" /> &nbsp;
                <span className="text-lg">Statistics</span>
              </div>
            </Link>
            <Link to={`/${userName}/Shared`} className="no-underline">
              <div className="flex border-b-2 py-4 px-4 h-16 hover:bg-grey-200 cursor-pointer">
                <MaterialIcon icon="share" /> &nbsp;
                <span className="text-lg">Shared</span>
              </div>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/" className="no-underline">
              <div className="flex border-b-2 py-4 px-4 h-16 hover:bg-grey-200 cursor-pointer">
                <MaterialIcon icon="home" /> &nbsp;
                <span className="text-lg">Home</span>
              </div>
            </Link>
            <Link to="/About" className="no-underline">
              <div className="flex border-b-2 py-4 px-4 h-16 hover:bg-grey-200 cursor-pointer">
                <MaterialIcon icon="description" /> &nbsp;
                <span className="text-lg">About Us</span>
              </div>
            </Link>
            <Link to="/Contact" className="no-underline">
              <div className="flex border-b-2 py-4 px-4 h-16 hover:bg-grey-200 cursor-pointer">
                <MaterialIcon icon="perm_contact_calendar" /> &nbsp;
                <span className="text-lg">Contact Us</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setUnauthorized: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.user.userName,
    emailAddress: state.user.emailAddress
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUnauthorized
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
