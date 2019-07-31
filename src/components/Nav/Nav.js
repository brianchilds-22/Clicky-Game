import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
    {/* <li id="gameScore">Current Score: {props.score}</li> */}
      <li className="header">Current Score: {props.score}
        {/* <span className = "header">Current Score: {props.score}</span> */}
      </li>

      {/* <li id="message">{props.message}</li>  */}

      
      
      <li id="highScore">Top Score: {props.highScore}</li>
    </ul>
  </nav>
 );
    
export default Nav;