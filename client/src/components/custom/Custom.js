import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
//import Button from "reactstrap/src/Button";
import {Button} from 'reactstrap';
import './custom.css';


class Custom extends Component {
	render() {

		const navLink = {
			color: '#4dc5df',

			borderStyle: 'solid',
			borderBottomWidth: 'thin'
		}
		const p = {

			align: 'center'
		}
		const style = {
			color: "white",
			textAlgin:"center",
			marginLeft: "39%",
			paddingTop:"55px",
			marginTop:'100px'
		}
		const h = {
			textAlign: "center",
		    fontsize: "50px",
		    borderBottom: "1px solid #e8e6e6",
		    width: "80%",
		    margin: "auto",
		    color: "#96deee",
		    marginBottom:"20px"
		}
		const card = {
			border: '1px solid',
		}
	
		return(
			<div>				
				<div style={{backgroundColor:"black", height:"1px", width:"100%"}}>		
				{/* <h4 class="main-0">CHOOSE YOUR MODEL</h4>			 */}
				</div>	
				

             <div class="container-fluid black">

              <h4 class="main-0">CHOOSE YOUR MODEL</h4>
			  
			 </div>

			 <div class="container-fluid">
             
			 <div class="row mt-20px pm-none">

			 <div class="col-md-4 col-12 center">
			 <div class="card card-co">
              <div class="card-body">
              <h4 class="card-title mb-2 blue">C2</h4>
			  <hr/>
			  <img class="card-img-top mb-2 cardimg1" src={require("../../assets/image/1.png")} alt="Card image cap"></img>
              <p class="card-text mb-3">The C2 two-driver in-ear monitor features a finley-tuned, crossover-free hybrid driver design for a smooth sonic experience that’s ideal for musicians and music lovers. Our in-ears are optimized for use for both on and off stage. Housed in acoustically-optimized composite material, the Stealh Sonics C2 Custom IEM offers solid details and covers ar frequency range of 20Hz to 20 kHz.</p>
               <a href="/c2series" target="_blank" class="btn btn-primary">Read More</a>
              </div>
              </div>
			  </div>

			  <div class="col-md-4 col-12 center ">
			 <div class="card card-co">
              <div class="card-body">
              <h4 class="card-title mb-2 blue">C4</h4>
			  <hr/>

			  <img class="card-img-top mb-2 cardimg1" src={require("../../assets/image/2.png")} alt="Card image cap"></img>
              <p class="card-text mb-3">The four-driver C4 in-ear monitor features an all-balanced armature design favoured by music producers, music lovers and anyone seeking the flattest response possible. Housed in acoustically-optimized composite material, the Stealth Sonics C4 Custom IEMs offers advanced detail and crisp transients, and covers a frequency range of 18 Hz to 23 kHz.</p>
               <a href="/c4series" target="_blank" class="btn btn-primary">Read More</a>
              </div>
              </div>
			  </div>

			  <div class="col-md-4 col-12 center">
			 <div class="card card-co ">
              <div class="card-body">
              <h4 class="card-title mb-2 blue">C9</h4>
			  <hr/>

			  <img class="card-img-top mb-2 cardimg1" src={require("../../assets/image/3.png")} alt="Card image cap"></img>
              <p class="card-text mb-3">The four-driver C4 in-ear monitor features an all-balanced armature design favoured by music producers, music lovers and anyone seeking the flattest response possible. Housed in acoustically-optimized composite material, the Stealth Sonics C4 Custom IEMs offers advanced detail and crisp transients, and covers a frequency range of 18 Hz to 23 kHz.</p>
               <a href="/c9series" target="_blank" class="btn btn-primary">Read More</a>
              </div>
              </div>
			  </div>
			 
			 </div>

			 <div class="row mt-20px pm-none">

<div class="col-md-4 col-12 center">
<div class="card card-co">
 <div class="card-body">
 <h4 class="card-title mb-2 blue">U2</h4>
 <hr/>

 <img class="card-img-top mb-2 cardimg1" src={require("../../assets/image/us_product.png")} alt="Card image cap"></img>
 <p class="card-text mb-3">The U2 Driver in-ear monitor features a finely-tuned, blended sonic profile. Housed in acoustically-optimized composite material that is soft and resilient, the Stealth Sonics U2 IEM delivers warm, musical detail and covers a frequency range of 20HZ to 20KHZ.</p>
  <a href="/u2series" target="_blank" class="btn btn-primary">Read More</a>
 </div>
 </div>
 </div>

 <div class="col-md-4 col-12 center ">
<div class="card card-co">
 <div class="card-body">
 <h4 class="card-title mb-2 blue">U4</h4>
 <hr/>

 <img class="card-img-top mb-2 cardimg1" src={require("../../assets/image/u4_product.png")} alt="Card image cap"></img>
 <p class="card-text mb-3">The four-driver U4 in-ear monitor features a balanced armature design favored by anyone seeking the flattest response possible. Housed in acoustically-optimized composite material that is soft and resilient, the Stealth  Sonics U4 IEM offers advanced detail and crisp transients, and covers a frequency range of 18Hz to 23kHz.</p>
  <a href="/u4series" target="_blank" class="btn btn-primary">Read More</a>
 </div>
 </div>
 </div>

 <div class="col-md-4 col-12 center">
<div class="card card-co ">
 <div class="card-body">
 <h4 class="card-title mb-2 blue">U9</h4>
 <hr/>

 <img class="card-img-top mb-2 cardimg1" src={require("../../assets/image/u9_product.png")}></img>
 <p class="card-text mb-3">Our flagship 9-driver model is a hybrid system designed for anyone who requires the most accurate sonic profile. It features a precision-calibrated large diameter dynamic driver together with four super-high drivers. Housed in acoustically-optimized composite material that is soft and resilient, the Stealth Sonics U9 IEM reproduces extreme detail and covers our widest frequency range of 18Hz to 40kHz.</p>
  <a href="/u9series" target="_blank" class="btn btn-primary">Read More</a>
 </div>
 </div>
 </div>

</div>




			 </div>


			</div>
		)
	}
}
export default Custom;