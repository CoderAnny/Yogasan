
import React from "react";

import {NavLink} from "react-router-dom";

import "./WebHeader.css";

const WebHeader = () =>{

    return(

        <>
        <div className="header ">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                            <img src={require("./images/logo.png")} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <NavLink exact to="/" className="nav-link" >Home</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink exact to="/about" className="nav-link" >About</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink exact to="/classes" className="nav-link">Classes</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink exact to="/yoga" className="nav-link">Yoga</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink exact to="/pricing" className="nav-link">Pricing</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink exact to="/contact" className="nav-link">Contact Us</NavLink>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
        
        </>

    )

}

export default WebHeader;