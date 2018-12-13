import React,{ Component } from "react";
import './test.css';
import datad from '../../assets/EarImages/rs01.png';
import TestProps from './TestProps'

export default class Test extends Component {
		constructor(props){
            super(props);
            this.state= {
                changeLeft : "btnContainer",
                changeRight : "btnContainer",
                active: "btn",
                activeRight: "btn",
            }

            this.handleChange1 = this.handleChange1.bind(this);
            this.handleChange2 = this.handleChange2.bind(this);
            this.handleChange3 = this.handleChange3.bind(this);
            this.selectedText = this.selectedText.bind(this);
        }

handleChange1(){
	var checkActive = "activeBtn";
	//if(this.state.active == checkActive){
		this.setState({change1: "http://stealthsonics.com/1101/fpp/rf15.png"});
    //}
}
handleChange2(){
   // alert("nsdvkjds")
	this.setState({change: "http://stealthsonics.com/1101/fpp/lf15.png"})
}
handleChange3(){
  
	this.setState({change3: "http://stealthsonics.com/1101/ss/ls01.png"})
}
isActive(){
	this.setState({active: "activeBtn"})
}
isActive2(){
	this.setState({activeRight: "btn activeBtn"})
}
selectedText() {
  this.setState({show:"activeBtn"})
  }
  render() {
     let bl = <img src={this.state.change1}/>
     let br = <img src={this.state.change3}/>
     var d = 1

    return (
       <div className="">
         <TestProps/>
  				  <div className="col-md-6">
          		<img src={this.state.change}/>
                <span style={{width:"50px", height:"50px"}} >{bl}</span>
	          </div>
	            <img className="responsive"  onClick={this.handleChange1} style={{display:"", width:"50px", height:"50px", cursor:"pointer"}}  src="http://stealthsonics.com/1101/ss/01.png"/>
	          	<a className="btn btn-danger" onMouseUp={this.selectedText}>Left</a>
	          	<a className="btn btn-success" onClick={this.handleChange2}>Both</a>
	          	<a className="btn btn-info" onClick={this.handleChange3}>Right</a>
          </div>
    );
  }
}

