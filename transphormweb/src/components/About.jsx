import React from "react";

const About = () => {
    return(
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/pictures/about1.jpg" alt="About" 
                            className="h-100 w-100 mt-5"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1> 
                            <hr className="w-50"/>
                            <p className="lead mb-4">Transphorm is a global semiconductor company, 
                                leading the GaN Revolution with the highest performance, highest 
                                reliability GaN devices for high voltage power conversion 
                                applications. To ensure this, Transphorm deploys its unique 
                                vertically-integrated business approach that leverages the 
                                industry’s most experienced GaN engineering team at every 
                                development stage: design, fabrication, device and application 
                                support. 
                            </p>
                            <button className="btn btn-outline-success rounded-pill 
                            px-4 py-2">Get Started</button>
                            <button className="btn btn-outline-success rounded-pill 
                            px-4 py-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;