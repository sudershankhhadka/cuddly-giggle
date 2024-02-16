const { Formik } = require("formik");

export default function RegisterWithFormik() {
    return (
        <div>
            <h1>Register</h1>
            <Formik initialValues={{ 'email': 'sudershankhadka10@gmail.com', 'name': '' }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 600);
                }}
            >
                {
                    ({ handleSubmit, handleChange, errors, values, isSubmitting }) => {
                        return (
                            <form action="" onSubmit={handleSubmit}>
                                Name: <input type="text" name="name" value={values.name} onChange={handleChange}></input><br />
                                Email: <input type="email" name="email" value={values.email} onChange={handleChange}></input><br />
                                Age: <input type="text" name="age"></input><br />
                                Gender:
                                Male <input type="radio" name="Gender" id="" />
                                Female <input type="radio" name="Gender" />
                                <br /><br />
                                <input type="submit" value="Submit" disabled={isSubmitting} />

                            </form>
                        )
                    }
                }
            </Formik>
        </div>


    )
}