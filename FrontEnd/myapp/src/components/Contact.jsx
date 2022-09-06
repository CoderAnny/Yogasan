
import React from "react";
import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import Heading from "./Heading";
import ContactForm from "./ContactForm";

const Contact = () =>{

    return (
        <>
             <div style={{backgroundColor:"rgb(106,22,243)"}}>
            <WebHeader/>
            </div>
            <Heading Title="CONTACT US"/>
            <ContactForm/>
            <WebFooter/>
        </>
    )

}

export default Contact;