import React, {Component} from 'react';

import myImage from '../../../assets/image/bollywood-534x464.png';

class  BombayIndia extends Component {

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

                    <a style={{marginTop:"20px"}}><time  dateTime="2017-07-13">JULY 13, 2017</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Stealth Sonics is a Bollywood Hit at PALM Expo, Bombay, India</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">Events</a></strong>
                    <strong><a href=" " rel="category tag">Homepage</a></strong>
                    <strong><a href=" " rel="category tag">News</a></strong>


                    <br/><br/><br/>

                    <tr><td>

                        <div id="image">
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                        <br/>



                        <div className="b-example">
                            <div className="page-header">

                                <h1 style={{margin:"70px"}}>
                                    <small><p style={{fontSize:'20px'}}>We made some serious waves at Palm Expo and were a big hit with movers and shakers in the Bollywood music scene!!! Our initial showing to industry leaders has been amazingly well received.</p></small>


                                        <small><p style={{fontSize:'20px'}}>Indian artists such as<a href="Gulraj Singh">Guljar Singh</a><a href="Salim – Sulaiman">Salim-Sulaiman</a> <a href="Sunny Sanour">and Sunny Sanour </a>were impressed with what they heard through our in-ears, and we are beyond excited to start working with them!</p></small>
                                </h1>
                                <small><p style={{fontSize:'20px'}}>Worn by one of the biggest names in Bollywood, music director, Salim Merchant.</p></small>


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

export default BombayIndia