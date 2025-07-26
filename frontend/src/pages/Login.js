import React, { use } from "react";
import { useState } from "react";
import API from "../utils/api";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setoken] = useState(null);

    const handelLogin = async (req, res) => {
        const res = await API.post('/login',{username ,password});
        console.log('Successfully login' , res.data);

        try {
            setoken(res.data.token);
            localStorage.setItem("token",res.data.token);
        }
        catch (err) {
            console.error("Login fail", err.message);
        }
        
    } 
    return (
        <>
            <h4>Login</h4>
            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />    
            <input
                placeholder="password"
                value={password}
                type="passward"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handelLogin}> Login</button>

        </>
    );
}

export default Login;