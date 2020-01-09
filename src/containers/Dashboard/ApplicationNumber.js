import React from "react";

import MaterialIcon from "material-icons-react";

const ApplicationNumber = () => {
  return (
    <div className="pb-4">
      <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
        <div className="border-b px-6">
          <div className="flex justify-between -mb-px">
            <div className="lg:hidden text-blue-dark py-4 text-lg">
              Application
            </div>
            <div className="flex text-sm mx-auto">
              <button
                type="button"
                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
              >
                1M
              </button>
              <button
                type="button"
                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
              >
                1D
              </button>
              <button
                type="button"
                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
              >
                1W
              </button>
              <button
                type="button"
                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
              >
                1Y
              </button>
              <button
                type="button"
                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark"
              >
                ALL
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center px-6 lg:hidden">
          <div className="flex-grow flex-no-shrink py-6">
            <div className="text-grey-darker mb-2">
              <span className="text-5xl text-blue-600">20</span>
            </div>
            <div className="text-green-light text-sm">Applications</div>
          </div>
          <div className="flex-shrink w-40 inline-block">
            <select className="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded">
              <option>Applications</option>
              <option>Accepted</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <div className="text-center py-4">
            <div className="border-b">
              <div className="bg-purple-600 w-12 h-12 rounded-full text-center pt-3 mx-auto my-2">
                <MaterialIcon icon="add" color="white" />
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                create new Application
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div className="border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-2xl text-green-600">2</span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Accepted
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div className="border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-2xl text-red-600">12</span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Rejection
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <div>
              <div className="text-grey-darker mb-2">
                <span className="text-2xl text-blue-600">20</span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Application
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationNumber;
