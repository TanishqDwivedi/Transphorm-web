import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 
                        text-center ">GaN is the next future
                        </h1>
                        <p className="lead text-center fs-4 mb-5">Gallium
                        nitride(GaN) is creating an innovative shift throughout 
                        the power electronics world.For decades, silicon-based MOSFETs
                        have been an integral part of the everyday modern world that helps 
                        convert energy to power.
                        </p>
                        <div className="buttons d-flex justify-content-center">
                            <NavLink to = "/contact" className="btn btn-light me-4 
                            rounded  pill px-4 py-2">Get Quote</NavLink> 
                            <NavLink to="/services" className="btn btn-light me-4 
                            rounded  pill px-4 py-2">Our Services</NavLink> 
                        </div>
                      </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>

    );
}

export default Home;