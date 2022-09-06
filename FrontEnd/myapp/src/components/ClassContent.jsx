
import React from "react";

import {NavLink} from "react-router-dom";


const ClassContent = () =>{

    return (

        <>
        <div className="classes">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage">
                   
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-sm-6 d_none">
               </div>
               <div className="col-md-4 col-sm-6 margin_bott">
                  <div className="our_yoga">
                     <figure><img src={require("./images/our_yoga1.png")} alt="#"/></figure>
                     <h3>HATHA YOGA</h3>
                     <span>Lorem ipsum dolor sit amet</span>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 d_none">
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="our_yoga">
                     <figure>
                        <img src={require("./images/our_yoga2.png")} alt="#"/></figure>
                     <h3>HATHA YOGA</h3>
                     <span>Lorem ipsum dolor sit amet</span>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 d_none">
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="our_yoga">
                     <figure><img src={require("./images/our_yoga3.png")} alt="#"/></figure>
                     <h3>HATHA YOGA</h3>
                     <span>Lorem ipsum dolor sit amet</span>
                  </div>
               </div>
               <div className="col-md-4 offset-md-4 col-sm-6  margin_top">
                  <div className="our_yoga">
                     <figure><img src={require("./images/our_yoga4.png")} alt="#"/></figure>
                     <h3>HATHA YOGA</h3>
                     <span>Lorem ipsum dolor sit amet</span>
                     <NavLink exact to="/" className="read_more yoga_btn"> Read More</NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    )

}

export default ClassContent;