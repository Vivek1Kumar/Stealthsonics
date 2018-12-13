import React, {Component} from 'react';

import myImage from '../../../assets/image/canjam1debut-541x464.png';




class  DebutAtCanjam extends Component {

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

                    <a style={{marginTop:"20px"}}><time  dateTime="2018-04-08">APRIL 08, 2018</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Stealth Sonics Debuts at CanJam Global!</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">event</a></strong>
                    <strong><a href=" " rel="category tag">Homepage  </a></strong>

                    <strong><a href=" " rel="category tag">News</a></strong>

<br/><br/>
                    <tr><td>
                        <div id="image">
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                        <br/>




                        <div className="b-example">
                            <div className="page-header">
                                <h1 style={{margin:'10px'}}><small>Stealth Sonics makes its debut at CanJam Singapore and SoCal!</small></h1>
                                <h1 style={{margin:"70px"}}><small>“We just cannot believe how much the visitors were just blown away by our IEMs,” says Dindae Sheena, co-founder of Stealth Sonics. “End users, dealers and distributors from around the Asian region showed up to a packed event.”


                                    CanJam Global is the world’s premier series of headphone audio shows and is produced by Head-Fi.org, the world’s largest audio community. Since 2006, CanJam events have been a community showcase for Head-Fi.org, and an industry platform that enables headphone audio manufacturers, distributors, and dealers interact with their customers, peers, and the audio, lifestyle, and technology press.   CanJam Global show attendees have the unique opportunity to experience the very latest in headphone and personal/portable audio technology with interactive product demos, educational seminars, and more.

                                    Experience your music in a new way and #ListenLikeNeverBefore #stealthsonics #iems</small></h1>

                            </div>
                        </div>

                        <br/><br/><br/><br/>







                        <br/><br/><br/>


                    </td></tr>






                </div>
            </article>
            </body>
        )
    }

}

export default DebutAtCanjam