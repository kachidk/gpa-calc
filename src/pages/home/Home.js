import React, { useState, useRef } from "react";
import { SvgX } from "../../assets/Svgs";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { total, grade, unit1 } from "./logic";

function Home() {
  const abc1 = useRef();
  
  const { g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15 } = grade()

  const [modal, setModal] = useState(false);
  const addNew = () => {
    const abc = total();
    console.log(abc);
    unit1()
    abc1.current = abc;
    toggleModal();
    
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && (
        <Modal>
          {{
            title: <span className="font-bold">Result</span>,
            button: (
              <button className="hover:text-green-400" onClick={toggleModal}>
                <SvgX />
              </button>
            ),
            content: (
                <>
              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
                <span>Course 1 <span className="ml-4">{g1}</span></span>
                <span>Course 2 <span className="ml-4">{g2}</span></span>
                <span>Course 3 <span className="ml-4">{g3}</span></span>
                <span>Course 4 <span className="ml-4">{g4}</span></span>
                <span>Course 5 <span className="ml-4">{g5}</span></span>
                <span>Course 6 <span className="ml-4">{g6}</span></span>
                <span>Course 7 <span className="ml-4">{g7}</span></span>
                <span>Course 8 <span className="ml-4">{g8}</span></span>
                <span>Course 9 <span className="ml-4">{g9}</span></span>
                <span>Course 10 <span className="ml-2">{g10}</span></span>
                <span>Course 11 <span className="ml-2">{g11}</span></span>
                <span>Course 12 <span className="ml-2">{g12}</span></span>
                <span>Course 13 <span className="ml-2">{g13}</span></span>
                <span>Course 14 <span className="ml-2">{g14}</span></span>
                <span>Course 15 <span className="ml-2">{g15}</span></span>
              </div>
              <div className="w-40 mx-auto">{abc1.current}</div>
              </>
            ),
          }}
        </Modal>
      )}
      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
        <div className="flex justify-between mx-auto mt-10 w-60">
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
