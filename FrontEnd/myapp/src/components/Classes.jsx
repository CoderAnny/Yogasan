import React from "react";
import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import Heading from "./Heading";
import ClassContent from "./ClassContent";

const Classes = () =>{

    return(
        <>
             <div style={{backgroundColor:"rgb(106,22,243)"}}>
            <WebHeader/>
            </div>
            <Heading Title="OUR CLASSES"/>
            <ClassContent/>
            <WebFooter/>
        </>
    )

}

export default Classes;