import React, { useState } from "react";
import Input from "@material-tailwind/react/Input";
import { useMutation } from "@apollo/client";
import { loginUser } from "../utils/API";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...userFormData } });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <main>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="email"
            name="email"
            type="email"
            value={userFormData.email}
            onChange={handleInputChange}
          />
          <input
            className="form-input"
            placeholder="password"
            name="password"
            type="password"
            value={userFormData.password}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-block btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
