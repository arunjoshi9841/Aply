import React from "react";

const Statistics = () => {
  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2">
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-white border-transparent rounded-lg shadow-lg">
          <div className="bg-purple-100 uppercase border-b-2 border-purple-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div class="p-5">
            <img
              src="https://www.meta-chart.com/assets/images/pie/pie_percent.png"
              alt="chart"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-white border-transparent rounded-lg shadow-lg">
          <div className="bg-purple-100 uppercase border-b-2 border-purple-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div class="p-5">
            <img
              src="https://datavizproject.com/wp-content/uploads/2015/10/1-Line-Chart.png"
              alt="chart"
            />
          </div>
        </div>
      </div>
                 
    </div>
  );
};

export default Statistics;
