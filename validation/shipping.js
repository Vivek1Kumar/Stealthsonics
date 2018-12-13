const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateShippingItems(data) {
	let errors = {};

	data.fullname = !isEmpty(data.fullname) ? data.fullname : '';
	data.email = !isEmpty(data.email) ? data.email : '';
    data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : '';
    data.country = !isEmpty(data.country) ? data.country : '';
    data.addressline1 = !isEmpty(data.addressline1) ? data.addressline1 : '';
    data.addressline2 = !isEmpty(data.addressline2) ? data.addressline2 : '';
    
    data.cityname = !isEmpty(data.cityname) ? data.cityname : '';
	data.stateprovince = !isEmpty(data.stateprovince) ? data.stateprovince : '';

	data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : '';


	if(!Validator.isLength(data.fullname, {min: 2, max: 30})){
		errors.fullname = 'Name must be between 2 and 30 character';
	}

	if(Validator.isEmpty(data.fullname)){
		errors.fullname = 'FullName field is required';
	}

	if(Validator.isEmpty(data.email)){
		errors.email = 'Email field is required';
	}

	if(!Validator.isEmail(data.email)){
		errors.email = 'Email is Invalid';
	}

	if(Validator.isEmpty(data.zipcode)){
		errors.zipcode = 'Zip code field is required';
	}

	if(!Validator.isLength(data.zipcode, {min: 1, max: 6})){
		errors.zipcode = 'Zip code must be at least 6 characters';
	}

	if(Validator.isEmpty(data.addressline1)){
		errors.addressline1 = 'Address Line 1 field is required';
	}

	if(!Validator.isLength(data.addressline1, {min: 3, max: 30})){
		errors.addressline1 = 'Address Line 1 must be at least 30 characters';
	}

	if(Validator.isEmpty(data.country)){
		errors.country = 'Country field is required';
	}

	if(!Validator.isLength(data.country, {min: 3, max: 30})){
		errors.country = 'Country must be at least 30 characters';
	}
    
    if(!Validator.isLength(data.cityname, {min: 2, max: 30})){
		errors.cityname = 'City Name be between 2 and 30 character';
	}

	if(Validator.isEmpty(data.cityname)){
		errors.cityname = 'City Name field is required';
    }
    
    if(!Validator.isLength(data.stateprovince, {min: 3, max: 30})){
		errors.stateprovince = 'State-Province minimum2 should be 3 character';
	}

	if(Validator.isEmpty(data.stateprovince)){
		errors.stateprovince = 'State-Province field is required';
    }
    
    if(!Validator.isLength(data.phonenumber, {min: 10, max: 12})){
		errors.phonenumber = 'Name must be between 10 and 12 character';
	}

	if(Validator.isEmpty(data.phonenumber)){
		errors.phonenumber = 'Phone number field is required';
	}
	return {
		errors,
		isValid: isEmpty(errors) 
	}
}