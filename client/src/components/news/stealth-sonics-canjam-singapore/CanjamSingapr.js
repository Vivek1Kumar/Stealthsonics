import React, {Component} from 'react';

import myImage from '../../../assets/image/canjmasinapor-528x464.png';

import myImage1 from "../../../assets/image/sing1.jpg";
import myImage2 from "../../../assets/image/sing2.jpg";
import myImage3 from "../../../assets/image/sing3.jpg";
import myImage4 from "../../../assets/image/sing4.jpg";

class  CanjamSingapr extends Component {

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

                    <a style={{marginTop:"20px"}}><time  dateTime="2018-03-04">MARCH 24, 2018</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Steath Sonics @ Palm Expo in Mumbai, India</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">event</a></strong>
                    <strong><a href=" " rel="category tag">Homepage</a></strong>
                    <strong><a href=" " rel="category tag">News</a></strong>
                    <strong><a href=" " rel="category tag">Uncategorized</a></strong>


                    <tr><td>

                        <div id="image">
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                        <br/>



                        <div className="b-example">
                            <div className="page-header">

                           <center><h1 style={{margin:"70px"}}><small>Stealth Sonics made its debut at CanJam Singapore today.

                                    We just cannot believe how much the visitors were just blown away by our IEMs. End users, dealers and distributors
                                    from around the Asian region showed up to a packed event.</small></h1>

                           </center>
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



                        </td>

                        <br/><br/><br/>


                    </td></tr>






                </div>
            </article>
            </body>
        )
    }

}

export default CanjamSingapr