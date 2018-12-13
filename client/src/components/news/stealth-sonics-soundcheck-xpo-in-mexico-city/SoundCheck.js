import React, {Component} from 'react';
import backImg from '../../../assets/image/troy_vincent-798x464.jpg';
import myImage4 from '../../../assets/image/soundCheck4.png';
import myImage2 from "../../../assets/image/soundcheck1-300x187.jpg";
import myImage21 from "../../../assets/image/sundChec2.png";
import myImage3 from "../../../assets/image/sundCheck3.png";
import './SoundCheck.css';



class  MajorHifi extends Component {

    render() {
var backImg = {
    backgroundImage:"url('../../../assets/image/troy_vincent-798x464.jpg')"
}
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
                    <h1 style={{fontSize:"60px", marginTop:"20px"}}><a href="/home"><strong>Stealth Sonics @ Sound:Check XPO in Mexico City</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn"><strong>Chandra Lynn</strong></a>
                    <a><span style={my}>in</span></a>


                    <strong><a href=" " rel="category tag">Evet  </a></strong>
                    <strong><a href=" " rel="category tag">News </a></strong>

                    <strong><a href=" " rel="category tag">Uncategorized</a></strong>

                    <tr><td>
                    <div className="b-example">
                        <div className="page-header">
                            <h1><small>Our booth was jam packed at the Sound:Check XPO in Mexico City! We are happy to make so many new friends while getting their impressions made by our audiologist! @soundcheckxpo</small></h1>

                        </div>
                    </div>

                    <br/><br/><br/><br/>
                        <td>
                        <div className="row" style={aftr}>
                            <div className="column" style={column1}>
                                <img src={myImage2} alt="Snow" style={{width:"100%"}}/>
                            </div>
                            <div className="column" style={column1}>
                                <img src={myImage21} alt="Forest" style={{width:"100%"}}/>
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
            <div className="jumbotron hero-nature" style={{marginBottom:'100px', width:'100%'}}>

                <img src={backImg} />
            </div>
            </body>
        )
    }

}

export default MajorHifi