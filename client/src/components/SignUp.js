import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUp = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
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
    <div className="flex flex-col p-2 h-screen">
      <form onSubmit={handleFormSubmit} className="max-w-md m-auto">
        <h1 className="text-5xl text-center">RhythmR</h1>
        <p className="text-2xl text-center">Sign Up to access the site!</p>
        <div className="border p-5 my-5 rounded shadow-lg-blue">
          <div>
            <label className="block mb-2">Username</label>
            <input
              className="form-input border rounded py-2 px-3 w-full focus:outline-one focus:shadow-outline"
              placeholder="username"
              name="username"
              type="text"
              value={userFormData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              className="form-input border rounded py-2 px-3 w-full focus:outline-one focus:shadow-outline"
              placeholder="email"
              name="email"
              type="text"
              value={userFormData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input
              className="form-input border rounded py-2 px-3 w-full focus:outline-one focus:shadow-outline"
              placeholder="password"
              name="password"
              type="text"
              value={userFormData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="py-2">
            <button
              className="w-full rounded bg-green-600 hover:bg-green-800 font-bold py-2 px-4 border-solid border-2 border-green-700"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
