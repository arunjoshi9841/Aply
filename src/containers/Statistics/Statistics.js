import React from "react";
import {XYPlot, LineSeries} from 'react-vis';
const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];
const Statistics = () => {
  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2">
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-white border-transparent rounded-lg shadow-lg">
          <div className="bg-purple-100 uppercase border-b-2 border-purple-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div class="p-5">
          <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
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
