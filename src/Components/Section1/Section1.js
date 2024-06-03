import React from "react";
import '../Styles/Section1.css';
import img from '../Image/img1.png';
const Section1 = () => {
    return (
        <>
            <div className="Sec1_Container">
                <div className="B1">
                    <p className="B1H1">Introduce Your Product</p>
                    <p className="B1H1">Quickly & Effectively</p>
                    <p className="B1P"><span style={{"color": "rgb(34, 34, 63)"}}>My Name Is MAKS The VOID </span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <div className="B1DIV">
                        <button className="B1BTN PUK">Purchase UI Kit</button>
                        <button className="B1BTN LM">Learn More</button>
                    </div>
                </div>
                <div className="B1">
                    <div>
                        <img src={img} alt="Image1" width="500px" height="500px" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section1;