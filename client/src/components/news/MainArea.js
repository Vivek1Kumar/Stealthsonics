import React from 'react';
import News from './News';
import {Container, Row, Col} from 'reactstrap';


class MainArea extends React.Component {






    constructor() {
        super();

        this.state = {
            people: [

                {

                    company: "[香港高級視聽展 訪問篇] Stealth Sonics 聽歌都可以保護聽覺",
                    description: "產品講解就來到呢篇, 之後就到訪問篇啦~~~~~[香港高級視聽展2018] 其他精彩個人音響產品",
                    image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/New_Fb_add.jpg")} />

                },

                {

                        company: "講到航天科技同流體力學，面板又有個渦輪喺度，真係好重未來感...",
                        image:<img width={'300px'}  height={'200px'}  src={require("../../assets/image/fb_add.jpg")} />

                },


                    {
                        company: "Music Inc. Features Stealth Sonics",
                        description: "Music Inc Magazine Editor Kasia Fejklowicz interviewed Stealth Sonics’ Co-Founder Dindae Sheena for their August issue. Thanks to Kasia and also to Dave Rat of Rat Sound and SoundTools for being.....",
                        image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/Screen-Shot-2018-08-09-at-5.50.07-PM.png")} />
                    },





                    {

                        company: "Stealth Sonics Takes Global Stage at CanJam London",
                        description: "Read article here: https://www.mixonline.com/technology/review-three-for-listening",
                        image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/canjam.png.jpg")} />
                    },



                    {
                        company: "Mix Magazine Covers Stealth Sonics",
                        description: "Super excited to deliver Dave Rat @ratsound his custom impressions #stealthsonics #inearmonitors #i",
                        image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/3.png")} />
                    },
                {
                    company: "Dave Rat of Rat Sound Gets Custom Stealth Sonics",
                    description: "Super excited to deliver Dave Rat @ratsound his custom impressions #stealthsonics #inearmonitors #i",
                    image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/ratty-600x464.jpg")} />

                },

                {
                    company: "Major Hifi Covers Stealth Sonics Launch",
                    description: "See article here: http://majorhifi.com/stealth-sonics-iems/",
                    image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/major_hifi-502x464.png")} />

                },

                {
                    company: "Tony Vincent Takes Stealth Sonics on the Road",
                    description: "See article here: http://majorhifi.com/stealth-sonics-iems/",
                    image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/troy_vincent-798x464.jpg")} />

                },
                {
                    company: "Stealth Sonics @ Sound:Check XPO in Mexico City",
                    description: "See article here: http://majorhifi.com/stealth-sonics-iems/",
                    image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/soundcheck1-300x187.jpg")} />

                },
                {
                    company: "Major Hifi Covers Stealth Sonics Launch",
                    description: "See article here: http://majorhifi.com/stealth-sonics-iems/",
                    image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/drummrblog-516x464.png")} />

                },
                {
                    company: "Steath Sonics @ Palm Expo in Mumbai, India",
                    description: "See article here: http://majorhifi.com/stealth-sonics-iems/",
                    image:  <img width={'300px'}  height={'200px'}  src={require("../../assets/image/palmblog-553x464.png")} />

                },
                {
                    company: "Stealth Sonics Debuts at CanJam Global!",
                    description:" Stealth Sonics makes its debut at CanJam Singapore and SoCal! ",
                    image:  <img width={'100%'}  src={require("../../assets/image/canjam1debut-541x464.png")} />

                },
                {
                    company: "Stealth Sonics @ CanJam Singapore",
                    description: "Stealth Sonics made its debut at CanJam Singapore today.",
                    image:  <img width={'100%'}  src={require("../../assets/image/canjmasinapor-528x464.png")} />

                },
                {
                    company: "Stealth Sonics @ Entech 2018 in Australia",
                    description: "Hello Australia! The Stealth Sonics team have landed down under and we are super excited to meet you",
                    image:  <img width={'100%'}  src={require("../../assets/image/australia-555x464.png")} />

                },
                {
                    company: "Kenny Moran @ NAMM 2018",
                    description: "The awesome Kenny Moran @kmomix with our Co-Founder Dindae @dindae.sheena at our NAMM booth. #namm #nammshow #namm20",
                    image:  <img width={'100%'}  src={require("../../assets/image/kenny-485x464.png")} />

                },
                {
                    company: "Drummer Lanise Hughes @ NAMM",
                    description: "So awesome to have Lanise Hughes drummer here with us at NAMM! He had his custom in ear impressions done here at our booth by our on site audiologist. #stealthsonics #namm2018 #nam",
                    image:  <img width={'100%'}  src={require("../../assets/image/lanise-551x464.png")} />

                },
                {
                    company: "Soundgirls.org Raves About Stealth Sonics",
                    description: "Becky Pell, monitor engineer with over 20 years of experience in live sound, wrote the following article about Stealth Sonics’ entry into the IEM Marketing.",
                    image:  <img width={'100%'}  src={require("../../assets/image/SoundGirls.png")} />

                },
                {
                    company: "Stealth Sonics is a Bollywood Hit at PALM Expo, Bombay, India",
                    description: "We made some serious waves at Palm Expo and were a big hit with movers and shakers in the Bollywood music scene!!! Our initial showing to industry leaders has been amazingly well received.\n",
                    image:  <img width={'100%'}  src={require("../../assets/image/bollywood-534x464.png")} />

                },
                {
                    company: "Going to Summer NAMM?",
                    description: "We are landing in Nashville for meetings and demonstrations of our new in-ear monitoring systems throughout the show. If you’d like to say hi and get a demo, email Chandra Lynn at Chandra@glowmarketing.com. We will also be attending PMC Speakers’ Open House Party on Thursday Night. If you’d like to go, check out https://pmcnashville2017.eventbrite.com Have […]",
                    image:  <img width={'100%'}  src={require("../../assets/image/nashville-1-513x464.png")} />

                },
                {
                    company: "Stealth Sonics is Now on Facebook and Instagram",
                    description: "Join our growing audio community to keep up with what’s new with us, our users and in-ear technology. As always, we’d love to hear from you and track your work so feel free to post and message us. Please ‘Like’ and ‘Follow” us here: http://www.facebook.com/stealthsonics http://www.instagram.com/stealth",
                    image:  <img width={'100%'}  src={require("../../assets/image/ss_FB-546x464.png")} />

                }

                ]


            }
   }

    render() {


        return (
<Row>
    <Col sm={3}>
                        <News />
    </Col>
</Row>


        );
    }
}

export default MainArea;