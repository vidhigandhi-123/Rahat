import React,{Component} from "react";
import {Grid , Cell } from "react-mdl";


class Landing extends Component{
    render(){
        return(
            <div style = {{width:'100%',margin :'auto'}}>
                <Grid className="landing-grid">
                <Cell col = {6}>
                <img
                        src="https://webstockreview.net/images/honesty-clipart-cyberbullying-6.png"                    
                        alt = "avatar"
                        className="avatar-img"
                        style={{height:"500px", width:"500px",left:"50%"}}
                        />
                       
                 </Cell>
                 <Cell col = {6}>
                     <h1 style={{color:"white",fontFamily:"TimesNewRoaman",margin:"0",textAlign:"left",position:"absolute",left:"60%",paddingTop:"0em"}}>RAHAT</h1>
                     
                     <div class="wrapper">
                  

                         <h2>We are experts in </h2>
                         <h3>CYBERBULLYING  <span></span></h3>
                    
                         <p>
                         Welcome to the Internet, where statements 
                         <br/>
                         are just statements.People will always have an
                         <br/> 
                         opposing point of view,just move on.                        
                         </p>
                         <a href= "#">SEEK HELP</a>
                     </div>
                     <div className="social-links">
                                {/* Github */}
                                <a href=" http://google.com" rel= "noopener noreferrer" target="blank">
                                    < i className="fa fa-github-square" aria-hidden="true"  />
                                </a>
                                {/* Youtube */}
                                <a href=" http://google.com" rel= "noopener noreferrer" target="blank">
                                    < i className="fa fa-youtube-square" aria-hidden="true"  />
                                </a>
                                 {/* Facebook */}
                                <a href=" http://google.com" rel= "noopener noreferrer" target="blank">
                                    < i className="fa fa-facebook-square" aria-hidden="true"  />
                                </a>
                                
                                



                            </div>
                           

                     
                     
                    

                 </Cell>
                </Grid>
            </div>
            )
            }
            }

        
    

export default Landing;