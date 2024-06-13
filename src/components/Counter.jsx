import React, { useState } from 'react'
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    // Increment Function 
    function increment() {
        setCount(count + 1);
    }

    // Decrement Function
    function decrement() {
        setCount(count - 1);
    }

    // Reset Function n
    function reset() {
        setCount(0);
    }


    return (
        <div className="main">
            <h1>Counter App</h1>
            <div className="counter">
                <h2>{count}</h2>
                <BtnIncr in={increment} />
                <BtnDec de={decrement} />
                <Reset re={reset} />
            </div>
        </div>
    );
}

export default Counter;







function BtnIncr(props) {
    return (
        <>
            <button className='btn in-btn' onClick={props.in}>Increment</button>
        </>
    );
}

function BtnDec(props) {
    return (
        <>
            <button className='btn de-btn' onClick={props.de}>Decrement</button>
        </>
    );
}

function Reset(props) {
    return (
        <>
            <button className='btn reset' onClick={props.re}>Reset</button>
        </>
    );
}

