import React from "react";
import img from '../Image/img3.png';
import '../Styles/Section1.css';
const Section3 = () => {
    return (
        <>
            <div className="Sec1_Container">
                <div className="B1">
                    <div>
                        <img src={img} alt="Image1" width="500px" height="400px" />
                    </div>
                </div>
                <div className="B1 b13">
                    <p className="B1H1">Light, Fast & Powerful</p>
                    <p className="B1P pp1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
            </div>
        </>
    );
}
export default Section3;