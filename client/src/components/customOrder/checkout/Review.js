import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Review.css'
// import OrderDetail from '../OrderDetail';
import { Link, withRouter } from 'react-router-dom'
import TextFieldGroup from '../../common/TextFieldGroup';
// import { reviewSpecification } from '../../actions/authAction'
import { reviewSpecification } from '../../../actions/authAction';

// import CustomOrder from '../CustomOrder';


class Review extends Component {
    constructor() {  
        super();
        this.state= {
            // ctype: '',
            // leftfacePlate: '',
            // rightfacePlate: '',
            // leftshell: '', 
            // rightshell: '',
            // drivers: '',
            // typerofdrivers: '',
            // confirguration: '', 
            // crossover: '',
            // isolation: '',
            // bore: '',
            // frequencyresponse: '', 
            // sensitivity: '',
            // impedance: '',
            // thd: '',
            // warrantyperiod: '',
            // refitpolicy: '',  
        //   errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      componentWillReceiveProps(nextProps){
        if(nextProps.errors){
          this.setState({errors: nextProps.errors})
        }
      }
      onSubmit(e){
        e.preventDefault();
       // alert("Submit review data")
        const newReview = {
            ctype: this.props.typess,
            leftfacePlate: this.props.leftcolors,
            rightfacePlate: this.props.rightcolors,
            leftshell: this.props.leftShellColors, 
            rightshell: this.props.rightShellColors,
            driver: this.props.drivers,
            typerofdrivers: this.props.typeofdrivers,
            confirguration: this.props.configs, 
            crossover: this.props.crossovers,
            isolation: this.props.isolations,
            bore: this.props.bores,
            frequencyresponse: this.props.frequencyresponses, 
            sensitivity: this.props.sensitivitys,
            impedance: this.props.impedences,
            thd: this.props.thds,
            warrantyperiod: this.props.warrantys,
            refitpolicy: this.props.refits,
            price: this.props.pricess,  
            
        }; 
        console.log(newReview)
        // alert("Submit review data" + newReview)
        //console.log(newReview); 
        this.props.reviewSpecification(newReview, this.props.history);
       
        }
      onChange(e){
        this.setState({ [e.target.name]: e.target.value});
      }
   
   
    render() {  
        return(                        
          <div>
            <div className="container-fluid">
                    <div className="banner-section">
                        <div className="banner-title">
                            <h1>Review Your Order</h1>
                        </div>
                    </div>

                </div>
            <div className="container">                         
                <div className="label-section">
                <div className="col-sm-6">
                <div className="label-container">
                <label>Price : <span>{this.props.pricess}</span></label><br/>
              <label>IEM Model : <span>{this.props.typess}</span></label><br/>
                <label>Left FacePlate : <span>{this.props.leftcolors}</span></label><br/>
                <label>Right FacePlate : <span>{this.props.rightcolors}</span></label><br/>

                <label>Left Shell : <span>{this.props.leftShellColors}</span></label><br/>
                <label>Right Shell : <span>{this.props.rightShellColors}</span></label><br/>

                <label>Drivers : <span>{this.props.drivers}</span></label><br/>
                <label>Typer of Drivers : <span>{this.props.typeofdrivers}</span></label><br/>
                <label>Confirguration : <span>{this.props.configs}</span></label><br/>
                <label>Crossover : <span>{this.props.crossovers}</span></label>
                </div>
            </div>    
        

            <div className="col-sm-6">
                <div className="label-container">
                <label>Isolation : <span>{this.props.isolations}</span></label><br/>
                <label>Bore : <span>{this.props.bores}</span></label><br/>

                <label>Frequency Response : <span>{this.props.frequencyresponses}</span></label><br/>
                <label>Sensitivity : <span>{this.props.sensitivitys}</span></label><br/>
                <label>Impedance : <span>{this.props.impedences}</span></label><br/>
                <label>THD : <span>{this.props.thds}</span></label><br/>
                <label>Warranty Period : <span>{this.props.warrantys}</span></label><br/>
                <label>Refit Policy : <span>{this.props.refits}</span></label>
                </div>
            
            </div> 
                </div>
            <div className="btn btn-info" onClick={this.onSubmit}><Link to="/login">Next</Link></div>
            
            </div>
                       
          </div>
        )
    }
}
Review.propTypes = {
  reviewSpecification: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {reviewSpecification})(withRouter(Review));



                