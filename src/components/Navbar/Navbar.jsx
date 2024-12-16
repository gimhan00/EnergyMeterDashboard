import { useState } from "react";
import { FiSearch } from "react-icons/fi";
// import Logo from "../Logo/Logo";
import { IoNotificationsOutline } from "react-icons/io5";
import { perfectShape } from "../../utility";
import profile from "../../assets/profile.jpg";
import { TiThMenu } from "react-icons/ti";
import "./Navbar.css";

const Navbar = ({ onMenuClick }) => {
  const [focus, setFocus] = useState(false);
  return (
    <nav className="blur navbar">
      {/* <Logo /> */}
      <h2 className="page-title">Dashboard</h2>

      <div className={`blur search ${focus && "active"}`} style={{ visibility: 'hidden'}}>
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
      </div>

      <div className="notification" style={{ ...perfectShape(40, 40) }}>
        <IoNotificationsOutline />
      </div>

      <div className="user">
        <div className="profile" style={{ ...perfectShape(40, 40) }}>
          <img src={profile} alt="" />
        </div>
        <div className="user-info">
          <h4 className="name">Lasitha Gimhan</h4>
          <p className="account-type">Admin</p>
        </div>
      </div>
      <div className="menu" onClick={onMenuClick || (() => {})}>
        <TiThMenu />
      </div>
    </nav>
  );
};

export default Navbar;
