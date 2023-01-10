import React from "react";
import {Link} from "react-router-dom";
var AULogo = require("../images/aunlimited1.png");
var Stockimg = require("../images/stockau1.jpg")

const Header = () => {
    return(
    <header>
        <div className="header">
        <img src={AULogo} alt="accounting unlimited"/>
        <nav>
            <Link className="navbar" to="/">Home</Link>
            <Link className="navbar" to="/">About Us</Link>
            <Link className="navbar" to="/">Services</Link>
            <Link className="navbar" to="/">Client<br/>Login</Link>
            <Link className="navbar" to="/">Tools</Link>
            <Link className="navbar" to="/">News</Link>
            <Link className="navbar" to="/">Guides</Link>
            <Link className="navbar" to="/">Seminars</Link>
            <Link className="navbar" to="/">Forms</Link>
        </nav>
        </div>
        <img className="stockimg" src={Stockimg} alt="accounting unlimited"/>
        <div>
            
        </div>
    </header>
    
    )
}
export default Header