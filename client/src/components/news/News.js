import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardDeck,
    CardTitle, CardSubtitle, Button,CardColumns,row, Col} from 'reactstrap';
//import './News.css';

const cardtitle={
    fontFamily: 'Poppins',
margin: '10px',
fontSize: '10px',
backgroundColor: '#F9F9F9',
};
const paratitle={
    margin:'5px',
    textalign:'center',
    overflow:'hidden'
};
const paratext={
    margin:'5px',
    fontWeight:'bold'

};

const divStyle = {
    marginLeft: '90px',
    marginRight:'90px',

};

const imgstyle = {
    height: '180px',
}

class News extends Component {
    constructor(props) {
        super(props);
    }
	render() {


		return(

        
        <div class="container nopad">

        <div class="jumbo banner-section">

        <div className="banner-title">
                  <h1>Stealth Sonics News</h1>
              </div>
        
        </div>

        <div class="row nomaj1 p15">

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/fb-lyra-post-2.jpg")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Soincs gets featured in an interview during the Hong Kong Av Show - 2018 </h5>
        <p class="card-text-home stretch">Stealth Soincs gets featured in an interview during the Hong Kong Av Show - 2018 </p>
        <a href="https://m.facebook.com/lyramedia/photos/a.133422710080161/1925101210912293/?type=3&source=48" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/fb-lyra-post-1.jpg")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Soincs gets featured in an interview during the Hong Kong Av Show - 2018 </h5>
        <p class="card-text-home stretch">Stealth Soincs gets featured in an interview during the Hong Kong Av Show - 2018 </p>
        <a href="https://www.facebook.com/116775131744919/posts/1889257281163353/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/Screen-Shot-2018-08-09-at-5.50.07-PM.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Music Inc. Features Stealth Sonics - interviewed</h5>
        <p class="card-text-home stretch">Music Inc Magazine Editor Kasia Fejklowicz interviewed Stealth Sonics’ Co-Founder Dindae Sheena.</p>
        <a href="https://stealthsonics.com/musicinc/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
  <img class="card-img-top card-img-home" src={require("../../assets/image/canjam.jpg")} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Stealth Sonics Takes Global Stage at CanJam London</h5>
    <p class="card-text-home stretch">Singapore-based music technology manufacturer to debut groundbreaking precision-tuned in-ear monitor systems.</p>
    <a href="#" target="_blank" class="btn btn-primary">Read More</a>
  </div>
</div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/bolg1.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Mix Magazine Covers Stealth Sonics</h5>
        <p class="card-text-home stretch">Read article here: https://www.mixonline.com/technology/review-three-for-listening</p>
        <a href="#" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes" >
        <img class="card-img-top card-img-home" src={require("../../assets/image/ratty.jpg")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Dave Rat of Rat Sound Gets Custom Stealth Sonics</h5>
        <p class="card-text-home stretch">Super excited to deliver Dave Rat @ratsound his custom impressions! #stealthsonics #inearmonitors #iems #customiems #custominears#custominearmonitors</p>
        <a href="#" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>


        <div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/major_hifi.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Major Hifi Covers Stealth Sonics Launch</h5>
        <p class="card-text-home stretch">See article here: http://majorhifi.com/stealth-sonics-iems/</p>
        <a href="https://stealthsonics.com/major-hifi-covers-stealth-sonics-launch/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/troy_vincent.jpg")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Tony Vincent Takes Stealth Sonics on the Road</h5>
        <p class="card-text-home stretch">Super exciting to have Tony Vincent rocking out live with his personalised custom @stealthsonics C9 in-ear-monitors!!! Glad you like them Tony! Have a great tour!</p>
        <a href="https://stealthsonics.com/tony-vincent-takes-stealth-sonics-on-the-road/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/blog4.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics @ Sound:Check XPO in Mexico City</h5>
        <p class="card-text-home stretch">Our booth was jam packed at the Sound:Check XPO in Mexico City! We are happy to make so many new friends while getting their impressions made by our audiologist! @soundcheckxpo</p>
        <a href="https://stealthsonics.com/stealth-sonics-soundcheck-xpo-in-mexico-city/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/drummrblog.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Drummer Mauricio Claveria @ Sound:Check XPO</h5>
        <p class="card-text-home stretch">We were so excited to have super drummer Mauricio Claveria with us who had his custom in-ear impressions made at the Sound:Check XPO! #stealthsonics #inearmonitors #mexico</p>
        <a href="https://stealthsonics.com/drummer-mauricio-claveria-soundcheck-xpo/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>


<div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/palmblog.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Steath Sonics @ Palm Expo in Mumbai, India</h5>
        <p class="card-text-home stretch">What an amazing soft launch we had last week Mumbai, India! Had an great response from the ProAudio, Recording and the Head-Fi/Audiophile community</p>
        <a href="https://stealthsonics.com/6609-2/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/canjam1debut.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics Debuts at CanJam Global!</h5>
        <p class="card-text-home stretch">Stealth Sonics makes its debut at CanJam Singapore and SoCal! “We just cannot believe how much the visitors were just blown away by our IEMs,” says Dindae Sheena, co-founder of Stealth Sonics. “End users, dealers and distributors from around the Asian region showed up to a packed event.</p>
        <a href="https://stealthsonics.com/stealth-sonics-debuts-at-canjam-global/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/canjmasinapor.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics @ CanJam Singapore</h5>
        <p class="card-text-home stretch">Stealth Sonics made its debut at CanJam Singapore today.</p>
        <a href="https://stealthsonics.com/stealth-sonics-canjam-singapore/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/australia.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics @ Entech 2018 in Australia</h5>
        <p class="card-text-home stretch">Hello Australia! The Stealth Sonics team have landed down under and we are super excited to meet you!</p>
        <a href="https://stealthsonics.com/stealth-sonics-entech-2018-in-australia/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>


<div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/kenny.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Kenny Moran @ NAMM 2018</h5>
        <p class="card-text-home stretch">The awesome Kenny Moran @kmomix with our Co-Founder Dindae @dindae.sheena at our NAMM booth. #namm #nammshow #namm2018 #nammshow2018 #throwbackthursday#inearmonitors #inearmonitor #iems #custominears #customiems#custominearmonitors #universalinearmonitor #inears #stealthsonics#singers #musician #guitarist #musicproducer #musicengineers#earthwindandfire #musicmusicmusic #audiophile #musiclovers #sikh#sikhs #singh #sardar #california #tbt #tbthursday</p>
        <a href="https://stealthsonics.com/kenny-moran-namm-2018/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/lanise.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Drummer Lanise Hughes @ NAMM</h5>
        <p class="card-text-home stretch">So awesome to have Lanise Hughes drummer here with us at NAMM! He had his custom in ear impressions done here at our booth by our on site audiologist. #stealthsonics #namm2018 #namm #nammshow#nammshow2018 #LA #losangeles #anaheim#inearmonitors #iems #customiems #custominears#custominearmonitors #universalinearmonitor#soundengineer #rnbmusic #rnb #iswear #musician#singer #follow #all4one #musicproducer#musicengineer #sikh #lamusic #singh #laproducer#californiamusic #eargasmic</p>
        <a href="https://stealthsonics.com/drummer-lanise-hughes-namm/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/SoundGirls.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Soundgirls.org Raves About Stealth Sonics</h5>
        <p class="card-text-home stretch">Becky Pell, monitor engineer with over 20 years of experience in live sound, wrote the following article about Stealth Sonics’ entry into the IEM Marketing</p>
        <a href="https://stealthsonics.com/soundgirls-org-raves-about-stealth-sonics/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/bollywood.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics is a Bollywood Hit at PALM Expo, Bombay, India</h5>
        <p class="card-text-home stretch">We made some serious waves at Palm Expo and were a big hit with movers and shakers in the Bollywood music scene!!! Our initial showing to industry leaders has been amazingly well received.</p>
        <a href="https://stealthsonics.com/stealth-sonics-is-a-bollywood-hit-at-palm-expo-bombay-india/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>


<div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/nashville-1.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Going to Summer NAMM?</h5>
        <p class="card-text-home stretch">We are landing in Nashville for meetings and demonstrations of our new in-ear monitoring systems throughout the show. If you’d like to say hi and get a demo, email Chandra Lynn at Chandra@glowmarketing.com. We will also be attending PMC Speakers’ Open House Party on Thursday Night. If you’d like to go, check out https://pmcnashville2017.eventbrite.com Have […]</p>
        <a href="https://stealthsonics.com/going-to-summer-namm/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src={require("../../assets/image/ss_FB.png")} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-titleStealth Sonics is Now on Facebook and Instagram"></h5>
        <p class="card-text-home stretch">Join our growing audio community to keep up with what’s new with us, our users and in-ear technology. As always, we’d love to hear from you and track your work so feel free to post and message us. Please ‘Like’ and ‘Follow” us here: http://www.facebook.com/stealthsonics http://www.instagram.com/stealthsonics</p>
        <a href="https://stealthsonics.com/stealth-sonics-is-now-on-facebook-and-instagram/" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>





        </div>






        );
	}
}
export default News