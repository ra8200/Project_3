import React, { useState } from "react";
import Input from "@material-tailwind/react/Input";

import { loginUser } from "../utils/API";
import Auth from "../utils/auth";

const LoginForm = () => {
    const [userData, setUserData] = useState({ email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await loginUser(userFromData);

            if(!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(user);
        }   catch (err) {
            console.error(err);
            setShowAlert(true);
        }
    }
}
