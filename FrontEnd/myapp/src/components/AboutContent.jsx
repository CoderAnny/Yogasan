
import React from "react";

import {NavLink} from "react-router-dom";




const AboutContent = () =>{

    return(

        <>
                <div className="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="titlepage">
                                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="about_img">
                                <figure><img src={require("./images/about.png")} alt="#"/>
                                </figure>
                                <NavLink exact to="/" className="read_more yoga_btn"> Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )


}

export default AboutContent;