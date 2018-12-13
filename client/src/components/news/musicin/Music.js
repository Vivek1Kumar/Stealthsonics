import React, {Component} from 'react';
import './music.css';
import myImage from '../../../assets/image/Screen.png';
import myImage2 from '../../../assets/image/ScreenBottom.png';
class  Music extends Component {

    render() {
        var my ={
            color:'#999b9b'
        };


        return(
        <body>
        <article>
            <div id="time" style={{paddingTop:"90px"}}>

                <a style={{marginTop:"20px"}}><time  dateTime="2018-08-01">August 01, 2018</time></a>

            <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Music Inc. Features Stealth Sonics</strong></a></h1>
            <a><span style={my}>By</span></a>
           <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
            <a><span style={my}>in</span></a>

            <strong><a href=" " rel="category tag">Homepage  </a></strong>
            <strong><a href=" " rel="category tag">MediaKit   </a></strong>
            <strong><a href=" " rel="category tag">News</a></strong>

            <div id="image">
                <img src={myImage} style={{width:"700px"}} />

            </div>
                <br/>

            <p style={{fontSize:"50px", marginTop:"20px", fontFamily:'Georgia, serif;'}}>
                <h4>Music Inc Magazine Editor Kasia Fejklowicz interviewed Stealth Sonics’ Co-Founder Dindae Sheena for their August issue. Thanks to Kasia and also to Dave Rat of Rat Sound and SoundTools for being part of this awesome article! Look out for it on&nbsp;</h4>
            </p>
                <br/>
            <p>
                <div id="image">
                    <img src={myImage2} />

                </div>
            </p>
            </div>
        </article>
        </body>
        )
    }
    
}

export default Music