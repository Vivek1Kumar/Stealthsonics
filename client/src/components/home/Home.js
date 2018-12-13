import React, { Component } from 'react';
import './home.css';
import {Container} from 'reactstrap';
import BackGround from "./BackGround";
//import MoveContent from './MoveContent';



class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            
            <BackGround />
        );


    }
}

export default Home
