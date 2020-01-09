import React from 'react';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {setUnauthorized} from "../../store/actions"
const Profile = ({setUnauthorized}) => {
    return (
        <div>
             <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={()=>setUnauthorized()}
          >
            Log Out
          </button>
        </div>
    );
};

Profile.propTypes = {
    setUnauthorized: PropTypes.func.isRequired
  };
  
//   const mapStateToProps = (state) => {
//     return {
//     };
//   };
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
    setUnauthorized
      },
      dispatch
    );
  };
  export default connect(null, mapDispatchToProps)(Profile);