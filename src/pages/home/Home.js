import React, { useState } from "react";
import { SvgX } from "../../assets/Svgs";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { total } from "./logic";


function Home() {
  const [modal, setModal] = useState(false);
  const addNew = () => {
    const abc = total();
    console.log(abc);
    toggleModal()
  };
  const toggleModal = () =>{
    setModal(!modal)
  }
  return (
    <>
      {modal && 
      <Modal>
        {{
            title: <span className="font-bold">Result</span>,
            button: <button className="hover:text-green-400" onClick={toggleModal}><SvgX /></button>
        }}
      </Modal> }
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
            <button onClick={addNew} className="p-2 text-white bg-blue-500 border-none rounded-md">Check Result</button>
            <a href="/" className="p-3 text-white bg-red-500 rounded-md">Clear</a>
        </div>
      </div>
    </>
  );
}

export default Home;
