import React, {Component} from 'react';

import myImage from '../../../assets/image/canjam.png.jpg';

class  MixMagazine extends Component {

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
                    <h1 style={{fontSize:"60px", marginTop:"20px"}}><a href="/home"><strong>Mix Magazine Covers Stealth Sonics</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn"><strong>Chandra Lynn</strong></a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">Homepage  </a></strong>
                    <strong><a href=" " rel="category tag">MediaKit   </a></strong>
                    <strong><a href=" " rel="category tag">News</a></strong>

                    <br/><br/><br/><br/>
                    <tr><td>
                        <h4 style={{fontWeight: 'bold'}}>Rread article here:<a href=" https://www.mixonline.com/technology/review-three-for-listening"> https://www.mixonline.com/technology/review-three-for-listening</a> </h4></td></tr>
                    <tr> <td style={{margin:'70px'}}>
                        <div id="image" >
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                    </td>
                    </tr>



                </div>
            </article>
            </body>
        )
    }

}

export default MixMagazine