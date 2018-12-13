import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InitailsFont extends Component {
    constructor(props){
        super(props);
        this.state = {
            initialName:'' 
        }
        // this.InitailsFont = this.InitailsFont.bind(this);
    }

    // InitailsFont(e){
    //     // this.setState({Initailstext: this.state.InitailsText})
    //     this.setState({ 
    //         initialName: e.target.value
    //     })

    // }
    render(){
        return(
            <div>
                <label>Initails Good Font</label><br/>
                <input type="text" 
                    onChange={this.InitailsFont}
                    value={this.state.initialName}
                />

                <div>{this.state.initialName}</div>
            </div>
        )
    }
}

// InitailsFont.propTypes = {
//     initialName: React.PropTypes.string
// }