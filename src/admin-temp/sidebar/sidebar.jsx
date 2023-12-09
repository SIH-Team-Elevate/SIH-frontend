import { Link } from "react-router-dom";
import "./stylebar.css"
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="brand-name">Elevate</div>
        <div className="line"></div>
        <div className="heading">
          <Link className="heading-name" to="/">
            <span className="material-symbols-outlined">home</span>
            Report
          </Link>
          <Link className="heading-name" to="/helpandsupport">
            <span className="material-symbols-outlined">person</span>
            Help &amp Support
          </Link>
          <Link className="heading-name" to="/Announcement">
            <span className="material-symbols-outlined">campaign</span>
            Announcement
          </Link>
          <Link className="heading-name" to="/Message">
            <span className="material-symbols-outlined">chat_bubble</span>
            Message
          </Link>
        </div>
        <div className="line"></div>
        <div className="user">
          <div className="user-photo"></div>
          <div className="user-data">
            <div className="user-name">Pratyaksh</div>
            <div className="user-code">2022CS51654</div>
          </div>
        </div>
        <div className="logout">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </div>
      </div>
    </>
  );
}
