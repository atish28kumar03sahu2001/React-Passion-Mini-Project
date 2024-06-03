import React from "react";
import img from '../Image/img2.png';
import img1 from '../Image/logo1.png';
import '../Styles/Section1.css';
const Section2 = () => {
    return (
        <>
            <div className="Sec1_Container">
                <div className="B1">
                    <p className="B1H1">Light, Fast & Powerful</p>
                    <p className="B1P pp1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <div className="B1DIV1">
                        <div className="B1DIV11">
                            <img src={img1} alt="Logo1" width="30px" height="30px" />
                            <h4>Title Goes Here</h4>
                            <p className="B1DIV1p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        </div>
                        <div className="B1DIV11">
                            <img src={img1} alt="Logo1" width="30px" height="30px" />
                            <h4>Title Goes Here</h4>
                            <p className="B1DIV1p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        </div>
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
export default Section2;