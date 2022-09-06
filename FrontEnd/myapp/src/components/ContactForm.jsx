
import React from "react";
import { useState } from "react";
import axios from "axios";


const ContactForm = () =>{

   const formdataObj = 
   {
      fname:"",
      emailId:"",
      phone:"",
      message:""
   }

   const [formRecord,setFormRecord]= useState(formdataObj);


   const  formdata = e =>{
      setFormRecord({...formRecord,[e.target.name]:e.target.value});
   }

   const formsubmit = e =>{
      e.preventDefault();
      try{
         axios.post("http://localhost:5500/myapp",formRecord);
         alert("Data Submitted!")
         window.location.reload();
      }
      catch(err){
         console.log("Data couldn't submit!");
      }
   }


    return (

        <>

<div className="contact" style={{margin:0}}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 padding_right0">
                  <form id="request" className="main_form" onSubmit={formsubmit}>
                     <div className="row">
                        <div className="col-md-12 ">
                           <input style={{color:"#000"}} onChange={e=>formdata(e)} name="fname" className="contactus" placeholder="Name" type="text"required/> 
                        </div>
                        <div className="col-md-12">
                           <input style={{color:"#000"}} onChange={e=>formdata(e)} className="contactus" placeholder="Email" type="email" name="emailId" required/> 
                        </div>
                        <div className="col-md-12">
                           <input style={{color:"#000"}} onChange={e=>formdata(e)} className="contactus" placeholder="Phone Number" type="tel" name="phone" required/>                          
                        </div>
                        <div className="col-md-12">
                           <textarea onChange={e=>formdata(e)} className="textarea" placeholder="Message" type="text" Message="Name" name="message" style={{color:"#000",resize:"none"}}></textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-6 padding_left0">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe title="Unique Title" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="580" height="463" frameborder="0" style={{border:0, width: "100%;"}} allowfullscreen=""></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        
        </>

    )

}

export default ContactForm;