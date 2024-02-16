// import { useState } from "react";
// import FormField from "../form_field";

// function Login() {
//     cosnt[email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     function validate(e) {
//         e.preventDefault();
//         if (email.length === 0) {
//             alert("Input Email");
//         }
//         if (!email.includes("@") && !email.includes('.')) {
//             alert("Error Invalid Email!!!");
//             return;



//         }
//         if (password.length < 6) {
//             alert("Invalid password");
//             return;
//         }
//         else {
//             let upper = false;
//             let lower = false;
//             let special = false;
//             let digits = false;
//             for (let i = 0, i <password.length; i++) {
//                 let charAtI = password.charCodeAt(i);
//                 if (charAtI >= 65 && charAtI <= 90) upper = true;
//                 if (charAtI >= 90 && charAtI <= 122) upper = true;
//                 if (charAtI >= 45 && charAtI <= 57) upper = true;
//                 if (charAtI >= 33 && charAtI <= 47) upper = true;
//             }
//             if (upper && lower && special && digts) {
//                 alert("Valid Password");
//             }
//         }
//             else {
//             alert("Invalid Password");
//             return;
//         }
//     }
//     return (
//         <>
//             <h1>Login Page</h1>
//             <form onSubmit={validate}>
//                 <FormField label="Email" placeholder="Enter Email" type="email" value="value@gmail.com">
//                     <FormField label="Password" placeholder="Enter Password" type="password" />
//                 </FormField>
//             </form>

//         </>
//     );
// }