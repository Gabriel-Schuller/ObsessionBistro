import React from 'react';
import axios from "axios";

async function AxiosGetProducts() {
    const response = await axios.get("https://localhost:44305/api/Products");
    return response;
}

export default AxiosGetProducts;