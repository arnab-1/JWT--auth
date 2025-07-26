import React from "react";
import { useState } from "react";
import API from "../utils/api";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    const handelLogin = async () => {
        try {
        const res = await API.post('/login',{username ,password});
        console.log('Successfully login' , res.data);

        
            setToken(res.data.token);
            localStorage.setItem("token",res.data.token);
        }
        catch (err) {
            console.error("Login fail", err.message);
        }
        
    } 
    return (
        <>
            <h2>Login</h2>
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