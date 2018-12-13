import React, { Component } from 'react';
import './TheScience.css';



class TheScience extends Component {
	render() {
		return (
			<div>
			<div className="container-fluid">
                    <div className="banner-section science-banner">
                        <div className="banner-title">
                            <h1>The Science behind Stealth Sonics</h1>
                        </div>
                    </div>

            </div>
				
				<div class="container-fluid ">

					<div class="row bottom ">

						<div class='col-12 col-sm-12 col-md-4  ' >
							<img class="image" src={require('../../assets/image/ISO.png')} />
							{/* <hr style={{marginBottom: "20px", marginTop: "20px;", borderColor: "#67bfe5"}}/> */}
						</div>

						<div class=' col-12 col-sm-12 col-md-8 small '>
							<h1 class="hed">Iso-Stealth Technology: Audiology in Action</h1>
							<h3 class="para">Thanks to our advanced audiology research and testing methodologies and our international network <br />of more than 700 audiology partners, we’re able to go beyond our competitors to engineer ultra-precise<br />, second-bend ear canal impressions to position our IEM within just a couple of millimeters of your<br /> eardrum. You can listen at lower, safer SPLs for a cleaner mix, with less ear-cavity interference and a<br /> consistent sonic experience every time.</h3>
							<br />
							{/* <hr style={{marginBottom: "20px", marginTop: "20px;", borderColor: "#67bfe5"}}/>  */}
						</div>

					</div>
					<hr class="bod" />



					<div className="row margin-top bottom ">
						<div className='col-md-4'>
							<img class="image" src={require('../../assets/image/flo.png')} />
						</div>
						<div className='col-md-8'>
							<h1 class="hed">SonicFlo Acoustics: The Aerospace Advantage</h1>
							<h3 class="para">Thanks to our advanced audiology research and testing methodologies and our international network <br />of more than 700 audiology partners, we’re able to go beyond our competitors to engineer ultra-precise<br />, second-bend ear canal impressions to position our IEM within just a couple of millimeters of your<br /> eardrum. You can listen at lower, safer SPLs for a cleaner mix, with less ear-cavity interference and a<br /> consistent sonic experience every time.</h3>

						</div>
					</div>

					{/* <hr style={{ marginBottom: "20px", marginTop: "20px;", borderColor: "#67bfe5", width: "80%" }} /> */}
					<hr class="bod" />


					<div className="row margin-top bottom-two">
						<div className='col-md-4'>
							<img class="image" src={require('../../assets/image/damping.png')} />
						</div>
						<div className='col-md-8'>
							<h1 class="hed">Acoustic Optimization: From Drivers to Damping</h1>
							<h3 class="para">Acoustic refinements include extra-large bores that preserve airflow and sonic fidelity and advanced<br /> venting features to manage resonance. All of our universal in-ear monitors offer Stealth Damping technology<br />, featuring a faceplate that can be removed to extend bass response for deep, rich low end that you can feel.</h3>
						</div>
					</div>
					{/* <hr style={{ marginBottom: "20px", marginTop: "20px;", borderColor: "#67bfe5", width: "80%" }} /> */}
					<hr class="bod" />

					<div className="row margin-top bottom-last">
						<div className='col-md-4'>
							<img class="image" src={require('../../assets/image/komposit.png')} />
						</div>
						<div className='col-md-8'>
							<h1 class="hed">Space-Age Materials: Comfort and Confidence</h1>
							<h3 class="para">Components are built inside an ultra-light enclosure housed in proprietary composite material that ensures<br /> a snug, comfortable, slip-free fit, even during long-term use.</h3>
						</div>
					</div>

					{/* <hr style={{ marginTop: "20px", marginTop: "20px;", borderColor: "#67bfe5", width: "80%" }} /> */}
					<hr class="bod" />

					<br /><br />
					<br /><br /><br /><br />				</div>
			</div>

		)
	}
}
export default TheScience