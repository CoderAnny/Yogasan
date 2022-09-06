import React from "react";

import {NavLink} from "react-router-dom";

const WebFooter = () =>{

   return (
      <footer>
      <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-8 offset-md-2">
                     <div className="newslatter">
                        <h4>Subscribe Our Newsletter</h4>
                        <form className="bottom_form">
                           <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                           <button className="sub_btn">subscribe</button>
                        </form>
                     </div>
                  </div>
                  <div className="col-sm-12">
                     <div className=" border_top1"></div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4">
                     <h3>QUICK LINKS</h3>
                     <ul className="link_menu">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li> <NavLink exact to="/about">About</NavLink></li>
                        <li><NavLink exact to="/classes">ClassNames</NavLink></li>
                        <li><NavLink exact to= "/yoga">Yoga</NavLink></li>
                        <li><NavLink exact to="/pricing">Pricing</NavLink></li>
                        <li><NavLink exact to="/contact">Contact Us</NavLink></li>
                     </ul>
                  </div>
                  <div className=" col-md-3">
                     <h3>TOP Yoga</h3>
                     <p className="many">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
                     </p>
                  </div>
                  <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                     <h3>Contact </h3>
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Location</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i>
                        <NavLink exact to="/"> demo@gmail.com</NavLink></li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
                     </ul>
                     <ul className="social_icon">
                        <li><NavLink  to="//www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></NavLink></li>
                        <li><NavLink exact to="//twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></NavLink></li>
                        <li><NavLink exact to="//www.linkedin.com/"><i className="fa fa-linkedin" aria-hidden="true"></i></NavLink></li>
                        <li><NavLink exact to="//www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></NavLink></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <p>© 2019 All Rights Reserved. Design by <NavLink exact to="/"> Free Html Templates</NavLink></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )

}

export default WebFooter;

