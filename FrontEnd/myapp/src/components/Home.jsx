import React from "react";
import { NavLink } from "react-router-dom";
import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import AboutContent from "./AboutContent";
import YogaContent from "./YogaContent";
import PricingContent from "./PricingContent";
import ClassContent from "./ClassContent";
import ContactForm from "./ContactForm";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const Home = () =>{

   const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };



    return(
        <div className="main-layout">
      <header className="full_bg">

<WebHeader/>

 <section className="banner_main">
 <Carousel 
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      swipeable={false}
      draggable={false}
      showDots={false}
   >
         <div className="w-75 m-auto d_flex">
            <div className="yo_img w-50 m-0">
               <figure><img src={require("./images/yo_img.png")} alt="#"/></figure>
            </div>
            <div className="yoga_box w-50 m-0">
               <span>Now started</span>
               <h1 className="d_flex"> <strong>Y</strong> O <strong>G</strong> A</h1>
               <NavLink exact to="/contact" className="read_more yoga_btn" role="button">Contact us</NavLink>
               </div>
            </div>

            <div className="w-75 m-auto d_flex">
            <div className="yo_img w-50 m-0">
               <figure><img src={require("./images/yo_img.png")} alt="#"/></figure>
            </div>
            <div className="yoga_box w-50 m-0">
               <span>Now started</span>
               <h1 className="d_flex"> <strong>Y</strong> O <strong>G</strong> A</h1>
               <NavLink exact to="/contact" className="read_more yoga_btn" role="button">Contact us</NavLink>
               </div>
            </div>


            <div className="w-75 m-auto d_flex">
            <div className="yo_img w-50 m-0">
               <figure><img src={require("./images/yo_img.png")} alt="#"/></figure>
            </div>
            <div className="yoga_box w-50 m-0">
               <span>Now started</span>
               <h1 className="d_flex"> <strong>Y</strong> O <strong>G</strong> A</h1>
               <NavLink exact to="/contact" className="read_more yoga_btn" role="button">Contact us</NavLink>
               </div>
            </div>
   </Carousel>


 </section>
</header>
<h2 className="h2">OUR CLASSES</h2>
<ClassContent/>

<div className="middle">
 <div className="container-fluid">
    <div className="row d_flex">
       <div className="col-md-6">
          <div className="titlepage">
             <h2 >The Inner Middle.</h2>
             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu</p>
             <NavLink exact to="/" className="read_more ye_b5n "> Read More</NavLink>
          </div>
       </div>
       <div className="col-md-5 offset-md-1 p-0">
          <div className="yoga_img">
             <figure><img src={require("./images/yoga_mo.png")} alt="#"/></figure>
          </div>
       </div>
    </div>
 </div>
</div>
<h2 className="h2">About us</h2>
<AboutContent/>

<YogaContent/>


<h2 className="h2" style={{textAlign:"left",padding:"0px 50px"}}>Pricing</h2>
<PricingContent/>
<h2 className="h2" style={{textAlign:"left",padding:"0px 50px",background:"#001935",color:"white",marginBottom:"0px",paddingTop:"20px"}}>Contact Us</h2>
<ContactForm/>
<WebFooter>
   
   </WebFooter>
        </div>
    )
}

export default Home;