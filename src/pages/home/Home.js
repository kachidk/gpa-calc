import React, { useState, useRef } from "react";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import {
  total,
  grade,
  unit1,
  unit2,
  unit3,
  unit4,
  unit5,
  unit6,
  unit7,
  unit8,
  unit9,
  unit10,
  unit11,
  unit12,
  unit13,
  unit14,
  unit15,
} from "./logic";

function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const abc1 = useRef();
  const seeg1 = useRef();
  const seeg2 = useRef();
  const seeg3 = useRef();
  const seeg4 = useRef();
  const seeg5 = useRef();
  const seeg6 = useRef();
  const seeg7 = useRef();
  const seeg8 = useRef();
  const seeg9 = useRef();
  const seeg10 = useRef();
  const seeg11 = useRef();
  const seeg12 = useRef();
  const seeg13 = useRef();
  const seeg14 = useRef();
  const seeg15 = useRef();

  const addNew = () => {
    const abc = total();
    const { g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15 } =
      grade();

    abc1.current = abc;
    seeg1.current = g1;
    seeg2.current = g2;
    seeg3.current = g3;
    seeg4.current = g4;
    seeg5.current = g5;
    seeg6.current = g6;
    seeg7.current = g7;
    seeg8.current = g8;
    seeg9.current = g9;
    seeg10.current = g10;
    seeg11.current = g11;
    seeg12.current = g12;
    seeg13.current = g13;
    seeg14.current = g14;
    seeg15.current = g15;

    openModal();
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        title="Result"
        content={
          isOpen && (
            <div>
              <div className="grid grid-cols-1 grid-rows-5 gap-4 mt-4 md:grid-cols-2">
                <span>
                  Course 1{" "}
                  <span className="ml-4">
                    {unit1() === 0 ? "Not Filled" : seeg1.current}
                  </span>
                </span>
                <span>
                  Course 2{" "}
                  <span className="ml-4">
                    {unit2() === 0 ? "Not Filled" : seeg2.current}
                  </span>
                </span>
                <span>
                  Course 3{" "}
                  <span className="ml-4">
                    {unit3() === 0 ? "Not Filled" : seeg3.current}
                  </span>
                </span>
                <span>
                  Course 4{" "}
                  <span className="ml-4">
                    {unit4() === 0 ? "Not Filled" : seeg4.current}
                  </span>
                </span>
                <span>
                  Course 5{" "}
                  <span className="ml-4">
                    {unit5() === 0 ? "Not Filled" : seeg5.current}
                  </span>
                </span>
                <span>
                  Course 6{" "}
                  <span className="ml-4">
                    {unit6() === 0 ? "Not Filled" : seeg6.current}
                  </span>
                </span>
                <span>
                  Course 7{" "}
                  <span className="ml-4">
                    {unit7() === 0 ? "Not Filled" : seeg7.current}
                  </span>
                </span>
                <span>
                  Course 8{" "}
                  <span className="ml-4">
                    {unit8() === 0 ? "Not Filled" : seeg8.current}
                  </span>
                </span>
                <span>
                  Course 9{" "}
                  <span className="ml-4">
                    {unit9() === 0 ? "Not Filled" : seeg9.current}
                  </span>
                </span>
                <span>
                  Course 10{" "}
                  <span className="ml-2">
                    {unit10() === 0 ? "Not Filled" : seeg10.current}
                  </span>
                </span>
                <span>
                  Course 11{" "}
                  <span className="ml-2">
                    {unit11() === 0 ? "Not Filled" : seeg11.current}
                  </span>
                </span>
                <span>
                  Course 12{" "}
                  <span className="ml-2">
                    {unit12() === 0 ? "Not Filled" : seeg12.current}
                  </span>
                </span>
                <span>
                  Course 13{" "}
                  <span className="ml-2">
                    {unit13() === 0 ? "Not Filled" : seeg13.current}
                  </span>
                </span>
                <span>
                  Course 14{" "}
                  <span className="ml-2">
                    {unit14() === 0 ? "Not Filled" : seeg14.current}
                  </span>
                </span>
                <span>
                  Course 15{" "}
                  <span className="ml-2">
                    {unit15() === 0 ? "Not Filled" : seeg15.current}
                  </span>
                </span>
              </div>
              <div className="w-48 mx-auto mt-5">
                <span className="mr-3">
                  {isNaN(abc1.current) ? null : "GPA"}
                </span>
                {isNaN(abc1.current) ? (
                  <div className="flex mr-2">
                    Please Fill the Form
                    <svg
                      className="w-6 h-6 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                ) : (
                  abc1.current
                )}
              </div>
            </div>
          )
        }
      ></Modal>
      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-1 grid-rows-5 gap-8 xl:grid-flow-col xl:grid-cols-3">
          <Input myNumber={1} />
          <Input myNumber={2} />
          <Input myNumber={3} />
          <Input myNumber={4} />
          <Input myNumber={5} />
          <Input myNumber={6} />
          <Input myNumber={7} />
          <Input myNumber={8} />
          <Input myNumber={9} />
          <Input myNumber={10} />
          <Input myNumber={11} />
          <Input myNumber={12} />
          <Input myNumber={13} />
          <Input myNumber={14} />
          <Input myNumber={15} />
        </div>
        <div className="flex justify-between mx-auto mt-16 w-60">
          <button
            onClick={addNew}
            className="p-2 text-white bg-blue-500 border-none rounded-md"
          >
            Check Result
          </button>
          <a href="/" className="p-3 text-white bg-red-500 rounded-md">
            Clear
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
