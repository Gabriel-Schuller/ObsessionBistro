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
    groupedProducts = [];
    isGrouped = false;
    groupedCategory= "";

    constructor() {
        makeAutoObservable(this)
    }

    setLoadingInitial = (state: boolean) => {
        this.initialLoading = state;
    }

    loadProducts = async () => {
        this.isGrouped = false;
        this.groupedCategory= "";
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

    loadGroupedProducts = (category) => {
        var producList= this.products;
        this.groupedProducts = [];
        producList.forEach( product => {

            if (product.category === category) {
                this.groupedProducts.push(product)
            }
        })
        this.isGrouped = true;
        this.groupedCategory = category;

    }

}

