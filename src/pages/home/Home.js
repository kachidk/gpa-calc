import React, {useState} from 'react'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import { total } from './logic'



function Home() {
    const [modal, setModal] = useState()
    const addNew = () =>{
        const abc = total()
        console.log(abc)
    }
    return (
        <>
        {modal && <Modal/> }
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">               
                <Input myNumber={1}/>
                <Input myNumber={2}/>
                <Input myNumber={3}/>
                <Input myNumber={4}/>
                <Input myNumber={5}/>
                <Input myNumber={6}/>
                <Input myNumber={7}/>
                <Input myNumber={8}/>
                <Input myNumber={9}/>
                <Input myNumber={10}/>
                <Input myNumber={11}/>
                <Input myNumber={12}/>
                <Input myNumber={13}/>
                <Input myNumber={14}/>
                <Input myNumber={15}/>
            </div>
        </div>
        <button onClick={addNew}>hhh</button>
        </>
    )
}

export default Home
