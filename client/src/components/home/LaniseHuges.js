import React, {Component} from 'react';

import myImage from '../../../assets/image/lanise-551x464.png';

class  LaniseHuges extends Component {

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

                    <a style={{marginTop:"20px"}}><time  dateTime="2018-02-28">JANUARY 28, 2018</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Drummer Lanise Hughes @ NAMM</strong></a></h1>
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

                                <h1 style={{margin:"70px"}}><small><p style={{fontSize:'20px'}}>So awesome to have Lanise Hughes drummer here with us at NAMM! He had his custom in ear impressions done here at our booth by our on site audiologist.</p>

                                    <br/>

                                    <p style={{fontSize:'20px'}}>
                                        <span href="#stealthsonics" style={{color:"#a2c5db"}}>#stealthsonics</span>
                                        <span href="#namm2018" style={{color:"#a2c5db"}}>#namm2018</span><span href=" #namm" style={{color:"#a2c5db"}}>#namm</span><span href="#nammshow" style={{color:"#a2c5db"}}>#nammshow</span><span href="#nammshow2018" style={{color:"#a2c5db"}}>#nammshow2018 </span><span href="#LA" style={{color:"#a2c5db"}}>#LA </span><span href="#losangel" style={{color:"#a2c5db"}}>#losange </span>
                                    </p></small></h1>
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

export default LaniseHuges