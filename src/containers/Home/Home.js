import React from "react";
import Auth from "../auth/Auth";
import reflect from "../../utils/svg/undraw_career_progress_ivdb.svg";
import stat from "../../utils/svg/undraw_career_development_oqcb (2).svg";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Footer from "../../components/reusable-components/Footer";

import { setLoginModal } from "../../store/actions";

const Home = ({ isAuthenticated, setLoginModal }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow w-full">
        <section className="flex flex-wrap items-center">
          <div className="max-w-md flex flex-col items-center sm:items-start text-center sm:text-left mx-auto">
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
          <img src={stat} alt="stat" className="max-w-sm mx-auto my-8"/>
        </section>
        <section className="flex flex-wrap my-20 justify-center items-center">
          <img src={reflect} alt="reflect" className="max-w-sm mx-auto my-8"/>
          <div className="max-w-md flex flex-col items-center sm:items-start text-center sm:text-left mx-auto">
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

      <Footer />

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
