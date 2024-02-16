import { useState } from "react";



function Appt(){
    const [name,setName] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert(`Name: ${name}`); 
    }

    
    return(
        <div className="App">
            <h1 className="geeks">Sudershan</h1>
            <h3>Controlled Component</h3>
            <p>Name: {name}</p>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Appt;