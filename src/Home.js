import { Routes, Route } from "react-router-dom";
// import Landing from "./templates/landing.js";
import Sidebar from "./admin-temp/sidebar/sidebar.jsx";
import Report from "./admin-temp/report.jsx";
import HelpSupport from "./admin-temp/helpsupport.jsx";
import Announcements_Admin from "./admin-temp/announcements.jsx";
import Messages from "./admin-temp/messages.jsx";

import "./admin-temp/hns.css"
// import "./admin-temp/announcements.css"
import "./admin-temp/messages.css"
import "./admin-temp/report.css"
import "./admin-temp/sidebar/stylebar.css"
import "./admin-temp/style.css"



function isAuthenticated(){
    localStorage.clear();
    if(!localStorage.getItem('type'))
    localStorage.setItem('type','admin');
    return true;
}

export default function Home(){
    if(!isAuthenticated()){
        window.location.href="/signin";
    }
    return(
        <div>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Report/>} />
                <Route path="/helpandsupport" element={<HelpSupport/>} />
                <Route path="/announcements" element={<Announcements_Admin/>} />
                <Route path="/message" element={<Messages/>} />
            </Routes>

        </div>
    );
}