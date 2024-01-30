import './form_field.css';

function FormField(props){
    return(
        <>
        <label>{props.label}</label>
      
        <input type={props.type} placeholder={props.placeholder} value={props.value} />
        </>
    );
}



export default FormField;