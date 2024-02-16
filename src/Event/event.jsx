export default function Event(){
    const handleSubmit = (event)=>{
        event.stopPropagation();
        console.log("Submitted");
    }
    const handleDivClick=()=>{
            console.log("Div CLick");
    }
    return(
        <div onClick={handleDivClick}>
            <button onClick={handleSubmit}> Submit</button>
        </div>
    );
}