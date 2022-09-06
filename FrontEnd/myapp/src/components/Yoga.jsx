import React from "react";
import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import Heading from "./Heading";
import YogaContent from "./YogaContent";

const Yoga = () =>{

    return (
        <>
             <div style={{backgroundColor:"rgb(106,22,243)"}}>
            <WebHeader/>
            </div>
            <Heading Title="YOGA"/>
           <div style={{backgroundColor:"#001935"}}>
                <YogaContent/>
           </div>
            <WebFooter/>
        </>
    )

}

export default Yoga;