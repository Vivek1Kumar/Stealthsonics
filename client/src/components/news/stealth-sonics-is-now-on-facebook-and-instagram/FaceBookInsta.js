import React, {Component} from 'react';

import myImage from '../../../assets/image/ss_FB-546x464.png';

class  FaceBookInsta extends Component {

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

                    <a style={{marginTop:"20px"}}><time  dateTime="2017-07-13">JULY 13, 2017</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Stealth Sonics is Now on Facebook and Instagram</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Admin"><strong>Admin</strong></a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">News</a></strong>


                    <br/><br/><br/>

                    <tr><td>

                        <div id="image">
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                        <br/>



                        <div className="b-example">
                            <div className="page-header">

                                <h1 style={{margin:"70px"}}><small><p style={{fontSize:'20px'}}>Join our growing audio community to keep up with what’s new with us, our users and in-ear technology. As always, we’d love to hear from you and track your work so feel free to post and message us. Please ‘Like’ and ‘Follow” us here:</p>

                                    <br/>

                                    <p style={{fontSize:'20px'}}>
                                        <span href="http://www.facebook.com/stealthsonics" style={{color:"#a2c5db"}}>http://www.facebook.com/stealthsonics</span>
                                        <span href="http://www.instagram.com/stealthsonics" style={{color:"#a2c5db"}}>http://www.instagram.com/stealthsonics</span>

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

export default FaceBookInsta