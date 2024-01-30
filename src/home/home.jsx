import './home.css';
import { useState } from 'react';

function Home() {
    const [count, setCount] = useState(0);
    const [isEven, checkEven] = useState(false);

    return (
        <>
            <h1>Home Page</h1>
            <h4>Counter Value: <span>{count}</span></h4>
            <p>Even : {isEven.toString()}</p>

            <CustomButton title="Increment" func={() => setCount(count + 1)} />
            <CustomButton title="Check Even" func={() => checkEven(count % 2 === 0)} />
        </>
    );
}

export default Home;

function CustomButton({ title, func }) {
    return (
        <div>
            <button onClick={func}>{title}</button>
        </div>
    );
}
