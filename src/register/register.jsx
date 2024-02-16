export default function Regis() {
    return (
        <div>
            <h1> Registration Form</h1>

            Name: <input type="text" name="name"></input><br />
            Email: <input type="email" name="email"></input><br />
            Age: <input type="text" name="age"></input><br />
            Gender:
            Male <input type="radio" name="Gender" id="" />
            Female <input type="radio" name="Gender" />
            <br /><br />
            <input type="submit" value="Submit" />

        </div>
    )

}