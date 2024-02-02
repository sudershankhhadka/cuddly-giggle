import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login';
import Register from './register';
import FormField from './form_field';
import Home from './home/home';
import Calculator from './calculator/calc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <Login/>
<Register/> */}
        {/* <Home/> */}
        {/* <Calculator/> */}
        {/* <Counter /> */}
        <CounterDetail count={count}/>
        <CounterButton handleCount = {handleCount}/>
    </>
);

function Counter() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={handleCount}>Click Me</button>
        </div>
    )
}



function CounterDetail(count){
    return(
        <p>You Clicked {count} times</p>

    )
}

function CounterButton(){
    return(
        <button onClick={handleCount}>Click Me</button>

    )
}