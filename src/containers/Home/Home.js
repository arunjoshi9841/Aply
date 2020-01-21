import React from "react";
import Auth from "../auth/Auth";
import Undraw from "react-undraw";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Footer from "../../components/reusable-components/Footer";

import { setLoginModal } from "../../store/actions";

const Home = ({ isAuthenticated, setLoginModal }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <section className="flex flex-col-reverse sm:flex-row py-12">
        <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">
            Monitor
          </h1>
          <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
            Your Job Application
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum
            rutrum metus at enim congue scelerisque. Sed suscipit metu non
            iaculis semper consectetur adipiscing elit.
          </p>
          <div className="flex">
            <Link
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-4"
              to="/About"
            >
              Learn More
            </Link>
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => setLoginModal(true)}
            >
              Log In
            </button>
          </div>
        </div>
        <Undraw name="coding" />
      </section>
      <section className="flex flex-col-reverse sm:flex-row mx-auto py-12">
        
      <Undraw name="growing"/>
        <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">
            Visualize
          </h1>
          <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
            Your Growth
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum
            rutrum metus at enim congue scelerisque. Sed suscipit metu non
            iaculis semper consectetur adipiscing elit.
          </p>
        </div>
      </section>
      </div>

      <Footer/>

      <Auth />
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setLoginModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setLoginModal
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
