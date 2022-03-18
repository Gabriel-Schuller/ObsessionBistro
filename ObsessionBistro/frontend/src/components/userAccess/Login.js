import React, {useState} from 'react';
import "./LoginForms.css"
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {useStore} from "../stores/store";
import {observer} from "mobx-react-lite";
import ToastStyled, {showErrorToast, showSuccessToast} from "../toasts/ToastStyled";
import {useNavigate} from "react-router-dom"


function Login() {
    const {loginStore} = useStore();

    const [title, setTitle] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");


    const navigate = useNavigate()

    const logIn = async (user) => {
        await axios.post("https://localhost:44305/api/Users/login", user, {withCredentials: true})
            .catch(error => {
                showErrorToast(error.response.data.message)
                loginStore.setLoginFail()
            })
        if (!loginStore.loginFail) {
            const response =await axios.get("https://localhost:44305/api/Users/get-key", {withCredentials: true})
            navigate("/")
            loginStore.makeJwt(response.data)
            loginStore.makeLogin()
        }
    }
    const register = async (user) => {
        if (password !== repeatedPassword) {
            showErrorToast("Passwords don't match")
        } else {
            await axios.post("https://localhost:44305/api/Users/register", user, {withCredentials: true})
                .catch(error => {
                    showErrorToast(error.response.data)
                    loginStore.setRegisterFail()
                })
            if (!loginStore.registerFail) {
                await logIn(user)
            }
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        let user = {emailAddress: email, password: password};
        if (title === "Login") {
            await logIn(user);
        } else {
            await register(user);
        }

    }


    return (
        <div>
            <form onSubmit={submit}>
                <div className="container">
                    <div className="login-form">
                        <div className="form-header">
                            <h3>{title}</h3>
                        </div>
                        <div className="form-footer">
                            <div className="login">
                                <div className="box-input">
                                    <input type="email" className="input-login" name="email" placeholder="Email"
                                           value={email} onChange={(event => setEmail(event.target.value))}/>
                                    <i className="ion-ios-email"></i>
                                </div>
                                <div className="box-input">
                                    <input type="password" className="input-login"
                                           name="password" placeholder="Password"
                                           value={password} onChange={(event => setPassword(event.target.value))}/>
                                    <i className="ion-android-lock"></i>
                                </div>
                                {title !== "Login" &&
                                    <div className="box-input">
                                        <input type="password" className="input-login"
                                               name="password" placeholder="Enter Password Again"
                                               value={repeatedPassword}
                                               onChange={(event => setRepeatedPassword(event.target.value))}/>
                                        <i className="ion-android-lock"></i>
                                    </div>}
                                <button type="submit" className="btn">{title}</button>
                                {title === "Login" && <p onClick={() => setTitle("Register")}>Register</p>}
                                {title === "Register" && <p onClick={() => setTitle("Login")}>Login</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastStyled/>
        </div>
    );
}

export default observer(Login);