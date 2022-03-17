import './App.css';
import NavBar from "./components/navigation/NavBar";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import Background from "./Images/background.png"

function App() {
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


            </Routes>
                </div>
            <Footer/>

        </div>
    );
}

export default App;
