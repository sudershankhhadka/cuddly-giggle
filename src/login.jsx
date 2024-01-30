import FormField from "./form_field";

function Login(){
    return(
        <div>
            <h1>Login page</h1>
            <FormField label= "Ëmail" placeholder= "Enter email" tyoe ="email"/>
            <br />
            <FormField label = "Password" type="password" placeholder="Enter Password" />
        </div>
        
    );
}

export default Login;