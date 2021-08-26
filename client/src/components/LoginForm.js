import React, { useState } from "react";
import Input from "@material-tailwind/react/Input";

import { loginUser } from "../utils/API";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFromData, [name]: value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = loginUser(userFromData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(user);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="font-hairline mb-6 text-center">Login to our Website</h1>
            <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                <div class="mb-4">
                    <label class="font-bold text-grey-darker block mb-2">Username or Email</label>
                    <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Email">
                </div>

                <div class="mb-4">
                    <label class="font-bold text-grey-darker block mb-2">Password</label>
                    <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password">
                </div>

                <div class="flex items-center justify-between">
                    <button class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>

                    <a class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right" href="#">
                        Forgot Password?
                    </a>
                </div>
                
            </div>
            <div class="text-center">
                <p class="text-grey-dark text-sm">Don't have an account? <a href="#" class="no-underline text-blue font-bold">Create an Account</a>.</p>
            </div>
        </div>
    </div>
  )
};
