import { Link } from "react-router-dom";
import "./footer.css";
import React from 'react';


const Footer = () => {
  return (
    <footer>
      <h2>
        <span>Connect with me on:</span>
      </h2>
      <ul id="media">
        <li style={{ "--clr": "#0011ff" }}>
          <a href="#" target="-blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li style={{ "--clr": "#ff0000" }}>
          <a href="#" target="-blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li style={{ "--clr": "#4506f0" }}>
          <a href="#" target="-blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li style={{ "--clr": "#e73f0c" }}>
          <a href="#" target="-blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li style={{ "--clr": "#04c214" }}>
          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
      </ul>

      <p>
        &copy; 2023{" "}
        <Link to={"#"} target="_blank">
          PROJECT
        </Link>{" "}
        | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
