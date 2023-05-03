import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Switch from '@mui/material/Switch';
import { backIn } from "framer-motion";
function Header() {

  const [isOn,setIsOn]=useState(false)
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const handleChange=()=>{
    setIsOn(!isOn);
    document.body.style.backgroundColor=isOn?'var(--white)':'var(--black)'
  }
  
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
      <div className="toggle" >
      <Switch {...label } onChange={handleChange} />
      
    </div>
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/WatchlistPage">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            onClick={() => console.log("Btn Clicked")}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;