import React from "react";
import { ArrowRight } from "../assets/Svgs";

function Input(props) {
  return (
    <div className="flex items-center mx-auto md:h-10">
      <ArrowRight myClass="mr-2" />
      <span className="block mr-3">{`Course ${props.myNumber}`}</span>
      <input
        type="number"
        className={`w-16 h-12 border-2 border-gray-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-value-${props.myNumber}`}
      />
      <input
        type="number"
        className={`w-16 h-12 border-2 border-gray-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-value-${props.myNumber}`}
      />
      <input
        type="number"
        className={`w-16 h-12 border-2 border-gray-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-value-${props.myNumber}`}
      />
      <input
        type="number"
        className="w-16 h-12 border-2 border-gray-500 rounded-md input-value focus:outline-none focus:border-blue-500 input-unit"
      />
    </div>
  );
}

export default Input;
