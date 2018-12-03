import React from "react";
import whitelogo from "./clickygamewhite.png"
import "./Navbar.css";

const Navbar = props => (

    <div id="navbar" className="container-fluid">

        <span className="navItem" id="navbarLeft">
            </span>
        <span className="navItem" id="navbarMiddle">
            <h1 id="guess">Click a character to begin!</h1>
        </span>
        <span className="navItem" id="navbarRight">
                <p className="score">
                    Top Score: {props.topScore}
                </p>
                <p className="score">
                    Score: {props.score}
                </p>
        </span>

    </div>

)

export default Navbar;