import React from 'react';
import {useStore} from "../stores/store";
import axios from "axios";
import {observer} from "mobx-react-lite";


function Logout(props) {
    const {loginStore} = useStore();

    const logout = async () => {

        if (loginStore.jwtKey !== "") {

            await axios.get("https://localhost:44305/api/Users/logout", {headers: {
                    Authorization: "Bearer " + loginStore.jwtKey
                }}, {withCredentials: true})
                .catch(error => {
                })

            // loginStore.unMakeJwt()
        }
    }

    logout();

    return (
        <div></div>
    );
}

export default observer(Logout);