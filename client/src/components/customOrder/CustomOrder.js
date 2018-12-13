import React, { Component } from 'react';
import './CustomOrder.css';
import FacePlate from "./facePlate/FacePlate";
import Artwork from "./artwork/Artwork";
import $ from 'jquery';
import OrderDetail from "./OrderDetail";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { shippingItem } from '../../actions/authAction';  
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';


// premium faceplate images
import lf15 from '../../assets/image/faceplates/premium/lf15.png'
import rf15 from '../../assets/image/faceplates/premium/rf15.png'

import lf16 from '../../assets/image/faceplates/premium/lf16.png'
import rf16 from '../../assets/image/faceplates/premium/rf16.png'

import lf17 from '../../assets/image/faceplates/premium/lf17.png'
import rf17 from '../../assets/image/faceplates/premium/rf17.png'

import lf28 from '../../assets/image/faceplates/premium/lf28.png'
import rf28 from '../../assets/image/faceplates/premium/rf28.png'

import lf29 from '../../assets/image/faceplates/premium/lf29.png'
import rf29 from '../../assets/image/faceplates/premium/rf29.png'

// custom faceplates
import lf11 from '../../assets/image/faceplates/custom/lf11.png'
import rf11 from '../../assets/image/faceplates/custom/rf11.png'

import lf12 from '../../assets/image/faceplates/custom/lf12.png'
import rf12 from '../../assets/image/faceplates/custom/rf12.png'

import lf13 from '../../assets/image/faceplates/custom/lf13.png'
import rf13 from '../../assets/image/faceplates/custom/rf13.png'

import lf14 from '../../assets/image/faceplates/custom/lf14.png'
import rf14 from '../../assets/image/faceplates/custom/rf14.png'

import lf18 from '../../assets/image/faceplates/custom/lf18.png'
import rf18 from '../../assets/image/faceplates/custom/rf18.png'

import lf19 from '../../assets/image/faceplates/custom/lf19.png'
import rf19 from '../../assets/image/faceplates/custom/rf19.png'

import lf20 from '../../assets/image/faceplates/custom/lf20.png'
import rf20 from '../../assets/image/faceplates/custom/rf20.png'

import lf21 from '../../assets/image/faceplates/custom/lf21.png'
import rf21 from '../../assets/image/faceplates/custom/rf21.png'

import lf22 from '../../assets/image/faceplates/custom/lf22.png'
import rf22 from '../../assets/image/faceplates/custom/rf22.png'

import lf23 from '../../assets/image/faceplates/custom/lf23.png'
import rf23 from '../../assets/image/faceplates/custom/rf23.png'

import lf24 from '../../assets/image/faceplates/custom/lf24.png'
import rf24 from '../../assets/image/faceplates/custom/rf24.png'

import lf25 from '../../assets/image/faceplates/custom/lf25.png'
import rf25 from '../../assets/image/faceplates/custom/rf25.png'

import lf26 from '../../assets/image/faceplates/custom/lf26.png'
import rf26 from '../../assets/image/faceplates/custom/rf26.png'

import lf27 from '../../assets/image/faceplates/custom/lf27.png'
import rf27 from '../../assets/image/faceplates/custom/rf27.png'

// import lf30 from '../../assets/image/faceplates/custom/lf30.png'
// import rf30 from '../../assets/image/faceplates/custom/rf30.png'

import lf30 from '../../assets/image/faceplates/custom/lf030.png'
import rf30 from '../../assets/image/faceplates/custom/rf030.png'

import lf31 from '../../assets/image/faceplates/custom/lf31.png'
import rf31 from '../../assets/image/faceplates/custom/rf31.png'

import lf32 from '../../assets/image/faceplates/custom/lf32.png'
import rf32 from '../../assets/image/faceplates/custom/rf32.png'

import lf33 from '../../assets/image/faceplates/custom/lf33.png'
import rf33 from '../../assets/image/faceplates/custom/rf33.png'

import lf34 from '../../assets/image/faceplates/custom/lf34.png'
import rf34 from '../../assets/image/faceplates/custom/rf34kb.png'

import lf35 from '../../assets/image/faceplates/custom/lf35.png'
import rf35 from '../../assets/image/faceplates/custom/rf35.png'

import lf36 from '../../assets/image/faceplates/custom/lf36.png'
import rf36 from '../../assets/image/faceplates/custom/rf36.png'

import lf37 from '../../assets/image/faceplates/custom/lf37.png'
import rf37 from '../../assets/image/faceplates/custom/rf37.png'

import lf38 from '../../assets/image/faceplates/custom/lf38.png'
import rf38 from '../../assets/image/faceplates/custom/rf38.png'

import lf39 from '../../assets/image/faceplates/custom/lf39.png'
import rf39 from '../../assets/image/faceplates/custom/rf39.png'


import lf40 from '../../assets/image/faceplates/custom/lf40.png'
import rf40 from '../../assets/image/faceplates/custom/rf40.png'

// standard faceplate images
import  '../../assets/EarImages/ls01.png';
import  '../../assets/EarImages/rs01.png';

// import lf01 from '../../assets/image/faceplates/lf01.png'
import rf01 from '../../assets/image/faceplates/rf1.png'

import lf01 from '../../assets/image/faceplates/lf01.png'
// import rf01 from '../../assets/image/faceplates/rf01.png'

import lf02 from '../../assets/image/faceplates/lf02.png'
import rf02 from '../../assets/image/faceplates/rf02.png'

import lf03 from '../../assets/image/faceplates/lf03.png'
import rf03 from '../../assets/image/faceplates/rf03.png'

import lf04 from '../../assets/image/faceplates/lf04.png'
import rf04 from '../../assets/image/faceplates/rf04.png'

import lf05 from '../../assets/image/faceplates/lf05.png'
import rf05 from '../../assets/image/faceplates/rf05.png'

import lf06 from '../../assets/image/faceplates/lf06.png'
import rf06 from '../../assets/image/faceplates/rf06.png'

import lf07 from '../../assets/image/faceplates/lf07.png'
import rf07 from '../../assets/image/faceplates/rf07.png'

import lf08 from '../../assets/image/faceplates/lf08.png'
import rf08 from '../../assets/image/faceplates/rf08.png'

import lf09 from '../../assets/image/faceplates/lf09.png'
import rf09 from '../../assets/image/faceplates/rf09.png'

import lf10 from '../../assets/image/faceplates/lf10.png'
import rf10 from '../../assets/image/faceplates/rf10.png'

// standard shell images
import leftShellImage from '../../assets/EarImages/ls01.png';
import rightShellImage from '../../assets/EarImages/rs01.png';

import ls17 from '../../assets/shells custom/ls17.png'
import rs17 from '../../assets/shells custom/rs17.png'

import ls18 from '../../assets/shells custom/ls18.png'
import rs18 from '../../assets/shells custom/rs18.png'

import ls19 from '../../assets/shells custom/ls19.png'
import rs19 from '../../assets/shells custom/rs19.png'



import ls20 from '../../assets/shells custom/ls20.png'
import rs20 from '../../assets/shells custom/rs20.png'

import ls21 from '../../assets/shells custom/ls21.png'
import rs21 from '../../assets/shells custom/rs21.png'

import ls22 from '../../assets/shells custom/ls22.png'
import rs22 from '../../assets/shells custom/rs22.png'

import ls23 from '../../assets/shells custom/ls23.png'
import rs23 from '../../assets/shells custom/rs23.png'

import ls24 from '../../assets/shells custom/ls24.png'
import rs24 from '../../assets/shells custom/rs24.png'

import ls25 from '../../assets/shells custom/ls25.png'
import rs25 from '../../assets/shells custom/rs25.png'

import ls26 from '../../assets/shells custom/ls26.png'
import rs26 from '../../assets/shells custom/rs26.png'

import ls27 from '../../assets/shells custom/ls27.png'
import rs27 from '../../assets/shells custom/rs27.png'

import ls28 from '../../assets/shells custom/ls28.png'
import rs28 from '../../assets/shells custom/rs28.png'

// Custom shell images

import ls01 from '../../assets/shells standard/ls01.png'
import rs01 from '../../assets/shells standard/rs01.png'

import ls02 from '../../assets/shells standard/ls02.png'
import rs02 from '../../assets/shells standard/rs02.png'

import ls03 from '../../assets/shells standard/ls03.png'
import rs03 from '../../assets/shells standard/rs03.png'

import ls04 from '../../assets/shells standard/ls04.png'
import rs04 from '../../assets/shells standard/rs04.png'

import ls05 from '../../assets/shells standard/ls05.png'
import rs05 from '../../assets/shells standard/rs05.png'

import ls06 from '../../assets/shells standard/ls06.png'
import rs06 from '../../assets/shells standard/rs06.png'

import ls07 from '../../assets/shells standard/ls07.png'
import rs07 from '../../assets/shells standard/rs07.png'

import ls08 from '../../assets/shells standard/ls08.png'
import rs08 from '../../assets/shells standard/rs08.png'

import ls09 from '../../assets/shells standard/ls09.png'
import rs09 from '../../assets/shells standard/rs09.png'

import ls10 from '../../assets/shells standard/ls10.png'
import rs10 from '../../assets/shells standard/rs10.png'

import ls11 from '../../assets/shells standard/ls11.png'
import rs11 from '../../assets/shells standard/rs11.png'

import ls12 from '../../assets/shells standard/ls12.png'
import rs12 from '../../assets/shells standard/rs12.png'

import ls13 from '../../assets/shells standard/ls13.png'
import rs13 from '../../assets/shells standard/rs13.png'

import ls14 from '../../assets/shells standard/ls14.png'
import rs14 from '../../assets/shells standard/rs14.png'

import ls15 from '../../assets/shells standard/ls15.png'
import rs15 from '../../assets/shells standard/rs15.png'

import ls16 from '../../assets/shells standard/ls16.png'
import rs16 from '../../assets/shells standard/rs16.png'

import ls29 from '../../assets/shells standard/ls29.png'
import rs29 from '../../assets/shells standard/rs29.png'

import ls30 from '../../assets/shells standard/ls30.png'
import rs30 from '../../assets/shells standard/rs30.png'

import ls31 from '../../assets/shells standard/ls31.png'
import rs31 from '../../assets/shells standard/rs31.png'

import ls32 from '../../assets/shells standard/ls32.png'
import rs32 from '../../assets/shells standard/rs32.png'

import ls33 from '../../assets/shells standard/ls33.png'
import rs33 from '../../assets/shells standard/rs33.png'

import ls34 from '../../assets/shells standard/ls34.png'
import rs34 from '../../assets/shells standard/rs34.png'

import ls35 from '../../assets/shells standard/ls35.png'
import rs35 from '../../assets/shells standard/rs35.png'

import ls36 from '../../assets/shells standard/ls36.png'
import rs36 from '../../assets/shells standard/rs36.png'

import ls37 from '../../assets/shells standard/ls37.png'
import rs37 from '../../assets/shells standard/rs37.png'

import ls38 from '../../assets/shells standard/ls38.png'
import rs38 from '../../assets/shells standard/rs38.png'

import ls39 from '../../assets/shells standard/ls39.png'
import rs39 from '../../assets/shells standard/rs39.png'

import ls40 from '../../assets/shells standard/ls40.png'
import rs40 from '../../assets/shells standard/rs40.png'

import ls41 from '../../assets/shells standard/ls41.png'
import rs41 from '../../assets/shells standard/rs41.png'

import ls42 from '../../assets/shells standard/ls42.png'
import rs42 from '../../assets/shells standard/rs42.png'


import Logo from '../../assets/image/logo.png'
import Logo2 from '../../assets/image/newStealthLogo.png'
import Logo22 from '../../assets/image/newStealthLogo.png'

import CustomHeader from './CustomHeader.js';
import './CustomHeader.css';


import Review from "./checkout/Review"

import {Link} from 'react-router-dom';

class CustomOrder extends Component {
    constructor(props) {
        super(props);
        this.state={
            left: lf15, 
            right: rf15,
            leftColor: "FP1 Redwood",
            rightColor: "FP1 Redwood",

            leftShellColor: "SC1",
            rightShellColor: "SC1",
            // initialText: '',
            initialName: "",
            initialValue: "",

            leftShell : ls17,
            rightShell : rs17,
            
            actionChecker:"block",
            casingChecker:"none",
            uploadedCasingText:"",
            leftCaseColor:"#ebedea",
            rightCaseColor:"#ebedea",

            leftUploadedImage:"",
            rightUploadedImage:"",
            defaultLogoLeft:Logo22,
            defaultLogoRight:Logo22,

            cType:"C2",
            config: "1* Hybrid (Low/Mid) 1* Balanced Armeture (High)",
            driver: "2",
            typeofdriver: "Hybrid",
            crossover: "Nil",
            isolation: "-32dB",
            bore: "2",
            frequencyresponse: "20Hz-0kHz",
            sensitivity: "103dB SOK @ 1mW",
            impedence: "13 Ohms @1kHz",
            thd: "<=% @1kHz",
            warranty: "Period: 1 year",
            refit: "Policy: 30 Days",
            pricec2: 399,
            price: 499,
            priceLeft: 100,
            priceRight: 100,
            priceBoth: 200,
            total: 0,
            both: 0,
            leftShellPrice: 50,
            rightShellPrice: 50,
            bothShellPrice: 100,
            rightUploadedText:"",
            leftUploadedText:"",
            defaultLeftLogoT : "translate(160px,215px)",
            defaultRightLogoT : "translate(-195px,40px)",
            leftImageVisibility:"none",
            rightImageVisibility:"none",

            defaultLogoLeftVisibility:"block",
            defaultLogoRightVisibility:"block",
            reviewC:false
           // ctype: "vivek"
            
            
        }
        

        // standard faceplates
        this.handlerWhiteSolid = this.handlerWhiteSolid.bind(this);
        this.handlerRed = this.handlerRed.bind(this);
        this.handlerBlack = this.handlerBlack.bind(this);
        this.handlerLightYellow = this.handlerLightYellow.bind(this);
        this.handlerOrange = this.handlerOrange.bind(this);
        this.handlerBlue = this.handlerBlue.bind(this);
        this.handlerSkyBlue = this.handlerSkyBlue.bind(this);
        this.handlerViolet = this.handlerViolet.bind(this);
        this.handlerYellow = this.handlerYellow.bind(this);
        this.handlerWhite = this.handlerWhite.bind(this);

        this.selectedLeftButton = this.selectedLeftButton.bind(this);
        this.selectedBothButton = this.selectedBothButton.bind(this);
        this.selectedRightButton = this.selectedRightButton.bind(this);

        // this.handlerInitialValue = this.handlerInitialValue.bind(this);
        
        // premium faceplates
        this.handlerPremium1 = this.handlerPremium1.bind(this);
        this.handlerPremium2 = this.handlerPremium2.bind(this);
        this.handlerPremium3 = this.handlerPremium3.bind(this);
        this.handlerPremium4 = this.handlerPremium4.bind(this);
        this.handlerPremium5 = this.handlerPremium5.bind(this);

        // custom faceplates
        this.handlerCustom1 = this.handlerCustom1.bind(this);
        this.handlerCustom2 = this.handlerCustom2.bind(this);
        this.handlerCustom3 = this.handlerCustom3.bind(this);
        this.handlerCustom4 = this.handlerCustom4.bind(this);
        this.handlerCustom5 = this.handlerCustom5.bind(this);

        this.handlerCustom6 = this.handlerCustom6.bind(this);
        this.handlerCustom7 = this.handlerCustom7.bind(this);
        this.handlerCustom8 = this.handlerCustom8.bind(this);
        this.handlerCustom9 = this.handlerCustom9.bind(this);
        this.handlerCustom10 = this.handlerCustom10.bind(this);

        this.handlerCustom11 = this.handlerCustom11.bind(this);
        this.handlerCustom12 = this.handlerCustom12.bind(this);
        this.handlerCustom13 = this.handlerCustom13.bind(this);
        this.handlerCustom14 = this.handlerCustom14.bind(this);
        this.handlerCustom15 = this.handlerCustom15.bind(this);

        this.handlerCustom16 = this.handlerCustom16.bind(this);
        this.handlerCustom17 = this.handlerCustom17.bind(this);
        this.handlerCustom18 = this.handlerCustom18.bind(this);
        this.handlerCustom19 = this.handlerCustom19.bind(this);
        this.handlerCustom20 = this.handlerCustom20.bind(this);

        this.handlerCustom21 = this.handlerCustom21.bind(this);
        this.handlerCustom22 = this.handlerCustom22.bind(this);
        this.handlerCustom23 = this.handlerCustom23.bind(this);
        this.handlerCustom24 = this.handlerCustom24.bind(this);
        this.handlerCustom25 = this.handlerCustom25.bind(this);

        // Standard Shell
        this.handlerStandardShell1 = this.handlerStandardShell1.bind(this);
        this.handlerStandardShell2 = this.handlerStandardShell2.bind(this);
        this.handlerStandardShell3 = this.handlerStandardShell3.bind(this);
        this.handlerStandardShell4 = this.handlerStandardShell4.bind(this);
        this.handlerStandardShell5 = this.handlerStandardShell5.bind(this);
        this.handlerStandardShell6 = this.handlerStandardShell6.bind(this);

        this.handlerStandardShell7 = this.handlerStandardShell7.bind(this);
        this.handlerStandardShell8 = this.handlerStandardShell8.bind(this);
        this.handlerStandardShell9 = this.handlerStandardShell9.bind(this);
        this.handlerStandardShell10 = this.handlerStandardShell10.bind(this);
        this.handlerStandardShell11 = this.handlerStandardShell11.bind(this);
        this.handlerStandardShell12 = this.handlerStandardShell12.bind(this);

        // Custom Shell
        this.handlerCustomShell1 = this.handlerCustomShell1.bind(this);
        this.handlerCustomShell2 = this.handlerCustomShell2.bind(this);
        this.handlerCustomShell3 = this.handlerCustomShell3.bind(this);
        this.handlerCustomShell4 = this.handlerCustomShell4.bind(this);
        this.handlerCustomShell5 = this.handlerCustomShell5.bind(this);
        this.handlerCustomShell6 = this.handlerCustomShell6.bind(this);
        this.handlerCustomShell7 = this.handlerCustomShell7.bind(this);
        this.handlerCustomShell8 = this.handlerCustomShell8.bind(this);
        this.handlerCustomShell9 = this.handlerCustomShell9.bind(this);
        this.handlerCustomShell10 = this.handlerCustomShell10.bind(this);

        this.handlerCustomShell11 = this.handlerCustomShell11.bind(this);
        this.handlerCustomShell12 = this.handlerCustomShell12.bind(this);
        this.handlerCustomShell13 = this.handlerCustomShell13.bind(this);
        this.handlerCustomShell14 = this.handlerCustomShell14.bind(this);
        this.handlerCustomShell15 = this.handlerCustomShell15.bind(this);
        this.handlerCustomShell16 = this.handlerCustomShell16.bind(this);
        this.handlerCustomShell17 = this.handlerCustomShell17.bind(this);
        this.handlerCustomShell18 = this.handlerCustomShell18.bind(this);
        this.handlerCustomShell19 = this.handlerCustomShell19.bind(this);
        this.handlerCustomShell20 = this.handlerCustomShell20.bind(this);

        this.handlerCustomShell21 = this.handlerCustomShell21.bind(this);
        this.handlerCustomShell22 = this.handlerCustomShell22.bind(this);
        this.handlerCustomShell23 = this.handlerCustomShell23.bind(this);
        this.handlerCustomShell24 = this.handlerCustomShell24.bind(this);
        this.handlerCustomShell25 = this.handlerCustomShell25.bind(this);
        this.handlerCustomShell26 = this.handlerCustomShell26.bind(this);
        this.handlerCustomShell27 = this.handlerCustomShell27.bind(this);
        this.handlerCustomShell28 = this.handlerCustomShell28.bind(this);
        this.handlerCustomShell29 = this.handlerCustomShell29.bind(this);
        this.handlerCustomShell30 = this.handlerCustomShell30.bind(this);

        this.uploaderLeftImage = this.uploaderLeftImage.bind(this);
        this.uploaderRightImage = this.uploaderRightImage.bind(this);
        // this.uploaderLeftText = this.uploaderLeftText.bind(this);
        this.uploaderRightText = this.uploaderRightText.bind(this);
        //this.uploadRightLogo = this.uploadRightLogo.bind(this);
        this.uploadRightLogo2 = this.uploadRightLogo2.bind(this);
        //this is to define method for clicking action and cas tab
        this.actionTabClicker = this.actionTabClicker.bind(this);
        this.casingTabClicker = this.casingTabClicker.bind(this);
        this.uploaderCasingText = this.uploaderCasingText.bind(this);

        this.RedColorTxt = this.RedColorTxt.bind(this);
        this.BlackColorTxt = this.BlackColorTxt.bind(this);
        this.LightYellowColorTxt = this.LightYellowColorTxt.bind(this);
        this.BlueColorTxt = this.BlueColorTxt.bind(this);
        this.SkyBlueColorTxt = this.SkyBlueColorTxt.bind(this);
        this.VioletColorTxt = this.VioletColorTxt.bind(this);
        this.whiteColorTxt = this.whiteColorTxt.bind(this);
        this.YellowColor = this.YellowColor.bind(this);

        this.c2Click = this.c2Click.bind(this);
        this.c4Click = this.c4Click.bind(this);
        this.c9Click = this.c9Click.bind(this);
        this.hideLogoOnclick = this.hideLogoOnclick.bind(this);

        this.nextReview = this.nextReview.bind(this);
        this.nextReview1 = this.nextReview1.bind(this);


    }
    nextReview1(){
        //alert("s")
        //return <Review/>;
        this.setState({reviewC:true})
    }
    nextReview(){
        // alert(Ctype)
       
        this.setState({

        leftcolor: "Dataa",
        // leftolor  : this.state.LeftColor,
        // rightolor   : this.state.rightColor,
      })
      console.log("Hello" + this.state.leftcolor)
      //alert("Set Value for Review" + this.state.leftcolor)
      }
    //uploadrightText
    // premium faceplate
    handlerPremium1() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf15,
                leftColor: "FP1 Redwood",                
                priceLeft: 100,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf15,
                right: rf15,                
                leftColor: "FP1 Redwood",
                rightColor: "FP1 Redwood",
                priceBoth: 200
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf15,
                rightColor: "FP1 Redwood",
                priceRight: 100
            });
        }
    }

    handlerPremium2() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf16,
                leftColor: "FP2 Candian Oak",
                priceLeft: 100,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf16,
                right: rf16,
                leftColor: "FP2 Candian Oak",
                rightColor: "FP2 Candian Oak",
                priceBoth: 200,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf16,
                rightColor: "FP2 Candian Oak",
                priceRight: 100
            });
        }
    }

    handlerPremium3() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf17,
                leftColor: "FP3 Teak",
                priceLeft: 100,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf17,
                right: rf17,
                leftColor: "FP3 Teak",
                rightColor: "FP3 Teak",
                priceBoth: 200
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf17,
                rightColor: "FP3 Teak",
                priceRight: 100,
            });
        }
    }

    handlerPremium4() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf28,
                leftColor: "FP5 Cherry Wood",
                priceLeft: 100
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf28,
                right: rf28,
                leftColor: "FP5 Cherry Wood",
                rightColor: "FP5 Cherry Wood",
                priceBoth: 200
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf28,
                rightColor: "FP5 Cherry Wood",
                priceRight: 100
            });
        }
    }

    handlerPremium5() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf29,
                leftColor: "FP4 Latte",
                priceLeft: 100
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf29,
                right: rf29,
                leftColor: "FP4 Latte",
                rightColor: "FP4 Latte",
                priceBoth: 200
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf29,
                rightColor: "FP4 Latte",
                priceRight: 100
            });
        }
    }


    // custom faceplate

    handlerCustom1() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf11,
                leftColor: "FC6",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf11,
                right: rf11,
                leftColor: "FC6",
                rightColor: "FC6",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf11,
                rightColor: "FC6",
                priceRight: 50
            });
        }
    }

    handlerCustom2() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf12,
                leftColor: "FC21",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf12,
                right: rf12,
                leftColor: "FC21",
                rightColor: "FC21",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf12,
                rightColor: "FC19",
                priceRight: 50
            });
        }
    }

    handlerCustom3() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf13,
                leftColor: "FC19",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf13,
                right: rf13,
                leftColor: "FC19",
                rightColor: "FC19",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf13,
                rightColor: "FC19",
                priceRight: 50
            });
        }
    }

    handlerCustom4() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf14,
                leftColor: "FC20",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf14,
                right: rf14,
                leftColor: "FC20",
                rightColor: "FC20",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf14,
                rightColor: "FC20",
                priceRight: 50
            });
        }
    }

    handlerCustom5() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf18,
                leftColor: "FC25",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf18,
                right: rf18,
                leftColor: "FC25",
                rightColor: "FC25",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf18,
                rightColor:  "FC25",
                priceRight: 50
            });
        }
    }

    handlerCustom6() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf19,
                leftColor: "FC24",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf19,
                right: rf19,
                leftColor: "FC24",
                rightColor: "FC24",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf19,
                rightColor: "FC24",
                priceRight: 50
            });
        }
    }

    handlerCustom7() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf20,
                leftColor: "FC22",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf20,
                right: rf20,
                leftColor: "FC22",
                rightColor: "FC22",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf20,
                rightColor: "FC22",
                priceRight: 50
            });
        }
    }

    handlerCustom8() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf21,
                leftColor: "FC23",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf21,
                right: rf21,
                leftColor: "FC23",
                rightColor: "FC23",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf21,
                rightColor: "FC23",
                priceRight: 50
            });
        }
    }

    handlerCustom9() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf22,
                leftColor: "FC1",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf22,
                right: rf22,
                leftColor: "FC1",
                rightColor: "FC1",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf22,
                rightColor: "FC1",
                priceRight: 50
            });
        }
    }

    handlerCustom10() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf23,
                leftColor: "FC3",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf23,
                right: rf23,
                leftColor: "FC3",
                rightColor: "FC3",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf23,
                rightColor: "FC3",
                priceRight: 50
            });
        }
    }

    handlerCustom11() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf24,
                leftColor: "FC5",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf24,
                right: rf24,
                leftColor: "FC5",
                rightColor: "FC5",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf24,
                rightColor: "FC5",
                priceRight: 50
            });
        }
    }

    handlerCustom12() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf25,
                leftColor: "FC7",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf25,
                right: rf25,
                leftColor: "FC7",
                rightColor: "FC7",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf25,
                rightColor: "FC7",
                priceRight: 50
            });
        }
    }

    handlerCustom13() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf26,
                leftColor: "FC4",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf26,
                right: rf26,
                leftColor: "FC4",
                rightColor: "FC4",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf26,
                rightColor: "FC4",
                priceRight: 50
            });
        }
    }

    handlerCustom14() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf27,
                leftColor: "FC2",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf27,
                right: rf27,
                leftColor: "FC2",
                rightColor: "FC2",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf27,
                rightColor: "FC2",
                priceRight: 50
            });
        }
    }

    handlerCustom15() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf30,
                leftColor: "FC16",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf30,
                right: rf30,
                leftColor: "FC16",
                rightColor: "FC16",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf30,
                rightColor: "FC16",
                priceRight: 50
            });
        }
    }

    handlerCustom16() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf31,
                leftColor: "FC17",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf31,
                right: rf31,
                leftColor: "FC17",
                rightColor: "FC17",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf31,
                rightColor: "FC17",
                priceRight: 50
            });
        }
    }

    handlerCustom17() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf32,
                leftColor: "FC15",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf32,
                right: rf32,
                leftColor: "FC15",
                rightColor: "FC15",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf32,
                rightColor: "FC15",
                priceRight: 50
            });
        }
    }

    handlerCustom18() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf33,
                leftColor: "FC9",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf33,
                right: rf33,
                leftColor: "FC9",
                rightColor: "FC9",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf33,
                rightColor: "FC9",
                priceRight: 50
            });
        }
    }


    handlerCustom19() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf34,
                leftColor: "FC12",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf34,
                right: rf34,
                leftColor: "FC12",
                rightColor: "FC12",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf34,
                rightColor: "FC12",
                priceRight: 50
            });
        }
    }

    handlerCustom20() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf35,
                leftColor: "FC11",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf35,
                right: rf35,
                leftColor: "FC11",
                rightColor: "FC11",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf35,
                rightColor: "FC11",
                priceRight: 50
            });
        }
    }

    handlerCustom21() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf36,
                leftColor: "FC13",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf36,
                right: rf36,
                leftColor: "FC13",
                rightColor: "FC13",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf36,
                rightColor: "FC13",
                priceRight: 50
            });
        }
    }

    handlerCustom22() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf37,
                leftColor: "FC10",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf37,
                right: rf37,
                leftColor: "",
                rightColor: "FC10",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf37,
                rightColor: "FC10",
                priceRight: 50
            });
        }
    }

    handlerCustom23() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf38,
                leftColor: "FC8",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf38,
                right: rf38,
                leftColor: "FC8",
                rightColor: "FC8",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf38,
                rightColor: "FC8",
                priceRight: 50
            });
        }
    }
    handlerCustom24() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf39,
                leftColor: "FC14",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf39,
                right: rf39,
                leftColor: "FC14",
                rightColor: "FC14",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf39,
                rightColor: "FC14",
                priceRight: 50
            });
        }
    }

    handlerCustom25() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf40,
                leftColor: "FC18",
                priceLeft: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf40,
                right: rf40,
                leftColor: "FC18",
                rightColor: "FC18",
                priceBoth: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf40,
                rightColor: "FC18",
                priceRight: 50
            });
        }
    }

    // standard faceplate

    handlerWhiteSolid() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf05,
                leftColor: "FS3",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf05,
                right: rf05,
                leftColor: "FS3",
                rightColor: "FS3",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf05,
                rightColor: "FS3",
                priceRight: 0
            });
        }
    }

    handlerRed() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf02,
                leftColor: "FS6",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf02,
                right: rf02,
                leftColor: "FS6",
                rightColor: "FS6",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf02,
                rightColor: "FS6",
                priceRight: 0
            });
        }
     }

    handlerBlack() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf09,
                leftColor: "FS2",
                priceLeft: 0

            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf09,
                right: rf09,
                leftColor: "FS2",
                rightColor: "FS2",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf09,
                rightColor: "FS2",
                priceRight: 0
            });
        }
    }

     handlerLightYellow() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf06,
                leftColor: "FS9",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf06,
                right: rf06,
                leftColor: "FS9",
                rightColor: "FS9",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf06,
                rightColor: "FS9",
                priceRight: 0
            });
        }
     }

     handlerOrange() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf07,
                leftColor: "FS1",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf07,
                right: rf07,
                leftColor: "FS1",
                rightColor: "FS1",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf07,
                rightColor: "FS1",
                priceRight: 0
            });
        }
     }
     handlerBlue() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf01,
                leftColor: "FS5",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf01,
                right: rf01,
                leftColor: "FS5",
                rightColor: "FS5",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf01,
                rightColor: "FS5",
                priceRight: 0
            });
        }
     }

     handlerSkyBlue() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf03,
                leftColor: "FS10",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf03,
                right: rf03,
                leftColor: "FS10",
                rightColor: "FS10",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf03,
                rightColor: "FS10",
                priceRight: 0
            });
        }
     }

     handlerViolet() {
        
        if(this.state.checker == "left"){
            this.setState({
                left: lf04,
                leftColor: "FS7",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf04,
                right: rf04,
                leftColor: "FS7",
                rightColor: "FS7",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf04,
                rightColor: "FS7",
                priceRight: 0
            });
        }
     }

     handlerYellow() {
        
        if(this.state.checker == "left"){
            this.setState({
                left: lf08,
                leftColor: "FS4",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf08,
                right: rf08,
                leftColor: "FS4",
                rightColor: "FS4",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf08,
                rightColor: "FS4",
                priceRight: 0
            });
        }
     }

     handlerWhite() {
        
        if(this.state.checker == "left"){
            this.setState({
                left: lf10,
                leftColor: "FS8",
                priceLeft: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf10,
                right: rf10,
                leftColor: "FS8",
                rightColor: "FS8",
                priceBoth: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf10,
                rightColor: "FS8",
                priceRight: 0
            });
        }
     }

     // custom shell 

    handlerStandardShell1() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls17,
                leftShellColor: "SC1",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls17,
                rightShell: rs17,
                leftShellColor: "SC1",
                rightShellColor: "SC1",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs17,
                rightShellColor: "SC1",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell2() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls18,
                leftShellColor: "SC7",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls18,
                rightShell: rs18,
                leftShellColor: "SC7",
                rightShellColor: "SC7",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs18,
                rightShellColor: "SC7",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell3() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls19,
                leftShellColor: "SC12",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls19,
                rightShell: rs19,
                leftShellColor: "SC12",
                rightShellColor: "SC12",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs19,
                rightShellColor: "SC12",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell4() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls20,
                leftShellColor: "SC2",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls20,
                rightShell: rs20,
                leftShellColor: "SC2",
                rightShellColor: "SC2",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs20,
                rightShellColor: "SC2",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell5() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls21,
                leftShellColor: "SC3",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls21,
                rightShell: rs21,
                leftShellColor: "SC3",
                rightShellColor: "SC3",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs21,
                rightShellColor: "SC3",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell6() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls22,
                leftShellColor: "SC6",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls22,
                rightShell: rs22,
                leftShellColor: "SC6",
                rightShellColor: "SC6",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs22,
                rightShellColor: "SC6",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell7() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls23,
                leftShellColor: "SC5",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls23,
                rightShell: rs23,
                leftShellColor: "SC5",
                rightShellColor: "SC5",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs23,
                rightShellColor: "SC5",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell8() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls24,
                leftShellColor: "SC10",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls24,
                rightShell: rs24,
                leftShellColor: "SC10",
                rightShellColor: "SC10",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs24,
                rightShellColor: "SC10",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell9() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls25,
                leftShellColor: "SC9",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls25,
                rightShell: rs25,
                leftShellColor: "SC9",
                rightShellColor: "SC9",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs25,
                rightShellColor: "SC9",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell10() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls26,
                leftShellColor: "SC12",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls26,
                rightShell: rs26,
                leftShellColor: "SC12",
                rightShellColor: "SC12",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs26,
                rightShellColor: "SC12",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell11() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls27,
                leftShellColor: "SC4",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls27,
                rightShell: rs27,
                leftShellColor: "SC4",
                rightShellColor: "SC4",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs27,
                rightShellColor: "SC4",
                rightShellPrice: 50
            });
        }
    }

    handlerStandardShell12() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls28,
                leftShellColor: "SC8",
                leftShellPrice: 50
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls28,
                rightShell: rs28,
                leftShellColor: "SC8",
                rightShellColor: "SC8",
                bothShellPrice: 100
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs28,
                rightShellColor: "SC8",
                rightShellPrice: 50
            });
        }
    }

    // custom shell
    handlerCustomShell1(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls01,
                leftShellColor: "SS22",
                leftShellPrice: 0
                
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls01,
                rightShell: rs01,
                leftShellColor: "SS22",
                rightShellColor: "SS22",
                bothShellPrice: 0
                
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs01,
                rightShellColor: "SS22",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell2(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls02,
                leftShellColor: "SS1",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls02,
                rightShell: rs02,
                leftShellColor: "SS1",
                rightShellColor: "SS1",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs02,
                rightShellColor: "SS1",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell3(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls03,
                leftShellColor: "SS5",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls03,
                rightShell: rs03,
                leftShellColor: "SS5",
                rightShellColor: "SS5",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs03,
                rightShellColor: "SS5",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell4(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls04,
                leftShellColor: "SS8",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls04,
                rightShell: rs04,
                leftShellColor: "SS8",
                rightShellColor: "SS8",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs04,
                rightShellColor: "SS8",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell5(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls05,
                leftShellColor: "SS13",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls05,
                rightShell: rs05,
                leftShellColor: "SS13",
                rightShellColor: "SS13",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs05,
                rightShellColor: "SS13",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell6(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls06,
                leftShellColor: "SS11",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls06,
                rightShell: rs06,
                leftShellColor: "SS11",
                rightShellColor: "SS11",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs06,
                rightShellColor: "SS11",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell7(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls07,
                leftShellColor: "SS12",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls07,
                rightShell: rs07,
                leftShellColor: "SS12",
                rightShellColor: "SS12",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs07,
                rightShellColor: "SS12",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell8(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls08,
                leftShellColor: "SS17",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls08,
                rightShell: rs08,
                leftShellColor: "SS17",
                rightShellColor: "SS17",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs08,
                rightShellColor: "SS17",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell9(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls09,
                leftShellColor: "SS7",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls09,
                rightShell: rs09,
                leftShellColor: "SS7",
                rightShellColor: "SS7",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs09,
                rightShellColor: "SS7",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell10(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls10,
                leftShellColor: "SS18",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls10,
                rightShell: rs10,
                leftShellColor: "SS18",
                rightShellColor: "SS18",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs10,
                rightShellColor: "SS18",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell11(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls11,
                leftShellColor: "SS19",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls11,
                rightShell: rs11,
                leftShellColor: "SS19",
                rightShellColor: "SS19",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs11,
                rightShellColor: "SS19",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell12(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls12,
                leftShellColor: "SS22",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls12,
                rightShell: rs12,
                leftShellColor: "SS22",
                rightShellColor: "SS22",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs12,
                rightShellColor: "SS22",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell13(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls13,
                leftShellColor: "SS16",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls13,
                rightShell: rs13,
                leftShellColor: "SS16",
                rightShellColor: "SS16",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs13,
                rightShellColor: "SS16",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell14(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls14,
                leftShellColor: "SS20",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls14,
                rightShell: rs14,
                leftShellColor: "SS20",
                rightShellColor: "",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs14,
                rightShellColor: "SS20",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell15(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls15,
                leftShellColor: "SS2",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls15,
                rightShell: rs15,
                leftShellColor: "SS2",
                rightShellColor: "SS2",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs15,
                rightShellColor: "SS2",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell16(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls16,
                leftShellColor: "SS3",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls16,
                rightShell: rs16,
                leftShellColor: "SS3",
                rightShellColor: "SS3",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs16,
                rightShellColor: "SS3",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell17(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls29,
                leftShellColor: "SS23",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls29,
                rightShell: rs29,
                leftShellColor: "SS23",
                rightShellColor: "SS23",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs29,
                rightShellColor: "SS23",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell18(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls30,
                leftShellColor: "SS4",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls30,
                rightShell: rs30,
                leftShellColor: "SS4",
                rightShellColor: "SS4",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs30,
                rightShellColor: "SS4",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell19(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls31,
                leftShellColor: "SS16",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls31,
                rightShell: rs31,
                leftShellColor: "SS16",
                rightShellColor: "SS16",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs31,
                rightShellColor: "SS16",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell20(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls32,
                leftShellColor: "SS28",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls32,
                rightShell: rs32,
                leftShellColor: "SS28",
                rightShellColor: "SS28",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs32,
                rightShellColor: "SS28",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell21(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls33,
                leftShellColor: "SS1",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls33,
                rightShell: rs33,
                leftShellColor: "SS1",
                rightShellColor: "SS1",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs33,
                rightShellColor: "SS1",
                rightShellPrice: 0
            });
        }
    }    

    handlerCustomShell22(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls34,
                leftShellColor: "SS26",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls34,
                rightShell: rs34,
                leftShellColor: "SS26",
                rightShellColor: "SS26",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs34,
                rightShellColor: "SS26",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell23(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls35,
                leftShellColor: "SS24",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls35,
                rightShell: rs35,
                leftShellColor: "SS24",
                rightShellColor: "SS24",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs35,
                rightShellColor: "SS24",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell24(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls36,
                leftShellColor: "SS27",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls36,
                rightShell: rs36,
                leftShellColor: "SS27",
                rightShellColor: "SS27",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs36,
                rightShellColor: "SS27",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell25(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls37,
                leftShellColor: "SS29",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls37,
                rightShell: rs37,
                leftShellColor: "SS29",
                rightShellColor: "SS29",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs37,
                rightShellColor: "SS29",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell26(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls38,
                leftShellColor: "SS30",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls38,
                rightShell: rs38,
                leftShellColor: "SS30",
                rightShellColor: "SS30",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs38,
                rightShellColor: "SS30",
                rightShellPrice: 0,
            });
        }
    }

    handlerCustomShell27(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls39,
                leftShellColor: "SS22",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls39,
                rightShell: rs39,
                leftShellColor: "SS22",
                rightShellColor: "SS22",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs39,
                rightShellColor: "SS22",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell28(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls40,
                leftShellColor: "SS25",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls40,
                rightShell: rs40,
                leftShellColor: "SS25",
                rightShellColor: "SS25",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs40,
                rightShellColor: "SS25",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell29(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls41,
                leftShellColor: "SS21",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls41,
                rightShell: rs41,
                leftShellColor: "SS21",
                rightShellColor: "SS21",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs41,
                rightShellColor: "SS21",
                rightShellPrice: 0
            });
        }
    }

    handlerCustomShell30(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls42,
                leftShellColor: "SS5",
                leftShellPrice: 0
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls42,
                rightShell: rs42,
                leftShellColor: "SS5",
                rightShellColor: "SS5",
                bothShellPrice: 0
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs42,
                rightShellColor: "SS5",
                rightShellPrice: 0
            });
        }
    }



    // button selection

     selectedLeftButton(){
         $("#inputBox").val(this.state.leftUploadedText);
        this.setState({
            checker:"left",
            activeLeft: "active",
            activeBoth: "",
            activeRight: ""})
      }
      selectedBothButton(){
                  $("#inputBox").val("");

        this.setState({
            leftCaseColor:"#ebedea",
            rightCaseColor:"#ebedea",
            checker:"both",
            activeLeft: "",
            activeBoth: "active",
            activeRight: ""
        })
      }
      selectedRightButton(){
        $("#inputBox").val(this.state.rightUploadedText);  

        this.setState({
            
            checker:"right",
            activeLeft: "",
            activeBoth: "",
            activeRight: "active",})
        }
        
        // handlerInitialValue(data){
        //   this.setState({
        //     initialText : data
        //   })
        // }
//         <Review nextReview = {this.Review}
                   
//         CType={this.state.leftcolor}
//         LeftColor={this.state.leftColor}
//         RightColor={this.state.rightColor}
//         LeftShellColor={this.state.leftShellColor}
//         RightShellColor={this.state.rightShellColor}
//         // driver={this.state.driver}
//         // typeofdriver={this.state.typeofdriver}
//         // config={this.state.config}
//         // crossover={this.state.crossover}
//         // bore={this.state.bore}
//         // isolation={this.state.isolation}
//         // frequencyresponse={this.state.frequencyresponse}
//         // Sensitivity={this.state.Sensitivity}

// />      
        uploaderLeftImage(event){

            if (event.target.files && event.target.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                   console.log(e)
                    this.setState({
                        leftUploadedImage: e.target.result,
                        leftUploadedText:"",
                        leftImageVisibility:"inline-flex",
                        defaultLogoLeftVisibility:"none",
                        // leftUploadedText:"",
                        // defaultLogoLeft:"",
                        // uploadleftLogo2: "",

                        
                    });
                };
                console.log(event.target)
                reader.readAsDataURL(event.target.files[0]);
            }  
        }

        uploaderRightImage(event){

            if (event.target.files && event.target.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                   
                    this.setState({
                        rightUploadedImage: e.target.result,
                        rightUploadedText:"",
                        rightImageVisibility:"block",
                        defaultLogoRightVisibility:"none",
                        // defaultLogoright:"",
                        // uploadrightLogo2: "",
                       
                    });
                };
                reader.readAsDataURL(event.target.files[0]);
            }              
        }

        uploaderRightText(event) {
            console.log(event.target.value)
            if(this.state.checker =="left"){

                this.setState({
                    //leftUploadedImage:"",
                    leftImageVisibility:"none",
                    leftUploadedText: event.target.value,
                    defaultLogoLeftVisibility:"none",
                    //defaultLeftLogoT:"translate(140px,200px)",
                    // uploadleftLogo2:"",
                    // defaultRightLogoT:""
                    
                })

            }else if(this.state.checker =="right"){
                this.setState({
                    rightImageVisibility:"none",
                    rightUploadedText: event.target.value,
                    defaultLogoRightVisibility:"none",
                    // uploadrightLogo2:"",
                    // defaultRightLogoT:"",
                    
                })
                
            }else if(this.state.checker =="both"){
                this.setState({
                    rightImageVisibility:"none",
                    leftImageVisibility:"none",
                    // leftUploadedImage:"",
                    // rightUploadedImage:"",
                    
                    leftUploadedText: event.target.value,
                    rightUploadedText: event.target.value,

                    defaultLogoLeftVisibility:"none",
                    defaultLogoRightVisibility:"none",

                    // defaultLogoLeft:"",
                    // defaultLogoRight:"",

                    // uploadleftLogo2:"",
                    // uploadrightLogo2:"",

                    //defaultLeftLogoT:"translate(140px,200px)",
                    defaultRightLogoT:""
                })
                
            }
            
        }        

        uploaderCasingText(event) {
            
            this.setState({
                uploadedCasingText: event.target.value,
            }) 
        }

        // uploadRightLogo() {
        //     // alert(Logo)
        //     this.setState({uploadrightLogo: Logo})
        // }
        uploadRightLogo2() {
            
           if(this.state.checker =="left"){
            this.setState({
                leftUploadedText:"",
                defaultLogoLeftVisibility:"block",
                defaultLogoLeft:Logo22,
                leftImageVisibility:"none",
                
                //uploadleftLogo2: Logo2,
                })
           }if(this.state.checker =="right"){
            this.setState({
                rightUploadedText:"",
                defaultLogoRightVisibility:"block",
                defaultLogoright:Logo22,
                rightImageVisibility:"none",
                //uploadrightLogo2: Logo2,
                })
           }if(this.state.checker =="both"){
            this.setState({
                leftUploadedText:"",
                defaultLogoLeftVisibility:"block",
                defaultLogoLeft:Logo22,
                leftImageVisibility:"none",

                rightUploadedText:"",
                defaultLogoRightVisibility:"block",
                defaultLogoright:Logo22,
                rightImageVisibility:"none",

                //uploadleftLogo2: Logo2,
                //uploadrightLogo2: Logo2
            })
           }
            
        }

        // these methods are for clicking action and casing tab
        
        actionTabClicker() {
            
            this.setState({actionChecker: "block"})
            this.setState({casingChecker: "none"})

        }
        casingTabClicker() {
           
             this.setState({actionChecker: "none"})
             this.setState({casingChecker: "block"})
        }


        RedColorTxt() {
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#ca3432"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#ca3432"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#ca3432"})
                this.setState({rightCaseColor: "#ca3432"}) 
            }          
        }
        BlackColorTxt() { 
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#000000"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#000000"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#000000"})
                this.setState({rightCaseColor: "#000000"}) 
            }         
        }
        LightYellowColorTxt() {   
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#f2e9a4"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#f2e9a4"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#f2e9a4"})
                this.setState({rightCaseColor: "#f2e9a4"}) 
            }       
        }
        BlueColorTxt() {
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#2269d6"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#2269d6"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#2269d6"})
                this.setState({rightCaseColor: "#2269d6"}) 
            }       
        }
        SkyBlueColorTxt() { 
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#01bbec"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#01bbec"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#01bbec"})
                this.setState({rightCaseColor: "#01bbec"}) 
            }      
        }
        VioletColorTxt() {
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#9b508b"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#9b508b"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#9b508b"})
                this.setState({rightCaseColor: "#9b508b"}) 
            }      
        }
        whiteColorTxt() {    
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#ebedea"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#ebedea"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#ebedea"})
                this.setState({rightCaseColor: "#ebedea"}) 
            }      
        }
        YellowColor() {    
            if(this.state.checker ==="left"){
                this.setState({leftCaseColor: "#e3e64d"})
            }
            if(this.state.checker ==="right"){
                this.setState({rightCaseColor: "#e3e64d"})
                    }
            if(this.state.checker ==="both"){
                this.setState({leftCaseColor: "#e3e64d"})
                this.setState({rightCaseColor: "#e3e64d"}) 
            }   
        }
        c2Click() { 
            $("#c4Id,#c9Id").removeClass('active');  
            $("#c2Id").addClass('active'); 
            this.setState({cType: "C2", 
             config: "1* Hybrid (Low/Mid) 1* Balanced Armeture (High)",
             driver: "2",
             typeofdriver: "Hybrid",
             crossover: "Nil",
             isolation: "-32dB",
             bore: "2",
             frequencyresponse: "20Hz-0kHz",
             sensitivity: "103dB SOK @ 1mW",
             impedence: "16 Ohms @1kHz",
             thd: "<=% @1kHz",
             warranty: "Period: 1 year",
             price: 499
           
        })   
            }
            c4Click() { 
                $("#c2Id,#c9Id").removeClass('active'); 
                $("#c4Id").addClass('active');   
                this.setState({cType: "C4", 
                 config: "1* Balanced Armature (Low) 1* Balanced Armature (Mid) 1* Balanced Armeture (High) 1* Balanced Armature (S/High)",
                 driver: "4",
                 typeofdriver: "Balanced Armature",
                 crossover:"4 way",
                 isolation: "-32dB",
                 bore: "3",
                 frequencyresponse: "18Hz-23kHz",
                 sensitivity: "114dB SOK @ 1mW",
                 impedence: "13 Ohms @1kHz",
                 thd: "<=% @1kHz",
                 warranty: "Period: 1 year",
                 refit: "Policy: 30 Days",
                 price: 799,
                
                })   
                }
                c9Click() { 
                    $("#c2Id,#c4Id").removeClass('active');    
                    $("#c9Id").addClass('active');
                    this.setState({cType: "C9",
                     config: "1* dynamic (Low) 2* Balanced Armature (Mid) 2* Balanced Armeture (High) 4* Balanced Armature (S/High)",
                     driver: "9",
                     typeofdriver: "Hybrid",
                     crossover: "4 way",
                     isolation: "-32dB",
                     bore: "3",
                     frequencyresponse: "18Hz-40kHz",
                     sensitivity: "108dB SOK @ 1mW",
                     impedence: "16 Ohms @1kHz",
                     thd: "<=% @1kHz",
                     warranty: "Period: 1 year",
                     refit: "Policy: 30 Days",
                     price: 1499,
                }) 

            }


            hideLogoOnclick(e){
                var check = $("#logocheck").is(":checked");
                console.log(check)
                if(check == true){
               
                  
                this.setState({
                    defaultLogoLeftVisibility: "none",
                    defaultLogoRightVisibility: "none",
                    
            })
        }
        if(check == false){              
               
            this.setState({
                defaultLogoLeftVisibility: "block",
                defaultLogoRightVisibility: "block",
                
        })
    }  
                
}
          

    render() {
        if(this.state.reviewC == true){
            //alert("true")
            return <Review pricess={this.state.price}
                        typess={this.state.cType}
                        leftcolors={this.state.leftColor}
                        rightcolors={this.state.rightColor}
                        leftShellColors = {this.state.leftShellColor}
                        rightShellColors={this.state.rightShellColor}
                        drivers={this.state.driver}
                        typeofdrivers={this.state.typeofdriver}
                        configs={this.state.config}
                        crossovers={this.state.crossover}
                        isolations={this.state.isolation}
                        bores={this.state.bore}
                        frequencyresponses={this.state.frequencyresponse}
                        sensitivitys={this.state.sensitivity}
                        impedences={this.state.impedence}
                        thds={this.state.thd}
                        warrantys={this.state.warranty}
                        refits={this.state.refit}
                           
                    />;
        }
      
        if(this.state.checker == "both"){
           var total = (this.state.price)+(this.state.priceBoth)+(this.state.bothShellPrice)
          
       }else {
        var total = (this.state.priceLeft)+(this.state.priceRight)+(this.state.price)+ (this.state.leftShellPrice)+(this.state.rightShellPrice)
        //alert(this.state.price +  "else " + this.state.priceRight + " left" + this.state.priceLeft + "leftShell" + this.state.leftShellPrice + "RightShell" + this.state.rightShellPrice)
       }

       console.log('parent ' + this.state.initialName);
        
        return(
            <div>

            <div className="container-fluid">
                <div className="banner-section custom-builder">
                    <div className="banner-title">
                        <h1>Create Your Own Earpiece</h1>
                    </div>
                </div>

            </div>
            <div className="container">
            <div className="row">
            <CustomHeader
             c2TypeClick={this.c2Click}
             c4TypeClick={this.c4Click}
             c9TypeClick={this.c9Click}
             
            />
            </div>
                <br/><br/><br/>s
                <div className="row">
                    <div className="col-md-3">
                        <div className="item-customize"> 
                            <div>
                                <br/>

                                <FacePlate 
                                    handlewhiteSolid = {this.handlerWhiteSolid}
                                    handleRed = {this.handlerRed}
                                    handleBlack = {this.handlerBlack}
                                    handleLightYellow = {this.handlerLightYellow}
                                    handleOrange = {this.handlerOrange}
                                    handleBlue = {this.handlerBlue}
                                    handleSkyBlue = {this.handlerSkyBlue}
                                    handleViolet = {this.handlerViolet}
                                    handleYellow = {this.handlerYellow}
                                    handleWhite = {this.handlerWhite}

                                    handlePremium1 = {this.handlerPremium1}
                                    handlePremium2 = {this.handlerPremium2}
                                    handlePremium3 = {this.handlerPremium3}
                                    handlePremium4 = {this.handlerPremium4}
                                    handlePremium5 = {this.handlerPremium5}
                                    
                                    handleCustom1 = {this.handlerCustom1}
                                    handleCustom2 = {this.handlerCustom2}
                                    handleCustom3 = {this.handlerCustom3}
                                    handleCustom4 = {this.handlerCustom4}
                                    handleCustom5 = {this.handlerCustom5}
                                    handleCustom6 = {this.handlerCustom6}
                                    handleCustom7 = {this.handlerCustom7}
                                    handleCustom8 = {this.handlerCustom8}
                                    handleCustom9 = {this.handlerCustom9}
                                    handleCustom10 = {this.handlerCustom10}
                                    handleCustom11 = {this.handlerCustom11}
                                    handleCustom12 = {this.handlerCustom12}
                                    handleCustom13 = {this.handlerCustom13}
                                    handleCustom14 = {this.handlerCustom14}
                                    handleCustom15 = {this.handlerCustom15}
                                    handleCustom16 = {this.handlerCustom16}
                                    handleCustom17 = {this.handlerCustom17}
                                    handleCustom18 = {this.handlerCustom18}
                                    handleCustom19 = {this.handlerCustom19}
                                    handleCustom20 = {this.handlerCustom20}
                                    handleCustom21 = {this.handlerCustom21}
                                    handleCustom22 = {this.handlerCustom22}
                                    handleCustom23 = {this.handlerCustom23}
                                    handleCustom24 = {this.handlerCustom24}
                                    handleCustom25 = {this.handlerCustom25}

                                    standardShell1 = {this.handlerStandardShell1}
                                    standardShell2 = {this.handlerStandardShell2}
                                    standardShell3 = {this.handlerStandardShell3}
                                    standardShell4 = {this.handlerStandardShell4}
                                    standardShell5 = {this.handlerStandardShell5}
                                    standardShell6 = {this.handlerStandardShell6}
                                    standardShell7 = {this.handlerStandardShell7}
                                    standardShell8 = {this.handlerStandardShell8}
                                    standardShell9 = {this.handlerStandardShell9}
                                    standardShell10 = {this.handlerStandardShell10}
                                    standardShell11 = {this.handlerStandardShell11}
                                    standardShell12 = {this.handlerStandardShell12}

                                    handleCustomShell1 = {this.handlerCustomShell1}
                                    handleCustomShell2 = {this.handlerCustomShell2}
                                    handleCustomShell3 = {this.handlerCustomShell3}
                                    handleCustomShell4 = {this.handlerCustomShell4}
                                    handleCustomShell5 = {this.handlerCustomShell5}
                                    handleCustomShell6 = {this.handlerCustomShell6}
                                    handleCustomShell7 = {this.handlerCustomShell7}
                                    handleCustomShell8 = {this.handlerCustomShell8}
                                    handleCustomShell9 = {this.handlerCustomShell9}
                                    handleCustomShell10 = {this.handlerCustomShell10}
                                    handleCustomShell11 = {this.handlerCustomShell11}
                                    handleCustomShell12 = {this.handlerCustomShell12}
                                    handleCustomShell13 = {this.handlerCustomShell13}
                                    handleCustomShell14 = {this.handlerCustomShell14}
                                    handleCustomShell15 = {this.handlerCustomShell15}
                                    handleCustomShell16 = {this.handlerCustomShell16}
                                    handleCustomShell17 = {this.handlerCustomShell17}
                                    handleCustomShell18 = {this.handlerCustomShell18}
                                    handleCustomShell19 = {this.handlerCustomShell19}
                                    handleCustomShell20 = {this.handlerCustomShell20}
                                    handleCustomShell21 = {this.handlerCustomShell21}
                                    handleCustomShell22 = {this.handlerCustomShell22}
                                    handleCustomShell23 = {this.handlerCustomShell23}
                                    handleCustomShell24 = {this.handlerCustomShell24}
                                    handleCustomShell25 = {this.handlerCustomShell25}
                                    handleCustomShell26 = {this.handlerCustomShell26}
                                    handleCustomShell27 = {this.handlerCustomShell27}
                                    handleCustomShell28 = {this.handlerCustomShell28}
                                    handleCustomShell29 = {this.handlerCustomShell29}
                                    handleCustomShell30 = {this.handlerCustomShell30}

                                   // handleInitialValue={this.handlerInitialValue} 
                                     />
                                
                            </div>
                        </div>
                    </div>
                     
                    <section className="mobile-hide">
                        <div className="col-md-6">
                            <div className="row">            
                                <div className="product-preview" style={{height: '400px', display:this.state.actionChecker}}>




                                <img className="earphone_wire" src={require('../../assets/image/SS_U9_side.png')}/>

    <div style={{display: "block"}}>
    <img className="responsive mainImg front-faceplate-left" id="adel-mask-preload-left"  src={this.state.left} />

    <img className="responsive shell-left" id="adel-mask-preload-left"  src={this.state.leftShell} />


            <div class="leftEarpieceCustomisation" style={{float: "left", width: "max-content"}}>
            
            

                                 <img className="responsive logoooo st-logo-left" style={{display: this.state.defaultLogoLeftVisibility,transform:this.state.defaultLeftLogoT}} id="adel-mask-preload-left"  src={this.state.defaultLogoLeft}/>

                                 <div id="wrapper-left">
                                    <div id="draggable-left">
                                        <img className="responsive ui-widget-content" style={{ display:this.state.leftImageVisibility, width: "auto" }}  src={this.state.leftUploadedImage}/>
                                    </div>
                                </div>

                                 <input id="leftUploadedTextID" className="custom-text custom-text-box-left" style={{color: this.state.leftCaseColor}} value={this.state.leftUploadedText} readOnly/>
                                 </div>
                                 

            </div>
           

<div style={{ marginRight: "76px"}}>
           
           <div style={{position: "absolute", transform: "translatex(305px)"}}>
           <img className="responsive front-faceplate-right" src={this.state.right}/>
                              
                              <img className="responsive shell-right" id="adel-mask-preload-left"  src={this.state.rightShell}/>
                              </div>

            <div class="rightEarpieceCustomisation" style={{float: "none", width: "max-content"}}>
            
            


                               
                               <img className="responsive st-logo-right" style={{ display: this.state.defaultLogoRightVisibility}}  src={this.state.defaultLogoRight}/>
                              
                              <div id="wrapper-right">
                                    <div id="draggable-right">
                                        <img className="responsive ui-widget-content" style={{ display:this.state.rightImageVisibility, width: "auto" }}  src={this.state.rightUploadedImage}/>
                                    </div>
                              </div>
                              
                             
                              <input id="rightUploadedTextID" className="custom-text custom-text-box-right" style={{color: this.state.rightCaseColor}} value={this.state.rightUploadedText} readOnly/>
                                 

            </div>
           

                              </div>
                                
                               
                            

                                {/* <img className="responsive" id="logo1" style={{width:"86px", paddingRight:"-62px", marginLeft:"-121px", marginTop:"-356px", zIndex: "1", position: 'initial'}}  src={this.state.uploadleftLogo2}/>


                                <img className="responsive" id="logo2" style={{width:"86px", paddingRight:"-62px", marginLeft:"-121px", marginTop:"-356px", zIndex: "1",visibility:this.state.uploadrightLogo2 ,borderRadius:"30%", position: 'initial'}}  src={this.state.uploadrightLogo2}/> */}
                                </div>

                                {/* show new image for casing */}
                                <div className="product-preview caseing-container" style={{display:this.state.casingChecker}}>
                                <img src={require('../../assets/image/case.png')}/>

                                <input style={{fontSize: "20px", marginTop:"0", marginLeft: "0px", zIndex: 1, color:"#ffffff",
 background: "transparent", textAlign: "center", border: "none", position: "inherit", top: "-170px"}} value={this.state.uploadedCasingText} readonly />
                                </div>

                                {/* end show new image for casing */}
                           </div>                                    
                                
                        <div className="button-column">
                            <div className="col-md-3 col-xs-4 text-center group-btn">
                                <span className={'btn btn-primary ' + this.state.activeLeft} onClick={this.selectedLeftButton}  name="left"> Left </span>
                            </div>

                            <div className="col-md-6 col-xs-4 text-center group-btn">
                                <span  className={'btn btn-primary ' + this.state.activeBoth} onClick={this.selectedBothButton}  name="both"> Both </span>
                            </div>

                            <div className="col-md-3 col-xs-4 text-center group-btn">
                                <span className={'btn btn-primary ' + this.state.activeRight} onClick={this.selectedRightButton}  name="right"> Right </span>
                            </div>

                        </div>

                    </div>
                    </section>

                            <div className="col-md-3" id="print-col"> 
                                <div className="item-customize"> 
                                <Artwork
                                    handlerFromParant={this.handlerInitialValue}
                                    uploadLeftImage = {this.uploaderLeftImage}
                                    uploadrightImage = {this.uploaderRightImage}
                                    uploadCasingText = {this.uploaderCasingText}
                                    uploadrightText = {this.uploaderRightText}
                                    //uploadrightLogo = {this.uploadRightLogo}
                                    uploadrightLogo2 = {this.uploadRightLogo2}
                                    actionTabClick = {this.actionTabClicker}
                                    casingTabClick = {this.casingTabClicker}

                                    whiteColor = {this.whiteColorTxt}
                                    RedColor = {this.RedColorTxt}
                                    BlackColor = {this.BlackColorTxt}
                                    LightYellowColor = {this.LightYellowColorTxt}
                                    BlueColor = {this.BlueColorTxt}
                                    SkyBlueColor = {this.SkyBlueColorTxt}
                                    VioletColor = {this.VioletColorTxt}
                                    YellowColor = {this.YellowColorTxt}
                                    
                                    hideLogo = {this.hideLogoOnclick}

                                /></div>
                            </div>
                    </div>

                    <div className="specification-price">
                    <div className="row">
                    <div className="specification-price">
                    <div className="col-md-9"> 
                        <div className="item-specifications">
                            <h4>Specifications</h4>
                        
                            <div className="row">
                                <div className="col-sm-6">
                                    <label>IEM Model : <span>{this.state.cType}</span></label>
                                    <label>Left FacePlate : <span>{this.state.leftColor}</span></label>
                                    <label>Right FacePlate : <span>{this.state.rightColor}</span></label>

                                    <label>Left Shell : <span>{this.state.leftShellColor}</span></label>
                                    <label>Right Shell : <span>{this.state.rightShellColor}</span></label>

                                    <label>Drivers : <span>{this.state.driver}</span></label>
                                    <label>Typer of Drivers : <span>{this.state.typeofdriver}</span></label>
                                    <label>Confirguration : <span>{this.state.config}</span></label>
                                    <label>Crossover : <span>{this.state.crossover}</span></label>
                                    </div>    
                            

                                <div className="col-sm-6">
                                    <label>Isolation : <span>{this.state.isolation}</span></label>
                                    <label>Bore : <span>{this.state.bore}</span></label>

                                    <label>Frequency Response : <span>{this.state.frequencyresponse}</span></label>
                                    <label>Sensitivity : <span>{this.state.sensitivity}</span></label>
                                    <label>Impedance : <span>{this.state.impedence}</span></label>
                                    <label>THD : <span>{this.state.thd}</span></label>
                                    <label>Warranty Period : <span>{this.state.warranty}</span></label>
                                    <label>Refit Policy : <span>{this.state.refit}</span></label>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                   <div style={{display: "none"}}>
                   {/* add */}
                   </div>
                    <div className="col-md-3">
                            <div className="">                               
                                <br/><br/>
                                <div className="item-specifications">
                                    <label>Base Price : <span>  US ${this.state.price}</span></label>
                                    <label>Total: <span> US ${total}</span></label>
                                    <br/>
                                <button onClick = {this.nextReview1} className="btn btn-primary btn-block"><Link to="/register">Next</Link></button>
                                {/* <Link to = "/review" onClick = {this.nextReview}><button className="btn btn-primary btn-block">Next</button></Link> */}
                           </div>
                        </div>              
                            
                </div>
                </div>
                
            </div></div>
                
            </div>
            </div>
        )
    }
}
export default CustomOrder;