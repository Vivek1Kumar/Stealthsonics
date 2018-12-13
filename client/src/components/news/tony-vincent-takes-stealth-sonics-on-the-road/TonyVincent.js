import React, {Component} from 'react';

import myImage from '../../../assets/image/troy_vincent-798x464.jpg';
import myImage2 from '../../../assets/image/tony2.png';
import myImage3 from '../../../assets/image/tony21.png';
import myImage4 from '../../../assets/image/tony4.png';

class  TonyVincent extends Component {




    render() {

        var styl={
            boxSizing: 'border-box'
        }
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
        }

        return(
            <body>
            <article>
                <div id="time" style={{paddingTop:"90px"}}>
                    <div>
                        <a style={{marginTop:"500"}}><time  dateTime="2018-06-26">MAY 26, 2018</time></a>
                    </div>
                    <h1 style={{fontSize:"60px", marginTop:"20px"}}><a href="/home"><strong>Tony Vincent Takes Stealth Sonics on the Road</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn"><strong>Chandra Lynn</strong></a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">Artists   </a></strong>
                    <strong><a href=" " rel="category tag">Homepage  </a></strong>

                    <strong><a href=" " rel="category tag">News</a></strong>

                    <br/><br/><br/><br/>

                    <tr> <td style={{margin:'70px'}}>
                        <div id="image" >
                            <img src={myImage} style={{width:"700px"}} />

                        </div>


                    <div className="b-example">
                        <div className="page-header">
                        <h1><small>Super exciting to have Tony Vincent rocking out live with his personalised custom @stealthsonics C9 in-ear-monitors!!! Glad you like them Tony! Have a great tour!

                            Tony Vincent is a recording artist, actor, and producer from Alberguerque, NM, living in New York City. He has starred in some amazing Broadway and West End Shows too, including RENT, Jesus Christ Superstar, We Will Rock You! And American Idiot, blowing audiences away with his incredible voice. He has also released solo albums, and appeared on NBC’s The Voice.

                            Currently, Tony is enthralling audiences headlining the North American Symphony Tour of ‘The Music Of David Bowie’ – you can catch him live now using our amazing C9’s at a show near you!</small></h1>
                        </div>
                    </div>
                    </td>
                    </tr>
                    <br/><br/>

<tr><td>
                    <div className="row" style={aftr}>
                        <div className="column" style={column1}>
                            <img src={myImage2} alt="Snow" style={{width:"100%"}}/>
                        </div>
                        <div className="column" style={column1}>
                            <img src={myImage3} alt="Forest" style={{width:"100%"}}/>
                        </div>
      </div>
        <div className="column" style={column1}>
            <img src={myImage4} alt="Snow" style={{width:"100%"}}/>
      </div>

</td></tr>

                </div>

            </article>
            </body>
        )
    }

}

export default TonyVincent