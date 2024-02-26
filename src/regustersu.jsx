import { useFormik } from "formik";
import "./register.css";
const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "male",
            age: 18,
            password: "",
            confirmPassword: "",
            phoneNumber: "",
            termsAndCondition: false
        },
        onSubmit(values) {
            if (!values.termsAndCondition) {
                alert("please read terms and condition");
                return;
            }
            console.log(values);
        },
        validate(values) {
            const errors = {};
            if (!values.name) {
                errors.name = "Required"
            }

            if (!values.age) {
                errors.age = "Required"
            } else if (values.age < 18) {
                errors.age = "must be greater than 18";
            }

            if (!values.password) {
                errors.password = "Required"
            } else if (values.password.length < 6) {
                errors.password = "must be greater than or equal to 6";
            }
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "confirm password must match password"
            }

            if (!values.phoneNumber) {
                errors.phoneNumber = "Required"
            } else if (values.phoneNumber.length != 10)
                errors.phoneNumber = "Phone Number must be of length 10"

            return errors;
        }

    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label> Name </label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <p > {formik.touched.name && formik.errors.name && formik.errors.name} </p>
                </div>
                <div>
                    <label> age </label>
                    <input
                        type="text"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        
                        onBlur={formik.handleBlur}
                    />
                    <p> {formik.touched.age && formik.errors.age && formik.errors.age} </p>
                </div>
                <div>
                    <label> Gender</label>
                    <select
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>

                    </select>
                </div>
                <div>
                    <label> phone number </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <p> {formik.touched.phoneNumber && formik.errors.phoneNumber && formik.errors.phoneNumber} </p>
                </div>
                <div>
                    <label> password </label>
                    <input
                        type="text"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <p> {formik.touched.password && formik.errors.password && formik.errors.password} </p>
                </div>
                <div>
                    <label> confirm password </label>
                    <input
                        type="text"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <p> {formik.touched.confirmPassword && formik.errors.confirmPassword && formik.errors.confirmPassword} </p>
                </div>
                <div>

                    <input
                        type="checkbox"
                        name="termsAndCondition"
                        value={formik.values.termsAndCondition}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /> Terms and Condition

                </div>
                <button type="submit">
                    register
                </button>
            </form>
        </div>
    )
}

export default Register;