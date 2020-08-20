import React, { useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import checkPasswordValidation from "../../utils/checkPasswordValidation";

import { login,resetError } from "../../store/actions";

const Login = ({ loginError, login, resetError}) => {
  const [user, setUser] = useState({ emailAddress: "", password: "" });
  const [error, setError] = useState(false);
  const inputStyle= "w-full block bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  const handleSubmit = () => {
    login(user);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
    if (e.target.id === "password") {
      setError(checkPasswordValidation(e.target.value));
    }
  };
  return (
    <div>
      <p className="text-2xl text-center font-title font-bold text-purple-700 uppercase">
        Login
      </p>
      <p className="text-center text-red-500 text-sm p-4">{loginError}</p>
      <form className="mt-12 block" onClick={()=>resetError()}>
        <div className="mb-4 flex flex-col">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className={inputStyle}
            id="emailAddress"
            type="email"
            value={user.emailAddress}
            onChange={e => handleChange(e)}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`${inputStyle}${error?' focus:border-red-500':''}`}
            id="password"
            type="password"
            placeholder="******************"
            value={user.password}
            onChange={e => handleChange(e)}
            required
          />
          <p
            className={
              error
                ? "text-red-500 text-xs italic my-5"
                : "hidden"
            }
          >
            Password must be 8 characters long
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
              onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginError:PropTypes.string.isRequired
};

const mapStateToProps=({auth})=>{
return{
loginError: auth.loginError
}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login,
      resetError,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
