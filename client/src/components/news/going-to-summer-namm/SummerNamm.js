import React, {Component} from 'react';

import myImage from '../../../assets/image/nashville-1-513x464.png';

class  SummerNamm extends Component {

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

                    <a style={{marginTop:"20px"}}><time  dateTime="2018-02-28">JULY 13, 2017</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Going to Summer NAMM?</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">Events</a></strong>

                    <strong><a href=" " rel="category tag">News</a></strong>


                    <br/><br/><br/>

                    <tr><td>

                        <div id="image">
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                        <br/>



                        <div className="b-example">
                            <div className="page-header">

                                <h1 style={{margin:"70px"}}><small><p style={{fontSize:'20px'}}>We are landing in Nashville for meetings and demonstrations of our new in-ear monitoring systems throughout the show. If you’d like to say hi and get a demo, email Chandra Lynn at Chandra@glowmarketing.com. We will also be attending PMC Speakers’ Open House Party on Thursday Night. If you’d like to go, check out </p>

                                    <br/>

                                    <p style={{fontSize:'20px'}}>
                                        <span href="https://pmcnashville2017.eventbrite.com" style={{color:"#a2c5db"}}>https://pmcnashville2017.eventbrite.com</span>

                                    </p>

                                    <br/>
                                    <p><strong>Have a greate show!</strong></p>

                                </small></h1>


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

export default SummerNamm