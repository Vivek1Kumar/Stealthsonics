import React, {Component} from 'react';

import myImage from '../../../assets/image/major_hifi-502x464.png';


class  MajorHifi extends Component {

    render() {
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
                    <h1 style={{fontSize:"60px", marginTop:"20px"}}><a href="/home"><strong>Major Hifi Covers Stealth Sonics Launch</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn"><strong>Chandra Lynn</strong></a>
                    <a><span style={my}>in</span></a>


                    <strong><a href=" " rel="category tag">Homepage  </a></strong>
                    <strong><a href=" " rel="category tag">Media Kit  </a></strong>

                    <strong><a href=" " rel="category tag">News</a></strong>

                    <br/><br/><br/><br/>

                    <tr> <td style={{margin:'70px'}}>
                        <div id="image" >
                            <img src={myImage} style={{width:"700px"}} />

                        </div>

                    </td>
                    </tr>
                    <p><strong>See article here:</strong><a href="http://majorhifi.com/stealth-sonics-iems/" style={{fontSize:"20px"}}> http://majorhifi.com/stealth-sonics-iems/</a></p>



                </div>
            </article>
            </body>
        )
    }

}

export default MajorHifi