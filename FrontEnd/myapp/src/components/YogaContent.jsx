import React from "react";

import {NavLink} from "react-router-dom";

const YogaContent = () =>{

    return (

        <>
         <div className="balance">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-5 p-0">
                  <div className="yoga_img">
                     <figure><img src={require("./images/yoga_mo1.png")} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-6 offset-md-1">
                  <div className="titlepage">
                     <h2 className="padd_top30">Mind in Balance</h2>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu</p>
                     <NavLink exact to = "/" className="read_more ye_b5n"> Read More</NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
        
        </>

    )

}

export default YogaContent;