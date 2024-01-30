import FormField from "./form_field";

function Register(){
    return(
      <div>

        <h1>Register Page</h1>
        <FormField label= "Ëmail" placeholder= "Enter email" tyoe ="email"/>
            <br />
         <FormField label = "Password" type="password" placeholder="Enter Password" />
         <br />
        <FormField label = "confirm pw" type = "password" placeholder="re-enter pw"/>
        <br />
        <FormField label = "age" type = "number"  placeholder="age"/> <br />
        <FormField type="button" value= "submit"/>
        <br />
        <FormField label="Enter date of Birth" type="date" value="date"/>
        </div>
    );
}
export default Register;
