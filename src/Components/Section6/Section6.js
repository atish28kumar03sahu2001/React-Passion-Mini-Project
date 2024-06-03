import React from "react";
import '../Styles/Section1.css';
import '../Styles/Section6.css';
const Section6 = () => {
    return (
        <>
            <div className="L-Container">
                <h1 className="LH1">A price To Suit Everyone</h1>
                <p className="LP1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
                <h1 className="LH1">$40<br/><span className="LP1">UI Design Kit</span></h1>

                <p className="LP1">See, One price, Simple.</p>
                <button className="B1BTN PUK" style={{"marginBottom" : "80px"}}>Purchase Now</button>
            </div>
        </>
    );
}
export default Section6;