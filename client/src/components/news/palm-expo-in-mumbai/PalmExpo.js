import React, {Component} from 'react';

import myImage from '../../../assets/image/palmblog-553x464.png';

import myImage1 from "../../../assets/image/palm1.jpg";
import myImage2 from "../../../assets/image/palm2.jpg";
import myImage3 from "../../../assets/image/palm3.jpg";
import myImage4 from "../../../assets/image/palm4.jpg";
import myImage5 from "../../../assets/image/palm5.jpg";
import myImage6 from "../../../assets/image/palm6.jpg";
import myImage7 from "../../../assets/image/palm7.jpg";
import myImage8 from "../../../assets/image/palm8.jpg";
import myImage9 from '../../../assets/image/palm9.jpg';

class  PalmExpo extends Component {

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
            color:'#999b9b'
        };


        return(
            <body>
            <article>
                <div id="time" style={{paddingTop:"90px"}}>

                    <a style={{marginTop:"20px"}}><time  dateTime="2018-08-01">APRIL 16, 2018</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Steath Sonics @ Palm Expo in Mumbai, India</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">event</a></strong>
                    <strong><a href=" " rel="category tag">Homepage  </a></strong>

                    <strong><a href=" " rel="category tag">News</a></strong>


                    <tr><td>
                    <div id="image">
                        <img src={myImage} style={{width:"700px"}} />

                    </div>
                    <br/>




                        <div className="b-example">
                            <div className="page-header">
                                <h1 style={{margin:"70px"}}><small>Our booth was jam packed at the Sound:Check XPO in Mexico City! We are happy to make so many new friends while getting their impressions made by our audiologist! @soundcheckxpo</small></h1>

                            </div>
                        </div>

                        <br/><br/><br/><br/>
                        <td>
                            <div className="row" style={aftr}>
                                <div className="column" style={column1}>
                                    <img src={myImage1} alt="Snow" style={{width:"100%"}}/>
                                </div>
                                <div className="column" style={column1}>
                                    <img src={myImage2} alt="Forest" style={{width:"100%"}}/>
                                </div>


                            </div>

                            <div className="row" style={aftr}>
                                <div className="column" style={column1}>
                                    <img src={myImage3} alt="Snow" style={{width:"100%"}}/>
                                </div>
                                <div className="column" style={column1}>
                                    <img src={myImage4} alt="Forest" style={{width:"100%"}}/>
                                </div>


                            </div>

                            <div className="row" style={aftr}>
                                <div className="column" style={column1}>
                                    <img src={myImage5} alt="Snow" style={{width:"100%"}}/>
                                </div>
                                <div className="column" style={column1}>
                                    <img src={myImage6} alt="Forest" style={{width:"100%"}}/>
                                </div>


                            </div>


                            <div className="row" style={aftr}>
                                <div className="column" style={column1}>
                                    <img src={myImage7} alt="Snow" style={{width:"100%"}}/>
                                </div>
                                <div className="column" style={column1}>
                                    <img src={myImage8} alt="Forest" style={{width:"100%"}}/>
                                </div>


                            </div>
                            <div className="row" style={aftr}>
                                <div className="column" style={column1}>
                                    <img src={myImage9} alt="Snow" style={{width:"100%"}}/>
                                </div>


                            </div>


                        </td>

                        <br/><br/><br/>


                    </td></tr>






                </div>
            </article>
            </body>
        )
    }

}

export default PalmExpo