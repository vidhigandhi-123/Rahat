import React, { Component } from 'react';
import './App.css';
import {Layout,Drawer,Header,Navigation,Content} from "react-mdl";
import {Link} from "react-router-dom";
import Main from './components/main';



class App extends Component{
  render(){
    return (
      <div style={{height: '700px', position: 'relative'}}>
    <Layout>
  <Header className="header-color" title={<Link style={{textDecoration:"none",color:"white"}}to="/">RAHAT</Link>} >
            <Navigation>
                <Link to ="/AboutMe">AboutMe</Link>
                <Link to ="/Case Studies">CaseStudies</Link>
                <Link to ="/Services">Services</Link>
                <Link to ="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{background:"black",opacity:".7"}}title={<Link style={{textDecoration:"none",color:"white"}}to="/">RAHAT</Link>}>
            <Navigation style={{background:"black"}}>
            <Link to ="/AboutMe">Resume</Link>
                <Link to ="/Case Studies">CaseStudies</Link>
                <Link to ="/Services">Services</Link>
                <Link to ="/contact">Contact</Link>
                
            </Navigation>
        </Drawer>
        <Main />
        <Content />
        
    </Layout>
</div>
    );
  }
}

export default App;
