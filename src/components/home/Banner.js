import React from "react";

function Banner() {
    return (
        <>
            <div className="container-fluid">
                    <section className="home-banner">
                        <div className="home-banner-wrapper">
                        <div className="container">

                            <div className="main-slider__shape-box">
                                {/* <img src="assets/images/shapes/slider-shape-1-1.png" alt="slider-shape" className="main-slider__shape-one"/>
                                <img src="assets/images/shapes/slider-shape-1-2.png" alt="slider-shape" className="main-slider__shape-two"/> */}
                            </div>
                            <div className="d-flex flex-coumn">
                                <div className="banner-left"> <h1 className="text-white"> Where Creativity
                                                                    Meets Technology
                                                                </h1>
                                 </div>
                                <div className="banner-right"> 
                                    <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque, in convallis</p>
                                    <button className="text-white btn btn-success banner-button">abc</button>
                                    <button className="text-white btn btn-transparent banner-button">def</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section> 
            </div>
        </>
    );
}

export default Banner;
