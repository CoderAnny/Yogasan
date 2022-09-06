
import { Routes,Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Classes from  "./components/Classes";
import Yoga from "./components/Yoga";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

const Routing = () =>{

    return (

        <>

        <Routes>

            <Route exact path="/" element={<App/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/classes" element={<Classes/>}></Route>
            <Route exact path="/yoga" element={<Yoga/>}></Route>
            <Route exact path="/pricing" element={<Pricing/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>

        </Routes>
        
        </>

    )

}

export default Routing;