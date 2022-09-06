
import React from "react";
import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import Heading from "./Heading";
import PricingContent from "./PricingContent";

const Pricing = () =>{

    return (
        <>
             <div style={{backgroundColor:"rgb(106,22,243)"}}>
            <WebHeader/>
            </div>
            <Heading Title="PRICING"/>
            <PricingContent/>
            <WebFooter/>
        </>
    )

}

export default Pricing;