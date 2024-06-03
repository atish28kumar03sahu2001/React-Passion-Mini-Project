import React from "react";
import '../Styles/Header.css';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <footer className="F_Container">
            <div className="footer-top">
                <p className="FP1">©2023 Company</p>
                <p className="FLAND">Landing</p>
                <button className="Fbtnh3">Purchase Now</button>
            </div>
            <hr className="hhr" />
            <div className="footer-bottom">
                <nav className="footer-nav">
                    <a href="#Home" className="footer-link">Home</a>
                    <a href="#About" className="footer-link">About</a>
                    <a href="#Contact" className="footer-link">Contact</a>
                </nav>
                <div className="footer-icon">
                    <FontAwesomeIcon icon={faFacebook} size="xs" style={{ color: "#8A8A8A", }} className="icn" />
                    <FontAwesomeIcon icon={faTwitter} size="xs" style={{ color: "#8A8A8A", }} className="icn" />
                    <FontAwesomeIcon icon={faLinkedin} size="xs" style={{ color: "#8A8A8A", }} className="icn" />
                    <FontAwesomeIcon icon={faYoutube} size="xs" style={{ color: "#8A8A8A", }} className="icn" />
                    <FontAwesomeIcon icon={faInstagram} size="xs" style={{ color: "#8A8A8A", }} className="icn" />
                </div>
            </div>
        </footer>
    );
}
export default Footer;