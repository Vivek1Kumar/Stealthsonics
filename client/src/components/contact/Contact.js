import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
	render() {
		return(
			<div>
               <div className="container-fluid">
                    <div className="banner-section contact-us">
                        <div className="banner-title">
                            <h1>Contact Us</h1>
                        </div>
                    </div>

            </div>

				
               <div class="container">

               <div class="row no-margin marge-bot1">

               <div class="col-md-6 col-12">

               <div class="col-12">
               <h2 class="mb-10 cent">Drop us a Beat!</h2>
               </div>

               <div class="col-12 mb-10">
               <p>Below is a list of all of our dealers in the United States and International Distributors.</p>
               <p>If there is an issue with any of the StealthSonics products that you purchased and it is within warranty, please reach out to the partner that you purchased it from. If you have any further questions, please fill out this contact form to the right and we will get back to you shortly.</p>
               <p>Thank you!</p>
               </div>

               <div class="col-12">
               <div class="col-md-6 pn">
               <p class="bold">NORTH AMERICA</p>
               <p class="mn">Randy Fuchs</p>
               <p class="mn">Artist Relations</p>
               <p class="mn">Randy@artistrelations.com</p>
               <p class="mn">randy@stealthsonics.com</p>
               <p class="mn">+1 615 523 9995</p></div>
               <div class="col-md-6 pn">
               <p class="bold">LATIN AMERICA</p>
               <p class="mn">Chris Adams</p>
               <p class="mn">Studio Sound International, LLC/</p>
               <p class="mn">Mission Viejo, CA 92692</p>
               <p class="mn">chris@studiosoundintl.com</p>
               <p class="mn">Cell: +1 (949)690-8388</p>
               <p class="mn">Work: +1 (949) 460-9069</p>
               </div>
               </div>

               <div class="col-12">
               <div class="col-md-6 pn">
               <p class="bold">CHINA, HONG KONG & MACAU</p>
               <p class="mn">Labkable</p>
               <p class="mn">Rm 916-917,Hollywood Plaza</p>
               <p class="mn">610 Nathan Road</p>
               <p class="mn">Mongkok, Hong Kong</p>
               <p class="mn">+852 6428 3188 (Novelle Au)</p>
               <p class="mn">novelleau@labkable.com</p>
               </div>
               <div class="col-md-6 pn">
               <p class="bold">REST OF THE WORLD</p>
               <p class="mn">Stealth Sonics Pte. Ltd.</p>
               <p class="mn">140 Paya Lebar Road</p>
               <p class="mn">#01-14,AZ@Paya Lebar</p>
               <p class="mn">Singapore</p>
               <p class="mn">409015</p>
               <p class="mn">sales@stealthsonics.com</p>
               </div>
               </div>


               <div class="col-12">
               <div class="col-md-6 pn">
               <p class="bold">TAIWAN</p>
               <p class="mn">Savannah Yu</p>
               <p class="mn">Jin Qu Av Station</p>
               <p class="mn">jinquavstation@gmail.com</p>
               </div>
               <div class="col-md-6 pn">
               <p class="bold">CANADA</p>
               <p class="mn">Rajeshpal Singh</p>
               <p class="mn">General Manager</p>
               <p class="mn">raj@stealthsonics.com</p>
               <p class="mn">+1 604 354 0821</p></div>
               </div>

               <div class="col-12">
               <div class="col-md-6 pn">
               <p class="bold">EUROPE & UK</p>
               <p class="mn">Mike Van Der Logt</p>
               <p class="mn">4m4you</p>
               <p class="mn">mike@stealthsonics.com</p></div>
               <div class="col-md-6 pn">
               <p class="bold">India</p>
               <p class="mn">Rajan Gupta</p>
               <p class="mn">Managing Director</p>
               <p class="mn">rajan@hitechaudiosystems.com</p>
               </div>
               </div>

               </div>


               <div class="col-md-6 col-12">
               
               <div class="col-12 mb-10">
               <h3 class="mb-10">Need support? We’ve got you covered.</h3>
               </div>

               <div class="form-group">
               <label for="name">Your Name (required)</label>
               <input type="text" class="form-control"></input>
               </div>

               <div class="form-group">
               <label for="name">Your Email (required)</label>
               <input type="text" class="form-control"></input>
               </div>

               <div class="form-group">
               <label for="name">Subject</label>
               <input type="text" class="form-control"></input>
               </div>

               <div class="form-group">
               <label for="name">Describe Your Issue</label>
               <textarea type="text" rows="5" class="form-control"></textarea>
               </div>

               <button class="btn btn1">SEND</button>
               </div>
               
               
               </div>
               </div>






			</div>
		)
	}
}
export default Contact;