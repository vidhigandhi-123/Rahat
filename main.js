import React from "react";
import{Switch,Route} from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact"
import Services from "./services";
import CaseStudies from "./casestudies";


const Main = ()=>(
    <Switch>
        <Route exact path = "/" component = {LandingPage}/>
        <Route path ="/aboutme" component={AboutMe} />
        <Route path ="/contact" component={Contact} />
        
        <Route path ="/services" component={Services} />
        <Route path ="/casestudies" component={CaseStudies} />
        


    </Switch>
)
export default Main;