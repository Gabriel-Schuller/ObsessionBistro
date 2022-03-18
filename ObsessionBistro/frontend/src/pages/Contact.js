import React from 'react';
import LoadingAnimation from "../components/loadingAnimations/LoadingAnimation";
import ProductItem from "../components/foodItems/Products/ProductItem";
import ToastComponent from "../components/toasts/ToastComponent";
import ToastStyled, {errorToast, showErrorToast} from "../components/toasts/ToastStyled";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact(props) {
    showErrorToast("Login error");
    return (
        <div>
            <ToastStyled/>
        </div>
    );
}

export default Contact;