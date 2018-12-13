import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modelType } from '../../actions/authAction';  
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';

class ModelType extends Component {
  constructor() {  
    super();
    this.state= {
      faceplateprice: '',
      shellsprice: '',
      artworkprice: '',
      errors: {}
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
    const modelType = {
      faceplateprice: this.state.faceplateprice,
      shellsprice: this.state.shellsprice,
      artworkprice: this.state.artworkprice,
    }; 
    console.log(modelType); 
    this.props.modelType(modelType);
   
    }
  onChange(e){
    this.setState({ [e.target.faceplateprice]: e.target.value});
  }
  render(){
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <h1 className="display-2 text-center">Model Type</h1>
              <p className="lead text-center">
                Input Model Price 
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Faceplate-Price"
                    name="faceplateprice"
                    type="faceplateprice"
                    // value={this.state.faceplateprice}
                    onChange={this.onChange}
                    error={errors.faceplateprice}
                  />
                  <TextFieldGroup
                    placeholder="Shells-Price"
                    name="email"
                    type="faceplateprice"
                    // value={this.state.shellsprice}
                    onChange={this.onChange}
                    error={errors.shellsprice}
                  />                  
                 
                  <TextFieldGroup
                    placeholder="Artwork-Price"
                    name="artworkprice"
                    type="faceplateprice"
                    // value={this.state.artworkprice}
                    onChange={this.onChange}
                    error={errors.artworkprice}
                  />
                
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>   
        </div>
      </div>
    );
  }
} 
ModelType.propTypes = {
  modelType: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {modelType})(withRouter(ModelType));
