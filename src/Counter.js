import React from "react";
import "./style.css";


const Counter = () => {
    const [count, setCount] = React.useState(0);


    function handleIncrement(){
        setCount(count + 1);
    }

    function handleDecrement(){
        setCount(count - 1);
    }
  return (
    <div className='counter-container'>
        <button className='increment-button' onClick={handleIncrement}>+</button>
        {count}
        <button className='decrement-button' onClick={handleDecrement}>-</button>
    </div>
  )
};

export default Counter;
