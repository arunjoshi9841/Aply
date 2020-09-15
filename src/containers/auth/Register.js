import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import getCountries from "../../utils/getCountries";
import checkPasswordValidation from "../../utils/checkPasswordValidation";
import { addUser, editUser, resetError } from "../../store/actions";

const Register = ({ registerError, addUser, initialUser, edit, editUser, resetError, onClose }) => {
  const [user, setUser] = useState({ ...initialUser });
  const [error, setError] = useState(false);
  const [passwordEqual, setPasswordEqual] = useState(true);
  const inputStyle =
    "w-full block bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";

  const handleChange = (e) => {
    if (
      e.target.id === "country" ||
      e.target.id === "city" ||
      e.target.id === "zip"
    ) {
      setUser({
        ...user,
        address: { ...user.address, [e.target.id]: e.target.id === 'zip' ? parseInt(e.target.value) : e.target.value},
      });
    } else {
      setUser({ ...user, [e.target.id]: e.target.value });
    }

    if (e.target.id === "password") {
      setError(checkPasswordValidation(e.target.value));
    }
    if (e.target.id === "confirmPassword") {
      user.password === e.target.value
        ? setPasswordEqual(true)
        : setPasswordEqual(false);
    }
  };
  const handleSubmit = () => {
    addUser(user);
  };
  const handleEdit=()=>{
    editUser(user);
  };
  return (
    <div>
      <p className="text-2xl text-center uppercase text-blue-900 font-bold leading-none tracking-wide">
        {edit ? "Edit Profile" : "Register"}
      </p>
      <form        
        style={{ maxHeight: "65vh", overflowY: "auto", overflowX: "hidden" }}
        onClick={()=>resetError()}
      >
        <p className="text-center text-red-500 text-md py-4">{registerError}</p>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name*
            </label>
            <input
              className={inputStyle}
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={(e) => handleChange(e)}
              value={user.firstName}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name*
            </label>
            <input
              className={inputStyle}
              id="lastName"
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="Lat Name"
              value={user.lastName}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailAddress"
            >
              Email*
            </label>
            <input
              className={inputStyle}
              id="emailAddress"
              type="email"
              onChange={(e) => handleChange(e)}
              placeholder="******************"
              value={user.emailAddress}
              required
            />           
          </div>
        </div>
        {!edit && (
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password*
              </label>
              <input
                className={`${inputStyle}${
                  error ? " focus:border-red-500" : ""
                }`}
                id="password"
                type="password"
                onChange={(e) => handleChange(e)}
                placeholder="******************"
                value={user.password}
                required
              />
              <p
                className={
                  error
                    ? "text-red-500 text-xs italic"
                    : "hidden text-gray-600 text-xs italic"
                }
              >
                Password must be 8 characters long
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password*
              </label>
              <input
                className={`${inputStyle}${
                  !passwordEqual ? " focus:border-red-500" : ""
                }`}
                id="confirmPassword"
                type="password"
                onChange={(e) => handleChange(e)}
                placeholder="******************"
                value={user.confirmPassword}
                required
              />
              {!passwordEqual ? (
                <p className="text-red-600 text-xs italic">
                  Password is not equal
                </p>
              ) : null}
            </div>
          </div>
        )}
        <div className="flex flex-wrap mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="country"
                onChange={(e) => handleChange(e)}
                value={user.address.country}
              >
                {getCountries().map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className={inputStyle}
              id="city"
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="City"
              value={user.address.city}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="zip"
            >
              Zip
            </label>
            <input
              className={inputStyle}
              id="zip"
              type="text"
              pattern="[0-9]*"
              onChange={(e) => handleChange(e)}
              placeholder="Zip"
              value={user.address.zip}
            />
          </div>
          <div className="w-full md:w-2/3 px-3 mt-6 md:mb-0">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth*
            </label>
            <input
              className={inputStyle}
              id="dob"
              onChange={(e) => handleChange(e)}
              type="date"
              value={user.dob}
              required
            />
          </div>

          <div className="flex items-center justify-between mt-12 ml-3">
            {edit?<button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleEdit}
            >
              Save
            </button>:<button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSubmit}
            >
              Register
            </button>}
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-3"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => {
  return {
    registerError: auth.registerError,
    initialUser: auth.initUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser,
      editUser,
      resetError,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
