import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay,CardTitle,CardText,Button,CardDeck,Row, CardBody, Col } from 'reactstrap';
//import Row from "reactstrap/src/Row";
//import Col from "reactstrap/src/Col";
//import CardBody from "reactstrap/src/CardBody";
//import CardDeck from "reactstrap/src/CardDeck";
import './artist.css';

const divStyle = {

    height: '100',
    padding: '10px 100px 10px 100px'

};
class Artist extends Component
{
    render()
    {
        return(
<CardDeck>
<div className="container-fluid">
                    <div className="banner-section">
                        <div className="banner-title">
                            <h1>Artistes</h1>
                        </div>
                    </div>

                </div>
            <Row style={divStyle}>
                <Col sm="4">
                    <Card>

                        <CardBody>

                        <h4>North American Artistes</h4>
                            <CardText className="content artist_list">
                                <ul>
                                    <li><h5>Tony Vincent</h5></li>
                                    <li><h5>All4One</h5></li>
                                    <li><h5>Craig Wayne Boyd</h5></li>
                                    <li><h5>Malynda Hale</h5></li>
                                    <li><h5>Juliet</h5></li>
                                    <li><h5>Kenny Morain</h5></li>
                            </ul>

                            </CardText>

                        </CardBody>

                    </Card>
                </Col>
                <Col sm="4">
                    <Card>

                        <CardBody>

                            <h4>South American Artistes</h4>
                            <CardText className="content artist_list">
                                <ul>
                                    <li><h5>Gaby Moreno</h5></li>
                                    <li><h5>Mauricio Claveria</h5></li>
                                    <li><h5>Lack of Remorse</h5></li>
                                    <li><h5>Alejandro Lerner</h5></li>

                            </ul>
                            </CardText>

                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card>

                        <CardBody>

                            <CardTitle className="card-title">
                            <h4>Indian Artistes</h4></CardTitle>
                            <CardText className="content artist_list">
                                <ul>
                                    <li><h5>
                                        Shreya Ghosal
                                    </h5>
                                    </li>

                                    <li><h5>
                                        Vijay Dayal
                                    </h5>
                                    </li>

                                    <li>
                                        <h5>
                                        Saleem Sulaiman
                                        </h5>
                                    </li>

                                    <li>
                                        <h5>
                                        Saleem Merchant
                                        </h5>
                                    </li>

                                    <li><h5>
                                        Vishal Dadlani</h5>
                                    </li>
                                </ul>
                            </CardText>



                        </CardBody>
                    </Card>

                </Col>
            </Row>

    <Row style={divStyle}>


                <Col sm="4">
                    <Card>

                        <CardBody>

                            <h4>Europe & UK</h4>
                            <CardText className="content artist_list">
                                <ul>
                                    <li><h5>Taren Kaur</h5></li>
                            </ul>
                            </CardText>

                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card>

                        <CardBody>

                            <h4>East Asian Artistes</h4>
                            <CardText className="content artist_list">
                                <ul>
                                    <li><h5>Gareth Nicholas Fernandez</h5></li>
                            </ul>
                            </CardText>

                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card>

                        <CardBody>

                            <h4>Engineers who use Stealth Sonics</h4>
                            <CardText className="content artist_list">
                                <ul>
                                    <li><h5>Jeff Gross</h5></li>
                                    <li><h5>Karrie Keyes</h5></li>
                                    <li><h5>Marc Urselli</h5></li>
                                    <li><h5>Lisa Chamblee</h5></li>
                                    <li><h5>Dave Hampton</h5></li>
                            </ul>
                            </CardText>

                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
</CardDeck>

        )
                }
}
export default Artist;


