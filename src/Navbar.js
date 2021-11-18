import React,{useState} from 'react'
import "./Navbar.css";

function Navbar({account}) {
  
    return (
        <div>
            <nav className="navbar">
                <p className="navbar__appNAme">Voting Dapp 🎯</p>
                <p className="navbar__account">Account Address : {account}</p>
            </nav>
        </div>
    )
}

export default Navbar
