import React from 'react';
import {makeAutoObservable} from "mobx";
import {showErrorToast} from "../toasts/ToastStyled";

export default class LoginStore {
    isLogged = false;
    loginFail = false;
    registerFail = false;
    hasLogged = false;
    jwtKey = "";


    constructor() {
        makeAutoObservable(this)
    }

    makeJwt = (key) => {
        this.jwtKey = key;
        this.isLogged = true;
    }

    unMakeJwt = () => {
        this.isLogged = false;
        this.jwtKey = "";
    }

    makeLogged = () => {
        this.isLogged = true;
    }

    makeLogin = () => {
        this.isLogged = true;
        this.hasLogged = true;
        this.loginFail = false;
        this.registerFail = false;
    }

    makeLogout = () => {
        this.isLogged = false;
        this.hasLogged = false;
    }

    setHasLogged = () => {
        this.hasLogged = false;
    }

    setLoginFail = () => {
        this.loginFail = true;
    }
    setRegisterFail = () => {
        this.registerFail = true;
    }
}

