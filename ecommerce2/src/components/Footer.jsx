import React from "react";
import { icons } from "react-icons";
import "../index.css";
import FaBeer from 'React-icons/fa/beer'


//import './src/index.csss';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-text">
          <div class="copyright">
            <p>&copy; Don't worry. Do slappy's!!</p>
          </div>
          <br />
          <div class="footer-links">
            <a href="#">
              <span class="ti-twitter-alt"></span>
            </a>
            <a href="#">
              <span class="ti-facebook"></span>
            </a>
            <a href="#">
              <span class="ti-instagram"></span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
