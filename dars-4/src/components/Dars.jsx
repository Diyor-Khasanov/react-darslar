import React, { useState, useRef } from "react";
import Child from "./Child";

const Dars = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const divRef = useRef(null);
  let ref = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.style.color = "red";
      inputRef.current.focus()
    }
  };

  const handleFill = () => {
    if (divRef.current){
      divRef.current.style.backgroundColor = 'orange';
      divRef.current.style.width = "100px";
      divRef.current.style.height = "100px";
      divRef.current.style.borderRadius = "50%";
      divRef.current.style.transition = "all 0.5s ease-in-out";
    }
  }

  const handleRef = () => {
    if (ref.current) {
      ref.current.style.backgroundColor = "blue";
      ref.current.style.color = "white";
      ref.current.style.padding = "10px";
      ref.current.style.borderRadius = "5px";
      ref.current.value = "Button Clicked!";
    }
  }
  

  return (
    <div>
      <h1 className="text-4xl text-teal-400">Dars</h1>
      <input
        type="text"
        ref={inputRef}
        className="border p-2 rounded-2xl"
        placeholder="enter value ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="border ml-3 p-2 rounded-xl m-40" onClick={handleClick}>
        Click ME
      </button>



      <div className="w-[400px] h-[400px] border" ref={divRef}></div>
      <button onClick={handleFill}>Click Me</button>



      <div>
        <Child ref={ref} placeholder='enter value' />
        <button onClick={handleRef}>Click Me</button>
      </div>
    </div>
  );
};

export default Dars;
