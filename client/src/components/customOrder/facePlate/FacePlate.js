import React, { Component } from 'react';
import $ from 'jquery';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";
import './FacePlate.css' 


// standard faceplates
import whiteSolid from '../../../assets/image/faceplates/whiteSolid.png'
import Red from '../../../assets/image/faceplates/red.png'
import Black from '../../../assets/image/faceplates/black.png'
import LightYellow from '../../../assets/image/faceplates/lightYellow.png'
import Blue from '../../../assets/image/faceplates/blue.png'
import Orange from '../../../assets/image/faceplates/orange.png'
import SkyBlue from '../../../assets/image/faceplates/skyBlue.png'
import Violet from '../../../assets/image/faceplates/violet.png'
import White from '../../../assets/image/faceplates/white.png'
import Yellow from '../../../assets/image/faceplates/yellow.png'

// custom faceplates
import w11 from '../../../assets/image/faceplates/custom/11.png'
import w12 from '../../../assets/image/faceplates/custom/12.png'
import w13 from '../../../assets/image/faceplates/custom/13.png'
import w14 from '../../../assets/image/faceplates/custom/14.png'
import w18 from '../../../assets/image/faceplates/custom/18.png'
import w19 from '../../../assets/image/faceplates/custom/19.png'
import w20 from '../../../assets/image/faceplates/custom/20.png'
import w21 from '../../../assets/image/faceplates/custom/21.png'
import w22 from '../../../assets/image/faceplates/custom/22.png'
import w23 from '../../../assets/image/faceplates/custom/23.png'
import w24 from '../../../assets/image/faceplates/custom/24.png'
import w25 from '../../../assets/image/faceplates/custom/25.png'
import w26 from '../../../assets/image/faceplates/custom/26.png'
import w27 from '../../../assets/image/faceplates/custom/27.png'
import w30 from '../../../assets/image/faceplates/custom/30.png'
import w31 from '../../../assets/image/faceplates/custom/31.png'
import w32 from '../../../assets/image/faceplates/custom/32.png'
import w33 from '../../../assets/image/faceplates/custom/33.png'
import w34 from '../../../assets/image/faceplates/custom/34.png'
import w35 from '../../../assets/image/faceplates/custom/35.png'
import w36 from '../../../assets/image/faceplates/custom/36.png'
import w37 from '../../../assets/image/faceplates/custom/37.png'
import w38 from '../../../assets/image/faceplates/custom/38.png'
import w39 from '../../../assets/image/faceplates/custom/39.png'
import w40 from '../../../assets/image/faceplates/custom/40.png'


// premium faceplates
import w15 from '../../../assets/image/faceplates/premium/15.png'
import w16 from '../../../assets/image/faceplates/premium/16.png'
import w17 from '../../../assets/image/faceplates/premium/17.png'
import w28 from '../../../assets/image/faceplates/premium/28.png'
import w29 from '../../../assets/image/faceplates/premium/29.png'

// standard shells
import s17 from '../../../assets/shells custom/17.png'
import s18 from '../../../assets/shells custom/18.png'
import s19 from '../../../assets/shells custom/19.png'
import s20 from '../../../assets/shells custom/20.png'
import s21 from '../../../assets/shells custom/21.png'
import s22 from '../../../assets/shells custom/22.png'
import s23 from '../../../assets/shells custom/23.png'
import s24 from '../../../assets/shells custom/24.png'
import s25 from '../../../assets/shells custom/25.png'
import s26 from '../../../assets/shells custom/26.png'
import s27 from '../../../assets/shells custom/27.png'
import s28 from '../../../assets/shells custom/28.png'

// custom shells
import c01 from '../../../assets/shells standard/01.png'
import c02 from '../../../assets/shells standard/02.png'
import c03 from '../../../assets/shells standard/03.png'
import c04 from '../../../assets/shells standard/04.png'
import c05 from '../../../assets/shells standard/05.png'
import c06 from '../../../assets/shells standard/06.png'
import c07 from '../../../assets/shells standard/07.png'
import c08 from '../../../assets/shells standard/08.png'
import c09 from '../../../assets/shells standard/09.png'
import c10 from '../../../assets/shells standard/10.png'
import c11 from '../../../assets/shells standard/11.png'
import c12 from '../../../assets/shells standard/12.png'
import c13 from '../../../assets/shells standard/13.png'
import c14 from '../../../assets/shells standard/14.png'
import c15 from '../../../assets/shells standard/15.png'
import c16 from '../../../assets/shells standard/16.png'

import c17 from '../../../assets/shells standard/29.png'
import c18 from '../../../assets/shells standard/30.png'
import c19 from '../../../assets/shells standard/31.png'
import c20 from '../../../assets/shells standard/32.png'
import c21 from '../../../assets/shells standard/33.png'
import c22 from '../../../assets/shells standard/34.png'
import c23 from '../../../assets/shells standard/35.png'
import c24 from '../../../assets/shells standard/36.png'
import c25 from '../../../assets/shells standard/37.png'
import c26 from '../../../assets/shells standard/38.png'
import c27 from '../../../assets/shells standard/39.png'
import c28 from '../../../assets/shells standard/40.png'
import c29 from '../../../assets/shells standard/41.png'
import c30 from '../../../assets/shells standard/42.png'


export default class FacePlate extends Component {
        constructor(props){
            super(props);
        }
    


    render() { 
        
        return (
            <div> 
               
                <div>              
                    <ul className="nav nav-pills tab-category" style={{fontSize:"15px" }}>
                        <li className="active"><a data-toggle="pill" href="#premium">Faceplates</a></li>
                        <li><a data-toggle="pill" href="#standard">Shells</a></li>
                        {/* <li><a data-toggle="pill" href="#custom">Custom</a></li> */}
                    </ul>  
                </div>      
                <div className="tab-content">
                    <div id="premium" className="tab-pane fade in active">

                    <section>
                        <div className="row">
                            <div className="col-md-12">                                   
                                <div className="changeBg">

                                    <h5 className="faceplate-type">Premium Faceplates</h5>
                                                    
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={w15} onClick={this.props.handlePremium1} />

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={w16} onClick={this.props.handlePremium2}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={w17} onClick={this.props.handlePremium3}/>
                                    
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={w28} onClick={this.props.handlePremium4}/>
                                            
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={w29} onClick={this.props.handlePremium5}/>

                               
                                </div>
                            </div>
                        </div>
                    </section>

                    <section style={{border:"3px"}}>                       
                            <div className="row">     
                            <div className="col-md-12">    
                            <div className="changeBg">
                                        <h5 className="faceplate-type">Custom Faceplates </h5>
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w11} onClick={this.props.handleCustom1} />

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w12} onClick={this.props.handleCustom2}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w13} onClick={this.props.handleCustom3}/>
                                        
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w14} onClick={this.props.handleCustom4}/>
                                        
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w18} onClick={this.props.handleCustom5}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w19} onClick={this.props.handleCustom6}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w20} onClick={this.props.handleCustom7}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w21} onClick={this.props.handleCustom8}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w22} onClick={this.props.handleCustom9}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={w23} onClick={this.props.handleCustom10}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w24} onClick={this.props.handleCustom11}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w25} onClick={this.props.handleCustom12}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w26} onClick={this.props.handleCustom13}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w27} onClick={this.props.handleCustom14}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w30} onClick={this.props.handleCustom15}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w31} onClick={this.props.handleCustom16}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w32} onClick={this.props.handleCustom17}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w33} onClick={this.props.handleCustom18}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w34} onClick={this.props.handleCustom19}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w35} onClick={this.props.handleCustom20}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w36} onClick={this.props.handleCustom21}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w37} onClick={this.props.handleCustom22}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w38} onClick={this.props.handleCustom23}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w39} onClick={this.props.handleCustom24}/>

                                        <img 
                                        className="img-responsive changeColor" 
                                        src={w40} onClick={this.props.handleCustom25}/>
                                            

                                    </div>

</div>
                                
                                
                            </div>
                            
                    </section>

                        <section>
                            <div className="row">
                                <div className="col-md-12">                                   
                                    <div className="changeBg">
                                        <h5 className="faceplate-type">Standard Faceplates</h5>
                                        
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={whiteSolid} onClick={this.props.handlewhiteSolid} />

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Red} onClick={this.props.handleRed}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Black} onClick={this.props.handleBlack}/>
                                        
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={LightYellow} onClick={this.props.handleLightYellow}/>
                                        
                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Orange} onClick={this.props.handleOrange}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Blue} onClick={this.props.handleBlue}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={SkyBlue} onClick={this.props.handleSkyBlue}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Violet} onClick={this.props.handleViolet}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={Yellow} onClick={this.props.handleYellow}/>

                                        <img 
                                            className="img-responsive changeColor" 
                                            src={White} onClick={this.props.handleWhite}/>

                                    </div>

                                </div>                                
                                
                            </div>
                    </section> 

                    
                    

                    </div>

                    <div id="standard" className="tab-pane fade">

                    <section>
                        <div className="row">
                            <div className="col-md-12">                                   
                                <div className="changeBg">

                                <h5 className="faceplate-type">Custom Shells</h5>
                                                    
                                <img 
                                    className="img-responsive changeColor" 
                                    src={s17} onClick={this.props.standardShell1} />

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s18} onClick={this.props.standardShell2}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s19} onClick={this.props.standardShell3}/>
                                
                                <img 
                                    className="img-responsive changeColor" 
                                    src={s20} onClick={this.props.standardShell4}/>
                                        
                                <img 
                                    className="img-responsive changeColor" 
                                    src={s21} onClick={this.props.standardShell5}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s22} onClick={this.props.standardShell6}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s23} onClick={this.props.standardShell7}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s24} onClick={this.props.standardShell8}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s25} onClick={this.props.standardShell9}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s26} onClick={this.props.standardShell10}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s27} onClick={this.props.standardShell11}/>

                                <img 
                                    className="img-responsive changeColor" 
                                    src={s28} onClick={this.props.standardShell12}/>

                                
                           
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="row">
                            <div className="col-md-12">                                   
                                <div className="changeBg">

                                    <h5 className="faceplate-type">Standard Shells</h5>
                                                    
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c01} onClick={this.props.handleCustomShell1} />

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c02} onClick={this.props.handleCustomShell2}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c03} onClick={this.props.handleCustomShell3}/>
                                    
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c04} onClick={this.props.handleCustomShell4}/>
                                            
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c05} onClick={this.props.handleCustomShell5}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c06} onClick={this.props.handleCustomShell6} />

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c07} onClick={this.props.handleCustomShell7}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c08} onClick={this.props.handleCustomShell8}/>
                                    
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c09} onClick={this.props.handleCustomShell9}/>
                                            
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c10} onClick={this.props.handleCustomShell10}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c11} onClick={this.props.handleCustomShell11}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c12} onClick={this.props.handleCustomShell12}/>
                                
                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c13} onClick={this.props.handleCustomShell13}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c14} onClick={this.props.handleCustomShell14}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c15} onClick={this.props.handleCustomShell15}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c16} onClick={this.props.handleCustomShell16}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c17} onClick={this.props.handleCustomShell17}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c18} onClick={this.props.handleCustomShell18}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c19} onClick={this.props.handleCustomShell19}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c20} onClick={this.props.handleCustomShell20}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c21} onClick={this.props.handleCustomShell21}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c22} onClick={this.props.handleCustomShell22}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c23} onClick={this.props.handleCustomShell23}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c24} onClick={this.props.handleCustomShell24}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c25} onClick={this.props.handleCustomShell25}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c26} onClick={this.props.handleCustomShell26}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c27} onClick={this.props.handleCustomShell27}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c28} onClick={this.props.handleCustomShell28}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c29} onClick={this.props.handleCustomShell29}/>

                                    <img 
                                        className="img-responsive changeColor" 
                                        src={c30} onClick={this.props.handleCustomShell30}/>

                           
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
    

