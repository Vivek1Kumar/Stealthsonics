import React, {Component} from 'react';

import myImage from '../../../assets/image/SoundGirls.png';

class  SoundGirl extends Component {

    render() {

        var column1 ={
            float: 'left',
            width: '33.33%',
            padding: '5px'
        }

        var aftr= {
            content: "",
            clear: 'both',
            display: 'table',
            width: '1000px'
        }
        var my ={

        };


        return(
            <body>
            <article>

                <div id="time" style={{paddingTop:"90px"}}>

                    <a style={{marginTop:"20px"}}><time  dateTime="2017-10-11">OCTOBER 11, 2017</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Soundgirls.org Raves About Stealth Sonics</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>


                    <strong><a href=" " rel="category tag">Homepage</a></strong>
                    <strong><a href=" " rel="category tag">News</a></strong>
                    <strong><a href=" " rel="category tag">Media-Kit</a></strong>

                    <br/><br/><br/>

                    <tr><td>

                        <div id="image">
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                        <br/>



                        <div className="b-example">
                            <div className="page-header">

                                <h1 style={{margin:"70px"}}><small><p style={{fontSize:'20px'}}>Becky Pell, monitor engineer with over 20 years of experience in live sound, wrote the following article about Stealth Sonics’ entry into the IEM Marketing.</p></small></h1>


                                <h1 style={{margin:"70px"}}><small><a href="https://soundgirls.org/stealth-sonics-the-next-generation-of-iem-technology/"> Soundgirls.org – Stealth Sonics – The Next Generation of IEM Technology</a></small></h1>


                                <h1 style={{margin:"70px"}}><small><p style={{fontSize:'20px'}}>For a product that didn’t even exist until the late 90s, in-ear monitors have become a major part of the audio engineering world. From the first set created by Jerry Harvey for Alex Van Halen back in 1995, we now see custom IEMs with as many as 12 drivers in a single tiny earpiece. As a monitor engineer who has used IEMs with most of the bands I’ve mixed in the last 20 years, I’ve often wondered how much further the technology could go.

                                    Well, it seems that a group of audiologists, engineers, and musicians with a passion for creating an unparalleled listening experience may have the answer. Stealth Sonics have gathered research from a vast network of audiologists and breakthroughs in the aerospace industry to create a new range of IEMs which engineer ultra-precise, second-bend ear canal impressions to position the earpiece within just a couple of millimeters of the eardrum. The advantage of this is the ability to listen at a lower, safer SPL; going as close to the eardrum as possible ‘reduces uncontrollable acoustic gain along the ear canal and therefore lends itself to higher fidelity sound.’

                                    The Stealth Sonics approach is a new one – to the best of my knowledge, there are no other second-bend IEMs out there, although second-bend moulds are regularly created for hearing-impaired clients requiring hearing-aids. As the process is undertaken by members of a network of certified and medically trained audiologists, it is both completely safe and guarantees an optimum standard of impression-taking. The price of the IEMS includes the audiology costs for impression-taking – often not the case with other manufacturers, and I for one have fallen foul of poorly-taken impressions resulting in a very expensive pair of uncomfortable IEMs!

                                    But it’s the level of customisation that, to my mind, makes these IEMs the most exciting thing to come to the market in a long time. Stealth Sonics don’t stop at taking a very accurate, second-bend ear impression – they actually send a sweep into the customer’s ear canal and measure the response digitally, much like how a room is acoustically treated. Using the data gathered and combining it with Minimum Hearing Thresholds, they are able to map a solution that will not just custom make a sleeve that will fit into the ear canal, but which allows them to tune the IEM to the specific acoustic ear canal response of the individual. That means they would hear the best and most accurate sound they are capable of hearing. And for a monitor engineer, this is the closest you’re ever going to get to truly hearing the same thing as your artist.

                                    The influence of aerospace technology is an interesting factor in Stealth Sonics’ product range. Using what they call  ‘SonicFlo Tech,’ they employ science that allows the control of airflow from the drivers to the ear input, through control of parameters such as the length/diameter/aspect ratio of the delivery tubes. This control allows them to deliver sound for various purposes; their 2-driver unit is musical and designed for live sound and music lovers, 4-driver is designed for the vocalist and guitarist and the 9-driver is designed for the mastering engineer or audiophile. Their IEMS contain either balanced armature drivers or a combination of those and dynamic drivers. To explain the technology more thoroughly, in balanced armature design an electric current is passed through a coil wrapped around an armature. The coil is suspended between 2 magnets and the changes in current create attraction between the coil and magnets. Balanced armatures can be optimally tuned for specific frequency ranges, and offer better HF performance than dynamic drivers as well as a faster response and more detailed sound. They are also smaller than dynamic drivers, making them ideal for fitting into tiny earpieces.

                                    In a dynamic driver, the diaphragm is attached directly to a voice coil. When current is applied, the voice coil moves between 2 permanent magnets causing the diaphragm to move and produce sound. They offer a better bass response than a balanced armature and tend to be more durable. The difference between the two is much like the difference between dynamic and condenser microphones – both have their advantages, and Stealth Sonics use those judiciously to produce the optimum performance for each product in their range.

                                    Further optimisation comes from the three different types of cable available: the nylon-sheathed copper cable is ideal for extended onstage use due to its tendency to remain tangle-free; the braided oxygen-free copper cable offers improved signal delivery, and the silver oxygen-free cable offers an upgraded audiophile experience due to superior conductivity.

                                    As audio technology gets ever more intricate, it’s exciting to see IEMs taking a bold leap forward. I for one am extremely eager to experience just how good the up-close experience of IEMs can be, when great music is delivered in first-class style to my eardrums, via an earpiece that has been perfectly tailored to the exact acoustic environment of my ears…. taking the meaning of personal monitoring to a whole new level!

                                    Stealth Sonics will be demonstrating their new products at AES in New York October 18 – 21st. Stop by and tell them SoundGirls sent you.

                                    Becky Pell: Becky Pell is a monitor engineer with over 20 years experience in the live sound industry. Since 2012, Becky has been a registered yoga teacher and leads retreats and workshops when she’s not on the road, as well as teaching the artists and musicians she tours with mixing monitors.

                                    About Becky: Becky started her professional life as an apprentice at RG Jones Sound Engineering in London, where she swept a lot of floors, cleaned a lot of cables and loaded a lot of trucks, gradually working her way up to become an engineer. After going freelance in 2001, she toured as a monitor and RF tech with Black Crowes, Travis, and Kylie Minogue, before moving behind the desk to mix monitors for artists such as Aha, Muse, Westlife, Anastacia and Take That. She also runs monitors annually on the main stage at the world’s largest festival, Glastonbury.</p></small></h1>

<br/>
                                <small><h1><p style={{fontSize:'20px'}}><a href="https://soundgirls.org/contributors/becky-pell/" style={{color:"#a2c5db"}}>Read Becky’s Blog</a></p></h1></small>
                            </div>
                        </div>

                        <br/><br/><br/><br/>





                    </td></tr>






                </div>
            </article>
            </body>
        )
    }

}

export default SoundGirl