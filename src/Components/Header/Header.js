import React from "react";
import '../Styles/Header.css';
const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="H1">
                    <a href="#Home" className="aa">Home</a>
                    <a href="#About" className="aa">About</a>
                    <a href="#Contact" className="aa">Contact</a>
                </div>
                <div className="H2">
                    <p className="LAND">Landing</p>
                </div>
                <div className="H2">
                    <button className="btnh3">Buy Now</button>
                </div>
            </div>
        </>
    );
}
export default Header;