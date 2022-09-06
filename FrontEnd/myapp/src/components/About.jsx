
import React from "react";
import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import Heading from "./Heading";
import AboutContent from "./AboutContent";


const About = () =>{

    return(
        <>
            <div style={{backgroundColor:"rgb(106,22,243)"}}>
            <WebHeader/>
            </div>
            <Heading Title="ABOUT US"/>
            <AboutContent/>
            <WebFooter/>        
        </>
    )
}

export default About;