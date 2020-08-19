import React, {useState, useEffect} from "react";
import ApplicationCard from "./ApplicationCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import noData from "../../utils/svg/undraw_no_data_qbuo.svg";

const ApplicationList = ({jobsAll}) => {
  const [filteredData, setFilteredData]=useState([]);
  const [filter, setFilter] = useState("");
  useEffect(()=>{
    setFilteredData([...jobsAll]);
  },[jobsAll])
  const handleSearch=(e)=>{
    const tempData= jobsAll.filter(job=>job.company.name.includes(e.target.value));
    setFilter(e.target.value);
    setFilteredData(tempData);
  }
  return (
    <div className="border shadow w-full lg:mr-8">
      <div className="flex flex-wrap border-b py-4">
        <p className="text-blue-dark py-4 text-lg bold ml-4 flex-grow">
          Your Applications          
        </p>
        <div className="flex mx-4">
                <span className="relative">
                    <input type="search" value = {filter} placeholder="Search" className="bg-gray-100 text-sm transition border border-transparent focus:outline-none focus:border-purple-600 rounded py-1 px-2 pl-10 appearance-none leading-normal" onChange={(e)=>handleSearch(e)}/>
                    <div className="absolute search-icon" style={{top: ".5rem", left: ".8rem"}}>
                        <svg className="fill-current pointer-events-none text-purple-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </span>
			</div>
      </div>
      {filteredData.length>0?<div className="flex flex-wrap justify-center">       
            {filteredData.map((job, index)=>(
                <ApplicationCard key={index} job={job}/>
            ))} 
              
      </div>:<div className=" flex flex-col mx-auto my-12"> <img src={noData} alt="new entry" className="max-w-sm mx-auto hover:opacity-50 cursor-pointer"/>
      <p className="text-3xl text-gray-700 text-center py-8">Opps!! No Search Results</p>
</div>}
    </div>
  );
};

ApplicationList.propTypes = {  
  jobsAll: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return {
    jobsAll: state.dashboard.jobsAll
  };
};

export default connect(mapStateToProps, null)(ApplicationList);
