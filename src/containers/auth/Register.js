import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import getCountries from "../../utils/getCountries";
import checkPasswordValidation from "../../utils/checkPasswordValidation";
import { addUser } from "../../store/actions";

const initialUser = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
  dob: "",
  country: "",
  city: "",
  zip: ""
};

const Register = ({registerError, addUser}) => {
  const [user, setUser] = useState({ ...initialUser });
  const [error, setError] = useState(false);
  const [passwordEqual, setPasswordEqual] = useState(true);
  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
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
    addUser({
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      password: user.password,
      dob: user.dob,
      address: {
        country: user.country,
        city: user.city,
        zip: user.zip
      }
    });
  };

  return (
    <div>
      <p className="text-2xl text-center font-title font-bold text-purple-700 uppercase">
        Register
      </p>
      <form className="mt-12 flex flex-col">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name*
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={e => handleChange(e)}
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              type="text"
              onChange={e => handleChange(e)}
              placeholder="Lat Name"
              value={user.lastName}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailAddress"
            >
              Email*
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="emailAddress"
              type="email"
              onChange={e => handleChange(e)}
              placeholder="******************"
              value={user.emailAddress}
              required
            />
            {/* <p className="text-gray-600 text-xs italic">
              email vaildation error
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password*
            </label>
            <input
              className={
                error
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              }
              id="password"
              type="password"
              onChange={e => handleChange(e)}
              placeholder="******************"
              value={user.password}
              required
            />
            <p
              className={
                error
                  ? "text-red-500 text-xs italic"
                  : "text-gray-600 text-xs italic"
              }
            >
              Password must be 7 characters long
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
              className={
                !passwordEqual
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              }
              id="confirmPassword"
              type="password"
              onChange={e => handleChange(e)}
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
        <div className="flex flex-wrap -mx-3 mb-2">
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
                onChange={e => handleChange(e)}
                value={user.country}
              >
                {getCountries().map(country => (
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              type="text"
              onChange={e => handleChange(e)}
              placeholder="City"
              value={user.city}
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="zip"
              type="text"
              onChange={e => handleChange(e)}
              placeholder="Zip"
              value={user.zip}
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="dob"
              onChange={e => handleChange(e)}
              type="date"
              value={user.dob}
              required
            />
          </div>

          <div className="flex items-center justify-between mt-12 ml-3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
          <p className="text-center text-red-500 text-md">{registerError}</p>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  addUser: PropTypes.func.isRequired
};

const mapStateToProps=({auth})=>{
  return{
  registerError: auth.registerError
  }
  }
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addUser
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
