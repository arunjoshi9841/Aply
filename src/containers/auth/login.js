import React from "react";

const Login = () => {
  const handleChange = e => {
    console.log(e.target.value);
  };
  return (
    <div>
      <p className="text-2xl text-center font-title font-bold text-purple-700 uppercase">
        Login
      </p>
      <form className="mt-12 flex flex-col">
        <div className="mb-4 flex flex-col">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="Jane Doe"
          />{" "}
        </div>
        <div className="mb-6 flex flex-col">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">error will be here</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
