import React from 'react';
import {makeAutoObservable} from "mobx";

export default class LoginStore {
    isLogged = false;


    constructor() {
        makeAutoObservable(this)
    }

    makeLogin = () => {
        this.isLogged = true;
    }
}

