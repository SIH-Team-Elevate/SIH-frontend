import { Routes, Route } from "react-router-dom";
import NavigationBar from "./NavBar/index.js";
import Landing from "./templates/landing.js";

function isAuthenticated(){
    if(!localStorage.getItem('type'))
    localStorage.setItem('type','driver');
    return true;
}

export default function Home(){
    if(!isAuthenticated()){
        window.location.href="/signin";
    }
    return(
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Landing/>} />
            </Routes>

        </div>
    );
}