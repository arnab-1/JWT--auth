import React, { use } from "react";
import { useState } from "react";
import API from '../utils/api'


const Register = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isRegister,setIsRegister] = useState(false);

    const handleRegister = async () => {
        const res = await API.post('/register',{ username, password});

        console.log("Registered ", res.data);
        setUsername('');
        setPassword('');
        setIsRegister(true);
    }


    return (
       <>
            <h2> Register</h2>
            <input
            placeholder="username"
            value={username}
            onChange={(e) => (setUsername(e.target.value))}
            />
            <input
            placeholder="password"
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
            />

            <button type="submit" onClick={handleRegister}>Register</button>
        
       </>
    );
}

export default Register;