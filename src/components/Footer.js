// Footer.js

import React from "react";
import { Link } from "react-router-dom";
import small_logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-section">
        <div className="company-info">
          <img src={small_logo} alt="Company Logo" />
          <p>
            We are a family-owned Mediterranean restaurant, dedicated to serving
            traditional recipes with a contemporary flair.
          </p>
        </div>
        <div className="footer-links">
          <h3>Important Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br />
              123 Town Street, Chicago
            </li>
            <li>
              Phone: <br />
              +00 123 456 789
            </li>
            <li>
              Email: <br />
              little@lemon.com
            </li>
          </ul>
        </div>
        <div className="social-links">
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
