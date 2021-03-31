import React, {useState} from 'react'
import Input from '../components/Input'


function Home() {
    const check = () =>{
        var classList = document.querySelectorAll(".inputValue")
        const main = Array.prototype.map.call(classList, function(element){
            return element.value;  
          })  
          let bbc = n => isNaN(n) ? 0 : n;

          var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
          var divide = sum / 10;
    }

    const children = [];
    const addNew = () =>{
        setTempNum(tempNum + 1)
    }
    const [tempNum, setTempNum] = useState(13) 
    
    for (var i = 13; i < tempNum; i += 1) {
        children.push(<Input key={i} myNumber={i} />);
      };
    return (
        <>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">                
                <Input label="Course 1"/>
                <Input label="Course 2"/>
                <Input label="Course 3"/>
                <Input label="Course 4"/>
                <Input label="Course 5"/>
                <Input label="Course 6"/>
                <Input label="Course 7"/>
                <Input label="Course 8"/>
                <Input label="Course 9"/>
                <Input label="Course 10"/>
                <Input label="Course 11"/>
                <Input label="Course 12"/>
                {children}
            </div>
        </div>
        <button onClick={addNew}>hhh</button>
        </>
    )
}

export default Home
