import React from 'react';
import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default class ProductsStore {
    products = [];
    loading = true;
    initialLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setLoadingInitial = (state: boolean) => {
        this.initialLoading = state;
    }

    loadProducts = async () => {
        this.initialLoading = true;
        try {
            await delay(1000);
            let response = await axios.get("https://localhost:44305/api/Products");
            let products = response.data;
            runInAction(() => {
                this.products.push(...products);
            })
            this.setLoadingInitial(false);

        } catch (e) {
            console.log(e);
        }

    }

}

