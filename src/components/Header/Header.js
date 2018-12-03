import React from "react";
import "./Header.css";
import llama from "./llama.png";

// Header
const Header = props => (

    <div id="header" className="container-fluid">

        <span className="headerSection" id="headerLeft">
            <img id="llama" src={llama} alt="fortnite llama" />
        </span>

        <span className="headerSection" id="headerMiddle">
            <h4 id="instructions">Click on an image to earn points, but don't click on any of them more than once!</h4>
        </span>
        <span className="headerSection" id="headerRight">
            <img id="llama2" src={llama} alt="fortnite llama" />
        </span>
    </div>
)
export default Header;