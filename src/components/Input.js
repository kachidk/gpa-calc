import React from "react";
import { ArrowRight } from "../assets/Svgs";

function Input(props) {
  return (
    <div className="flex flex-col items-center justify-between sm:px-20 md:flex-row md:h-10">
      <div className="flex">
        <ArrowRight myClass="mr-2" />
        <span className="block mr-3">{`Course ${props.myNumber}`}</span>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center mr-1">
          <span className="text-sm">Test 1</span>
          <input
            type="number"
            className={`w-16 h-12 border-2 border-gray-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-value-${props.myNumber}`}
          />
        </div>
      
      <div className="flex flex-col items-center mr-1">
        <span className="text-sm">Test 2</span>
        <input
          type="number"
          className={`w-16 h-12 border-2 border-gray-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-value-${props.myNumber}`}
        />
      </div>
      <div className="flex flex-col items-center mr-1">
        <span className="text-sm">Exam</span>
        <input
          type="number"
          className={`w-16 h-12 border-2 border-gray-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-value-${props.myNumber}`}
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm">Unit</span>
        <input
          type="number"
          className={`w-16 h-12 border-2 border-green-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-unit-${props.myNumber}`}
        />
      </div>
      </div>
    </div>
  );
}

export default Input;
