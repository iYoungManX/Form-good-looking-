import FormInput from "./components/FormInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPasssword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't be include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      require: "true",

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"It should be a valid email address",
      label: "Email",
      require: "true",
    },
    {
      id: 3,
      name: "Birthday",
      type: "date",
      placeholder: "birthday",
      errorMessage:"",
      label: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password shoud be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      require: "true",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      errorMessage:"Password don't match",
      label: "Confirm Password",
      pattern:values.password,
      require: "true",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log("",values);



  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
