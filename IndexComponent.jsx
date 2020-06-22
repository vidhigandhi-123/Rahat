import React from "react";

import {BrowserRouter , Switch, Route} from "react-router-dom";

import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent"
class IndexComponent extends React.Component{

    render(){
        return (
            <BrowserRouter>
               <Switch>

                   <Route excat path = "/" component={LoginComponent}/>
                   
                   <Route  path = "/welcome/:username" component={WelcomeComponent}/>
                   <Route  path = "/logout" component={LoginComponent}/>
               </Switch>
            
            
            </BrowserRouter>
        );
    }




}


export default IndexComponent;