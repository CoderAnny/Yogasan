
import React from "react";

import { NavLink } from "react-router-dom";

const PricingContent = () =>{

    return (

        <>
            <div className="pricing_main" style={{margin:"0px auto 50px auto"}}>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                   
                     <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="pricing">
                     <h4>STARTER PLAN</h4>
                     <h3><span>$</span>60</h3>
                     <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard</p>
                     <NavLink exact to="/" className="read_more dark_bg"> Start Now</NavLink>
                  </div>
               </div>
               <div className="col-md-4 ho_bor">
                  <div className="pricing ">
                     <h4>STARTER PLAN</h4>
                     <h3><span>$</span>60</h3>
                     <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard</p>
                     <NavLink exact to="/" className="read_more dark_bg"> Start Now</NavLink>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="pricing">
                     <h4>STARTER PLAN</h4>
                     <h3><span>$</span>60</h3>
                     <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard</p>
                     <NavLink exact to="/" className="read_more dark_bg"> Start Now</NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>

    )

}

export default PricingContent;