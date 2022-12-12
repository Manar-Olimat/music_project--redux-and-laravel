import axios from "axios";
import React, { useState } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import './Login.css'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const isAuth= useIsAuthenticated()
    const navigate = useNavigate()
    const signIn = useSignIn()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        const data = new FormData(e.currentTarget)
        const loginData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log(loginData);

        axios.post('http://127.0.0.1:8000/api/auth/login', loginData)
            .then((response) => {
                console.log(response.data)
                if (signIn({
                    token: response.data.token,
                    expiresIn:10000,
                    tokenType: "Bearer",
                    authState:{name:'khalled'}
                })) {
                    return navigate('/')
                }
                
            })
            .catch((error) => {
                console.log(error.response);
            })
    }
    // console.log(isAuth());
    if (isAuth()) {
        return navigate('/')
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
