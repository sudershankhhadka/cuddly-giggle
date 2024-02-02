import { useState } from "react";

function ControlledForm(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage]  = useState('');
    const [isSubmitted ,setIsSubmitted] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name.trim()===''|| email.trim()===''||message.trim()===''){
            alert("Please fill the complete form.");
            return;
        }
        alert(`Name: ${name},Email: ${email},Message: ${message}`);
        //setting submitted to true
        setIsSubmitted((prev)=>true)
        //claering or reseting form
        setName('')
        setEmail('')
        setMessage('')
}
    return(
        <div>
            <h1>Register</h1>
            { isSubmitted ? <p>Thankyou For registering.</p>:
            <form  onSubmit={handleSubmit}>
                <label >Name:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} />
                <br />
                <label >Email:</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label >Message:</label>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <input type="submit" value="Register" />
            </form>}
        </div>
    )
    

    // const handleSubmit = (event) =>{
    //     event.preventDefault();

    }




    export default ControlledForm;