import React, {Component} from 'react';
import './Drummer.css';
import myImage from '../../../assets/image/drummrblog-516x464.png';
import myImage2 from '../../../assets/image/mauricio.jpg';

class  Drummer extends Component {

    render() {
        var backImg = {
            backgroundImage:"url('../../../assets/image/soundcheck1-300x187.jpg')"
        }
        var my ={
            color:'#999b9b'
        };
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

        return(
            <body>
            <article>
                <div id="time" style={{paddingTop:"90px"}}>

                    <a style={{marginTop:"20px"}}><time  dateTime="2018-05-26">MAY 26, 2018</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Drummer Mauricio Claveria @ Sound:Check XPO</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">Artists </a></strong>
                    <strong><a href=" " rel="category tag">Homepage  </a></strong>

                    <strong><a href=" " rel="category tag">News</a></strong>
                    <strong><a href=" " rel="category tag">Uncategorized</a></strong>
<tr><td>
                    <div id="image">
                        <img src={myImage} style={{width:"700px"}} />

                    </div>
                    <div className="b-example">
                        <div className="page-header">
                            <h1><small>We were so excited to have super drummer Mauricio Claveria with us who had his custom in-ear impressions made at the Sound:Check XPO!</small></h1>
                        </div>
                    </div>
                    <br/>

                    <br/>
                    <p>
                        <div id="image">
                            <img src={myImage2} />

                        </div>
                    </p>


</td></tr>
                </div>






            </article>
            <div className="jumbotron hero-natures" style={{marginBottom:'100px', width:'100%'}}>

    <img src={backImg} />
            </div>
            </body>
        )
    }

}

export default Drummer