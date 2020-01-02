import React from "react";

const ForgotPassword = () => {
  // const handleChange = e => {
  //   console.log(e.target.value);
  // };
  return (
    <div>
      <p className="text-2xl text-center font-title font-bold text-purple-700 uppercase">
        forgot password
      </p>
      <div className="mt-12 flex flex-col mb-4">
        <label className="text-gray-700 text-sm font-bold mb-4" htmlFor="username">
          Enter your email address
        </label>
        <input
          class="mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="email"
          value=""
        />
        <p className="text-sm">
          We will send a password reset link to the
          <br /> provided email address
        </p>        
      </div>
      <div className="flex items-center justify-between">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Submit
          </button>
        </div>
    </div>
  );
};

export default ForgotPassword;
