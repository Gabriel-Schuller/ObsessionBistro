import './App.css';
import NavBar from "./components/navigation/NavBar";
import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import Background from "./Images/background.png"
import Registration from "./pages/Registration";
import Logout from "./components/userAccess/Logout";
import {useStore} from "./components/stores/store";
import {observer} from "mobx-react-lite";
import axios from "axios";

function App() {
    const {loginStore} = useStore()

    useEffect(async () => {

        const call = await axios.get("https://localhost:44305/api/Users/get-key", {withCredentials: true})
            .catch( e => {})
        if (call !== undefined) {
            loginStore.makeJwt(call.data)
        }
    }, [loginStore]);


    return (
        <div style={{backgroundImage: `url(${Background})`}}>
            <NavBar/>
            <div className="default-container-between">
                <Routes>
                    <Route path='/' element={<HomePage/>}>
                    </Route>

                    <Route path='/meniu' element={<Menu/>}>
                    </Route>

                    <Route path='/oferte' element={<Offers/>}>
                    </Route>

                    <Route path='/contact' element={<Contact/>}>
                    </Route>

                    <Route path="/Login" element={<Registration/>}>
                    </Route>

                    <Route path="/Logout" element={<Logout/>}>
                    </Route>


                </Routes>
            </div>
            <Footer/>

        </div>
    );
}

export default observer(App);
