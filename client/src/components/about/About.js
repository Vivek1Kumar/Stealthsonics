import React, { Component } from 'react';
import './about.css'


class About extends Component {
	render() {
		return(
			<div>
				<div className="container-fluid">
                    <div className="banner-section">
                        <div className="banner-title">
                            <h1>About Us</h1>
                        </div>
                    </div>

                </div>
                 <div className="container">

                  <div className="row marge-bot2">
				    
					<div className="col-md-12 col-12">
				     <div className="col-12 mb-10 title-h4">
					 <h4>Who We Are</h4>
					 <p className="content-1">We are a group of audiologists, engineers, and musicians dedicated to providing a uniquely personal listening experience for performing artists, studio engineers, audiophiles and anyone who loves hearing all of music’s clarity, nuance, and detail</p>
					 </div>
					 <div className="col-12 mb-10 title-h4">
					 <h4>Why We’re Different</h4>
					 <p className="content-1">We’re approaching in-ear monitors in a whole new way, using science that leverages our innovations in the medical, music, acoustic and aerospace fields to craft in-ear monitors that are as unique as you are—from custom precision-tuned systems to personalized finishes that let your monitors become an extension of your varied lifestyle.</p>
					 <p className="content-1">With Stealth Sonics, you’ll enjoy the utmost sonic accuracy and advanced hearing protection, in total style and comfort. We offer a full range of universal and custom-molded options, with versatile accessories for a one-of-a-kind experience. Our systems will take you from the studio to the stage to the street, without missing a beat.</p>
					 </div>
					</div>
				  </div>

				 </div>



			</div>
		)
	}
}
export default About;