import React, {useRef} from "react";


function App(){
    const inputRef = useRef(null);
    function handleSubmit(){
        alert(`Name: ${inputRef.current.value}`);
    }
    return(
        <div className="App">
            <h1 className="geeks">Sudershan</h1>
            <h3>Uncontrolled Component</h3>
            <p>Name: {inputRef.current && inputRef.current.value}</p>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" ref = {inputRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;