import ProductsStore from "./ProductsStore";
import LoginStore from "./LoginStore";
import {createContext, useContext} from "react";

export const store = {
    productStore: new ProductsStore(),
    loginStore: new LoginStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}