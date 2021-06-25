import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-column">
              <p className="footer-header">Products</p>
              <ul className="footer-links">
                <li>
                  <a href="/portfolio">Work</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/">Commissions</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-header">About</p>
              <ul className="footer-links">
                <li>
                  <a href="/contact">Get in touch</a>
                </li>
                <li>
                  <a href="/about">About Dalston Ceramics</a>
                </li>
              </ul>
            </div>

            <div className="footer-column connect">
              <p className="footer-header">Connect</p>

              <p className="footer-text">Sign up to receive our newsletter</p>

              <form id="email-signup">
                <label for="subscribe" className="visually-hidden">
                  Subscribe to our newsletter
                </label>
                <input
                  id="subscribe"
                  className="subscribe"
                  type="email"
                  placeholder="youremail@address.com"
                  required
                />
                <button className="btn-subscribe">Subscribe</button>
              </form>
              <div className="social-links">
                <a href="https://en-gb.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
