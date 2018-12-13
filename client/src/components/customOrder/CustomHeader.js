import React, { Component } from 'react';
import './CustomHeader.css';


class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state={     
        }
    }
    
    render() {

        return(
            <div>

            <ul class="nav nav-tabs earpiece-typeList">
                <li id ="c2Id" className="active"><a onClick={this.props.c2TypeClick}>
                    <img src={require("../../assets/image/c2.png")}/></a></li>
                <li id ="c4Id" ><a onClick={this.props.c4TypeClick}><img src={require("../../assets/image/c4.png")}/></a></li>
                <li id ="c9Id" ><a onClick={this.props.c9TypeClick}><img src={require("../../assets/image/c9.png")}/></a></li>
            </ul>
        </div>
        )
    }
}
export default CustomHeader;