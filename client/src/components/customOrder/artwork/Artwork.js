import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor'
import $ from 'jquery';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";
import './Artwork.css' 
//import ImageInputDialog from './test.js' 

import Logo from '../../../assets/image/logo.png'
import Logo2 from '../../../assets/image/newStealthLogo.png'

// standard faceplates
import whiteSolid from '../../../assets/image/faceplates/whiteSolid.png'
import Red from '../../../assets/image/faceplates/red.png'
import Black from '../../../assets/image/faceplates/black.png'
import LightYellow from '../../../assets/image/faceplates/lightYellow.png'
import Blue from '../../../assets/image/faceplates/blue.png'
import SkyBlue from '../../../assets/image/faceplates/skyBlue.png'
import Violet from '../../../assets/image/faceplates/violet.png'
import Yellow from '../../../assets/image/faceplates/yellow.png'

export default class Artwork extends Component {
        constructor(props){
            super(props);
                this.state= {
                    initialValue : "",
                    northAmericaState: "northAmerica",
                    latinAmericaState:"",
                    chinaHongState:"",
                    reastOfWorldState:""
                }            
        }
        
  handleChange = (e) => {
            console.log(e.target.value);
            if(e.target.value =="northAmerica"){
                this.setState({
                    northAmericaState: "northAmerica",
                    latinAmericaState: "",
                    chinaHongState:"",
                    reastOfWorldState:""
                   
                });
            }else  if(e.target.value =="latinAmerica"){
               
                this.setState({
                    northAmericaState: "",
                    latinAmericaState: "latinAmerica",
                    chinaHongState:"",
                    reastOfWorldState:""
                   
                });
            }else  if(e.target.value =="chinaHong"){
                this.setState({
                    northAmericaState: "",
                    latinAmericaState: "",
                    chinaHongState:"chinaHong",
                    reastOfWorldState:""
                   
                });

            }else  if(e.target.value =="reastOfWorld"){

               this.setState({
                    northAmericaState: "",
                    latinAmericaState: "",
                    chinaHongState:"",
                    reastOfWorldState:"reastOfWorld"
                   
                });

            }
          }        

    render() {         

        return (
            <div> 
               
                <div>     
                    <ul className="nav nav-pills tab-category" style={{fontSize:"15px" }}>
                        <li className="active"><a data-toggle="pill" href="#artwork" onClick={this.props.actionTabClick}>Artwork</a></li>
                        <li><a data-toggle="pill" href="#casing" onClick={this.props.casingTabClick}>Casing</a></li>
                    </ul>  
                </div>    
              
                <div className="tab-content">
                    <div id="artwork" className="tab-pane fade in active">

                        <section>
                        
                            <div className="upload-img">
                            <label>Left</label>
                                <div className="upload-container">
                                <label style={{fontSize: "9px"}}>Left Image</label>
                                <input type="file" onChange={this.props.uploadLeftImage} style={{width: "85px"}} />

                                </div>
                            </div>
                        
                            <div className="upload-img">
                            <label>Right</label>
                                {/* <img id="target" src={this.state.image}/> */}

                                <div className="upload-container">
                                <label style={{fontSize: "9px"}}>Right Image</label>
                                <input type="file" onChange={this.props.uploadrightImage} style={{width: "85px"}}/>
                            </div>
                            </div>
                    
                    </section>

                        <section>
                            <div className="row">
                                <div className="col-md-12">  
                                  
                                   <div className="changeBg">
                                        <label htmlFor="initials">Initials (Good Times Font)</label>
                                        <input type="text" id="inputBox" className="form-control" maxLength="5" name="initials" 
                                            onChange={this.props.uploadrightText} placeholder=" Maximum 5 letters"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                                  
                                   <div className="changeBg artwork-color">
                                        
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={whiteSolid} onClick={this.props.whiteColor} />

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Red} onClick={this.props.RedColor}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Black} onClick={this.props.BlackColor}/>
                                        
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={LightYellow} onClick={this.props.LightYellowColor}/>
                                       
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Blue} onClick={this.props.BlueColor}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={SkyBlue} onClick={this.props.SkyBlueColor}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Violet} onClick={this.props.VioletColor}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Yellow} onClick={this.props.YellowColor}/>

                                    
                            </div>
                        </section>

                        <section>
                            <div className="row">
                                <div className="col-md-12">  
                                    <div className="changeBg changeLogo mt10 mb10">
                                        <h5>Logo</h5>
                                        
                                            
                                            <img className="logo-margin" src={Logo2}
                                                onClick={this.props.uploadrightLogo2}
                                            />
                                            <div className="form-group color-black">
                                            <input id ="logocheck" type="checkbox" name="shellText"   style={{float:"left",textAlign:"left"}} onChange={this.props.hideLogo}/><span style={{float:"left", paddingLeft: "10px"}} >Remove Logo</span>
                                            </div>
                                            <div className="form-group color-black" style={{float:"left"}}>
                                            <input type="checkbox" style={{float:"left"}} name="shellText" value=""/><span style={{ paddingLeft: "10px"}} >Name Etching on Background of Shell</span>
                                            </div>
                                           
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div id="casing" className="tab-pane fade">
                    
                         <section>
                         <div className="changeBg">
                            <label htmlFor="initials">Name on Casing </label>
                            <input type="text" className="form-control" maxLength="20" name="initials" 
                                onChange={this.props.uploadCasingText} placeholder="Maximum 20 letter"
                            />
                            </div>
                         </section>
                        <section>
                            <div className="row">
                                <div className="col-md-12">  
                                  <div className="changeBg">
                                  <p htmlFor="initials"><strong> Ear Impressions</strong></p>
                                  </div> 

                                  <div className="changeBg">
                                  <label htmlFor="initials"> SELECT COUNTRY</label>

                                     <select  className="form-control" onChange={this.handleChange}>
        
                                    <option value="northAmerica">North America</option> 
                                    <option value="chinaHong">China, Hong Kong & Macau</option> 
                                    <option value="reastOfWorld"> Rest of the World</option> 
                                     
                                    
                                    </select>

                                   
                                  </div>      
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="row">
                                <div className="col-md-12">  
                                  <div className="changeBg" id="address">
                                  <p htmlFor="initials"><strong>MAIL YOUR EAR IMPRESSION TO:</strong></p>

                                  
                                  
                                  {this.state.northAmericaState ===  "northAmerica"?
                                  
                                  <div className="color-black address-color"> 
                                 <span className="name-span">Randy Fuchs</span><br/>
                                     <address>
                                        Artist Relations<br/>
                                        Randy@artistrelations.com/<br/>
                                        randy@stealthsonics.com<br/>
                                        +1 615 523 9995</address>
                            
                                   </div> 
                                   :null
                                  }
                                   {this.state.latinAmericaState === "latinAmerica"?
                                  
                                  <div className="color-black address-color"> 
                                  <span className="name-span">Chris Adams</span>
                                     <address>
                                     Studio Sound International, LLC<br/>
                                     Mission Viejo, CA 92692<br/>
                                     chris@studiosoundintl.com<br/>
                                     Cell: +1 (949)690-8388<br/>
                                     Work: +1 (949) 460-9069
                                     </address>
                                 <label>
           
           
           
           	
                            </label>
                                   </div> 
                                   :null
                                  }

                                   {this.state.chinaHongState === "chinaHong"?
                                  <div className="color-black address-color"> 
                                  <span className="name-span">Chris Adams</span>
                                     <address>
                                     Labkable<br/>
                                     Rm 916-917, Hollywood Plaza,<br/>
                                     610 Nathan Road,<br/>
                                     Mongkok, Hong Kong<br/>
                                     +852 6428 3188 (Novelle Au)<br/>
                                     novelleau@labkable.com
                                     </address>
                                
                                   </div> 
                                   :null
                                  }


                                   {this.state.reastOfWorldState === "reastOfWorld"?
                                  
                                  <div className="color-black address-color"> 
                                 
                                     <address>
                                     Stealth Sonics Pte. Ltd.<br/>
                                     140 Paya Lebar Road<br/>
                                     #01-14, AZ@Paya Lebar, Singapore 409015<br/>
                                     sales@stealthsonics.com

                                     </address>

                                   </div> 
                                   :null
                                  }
                                     
                                   
                                  </div>      
                                </div>
                            </div>
                        </section>
                    </div>
                    
                </div>
            </div>
        )
    }
}
    

