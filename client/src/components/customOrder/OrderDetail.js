import React, { Component } from 'react';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
        
    }

    render() {
        
        return(
            <div className="container">

                <div style={{display:"none"}} className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.leftFacePlateColor}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.rightFacePlateColor}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.leftShellColorName}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.rightShellColorName}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.itemPrice}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.itemType}/>
                </div>

            </div>
        )
    }
}
export default OrderDetail;