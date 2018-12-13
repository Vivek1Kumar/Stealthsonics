import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, GER_SHIPPING } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const modelType = (modelTypeData, history) => dispatch => {
  axios
    .post('/api/user/admin/modelc2/c2', modelTypeData)
    .then(res => history.push('/modeltype'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// export const shippingItem = (shippingData, history) => dispatch => {
//   axios
//     .post('/api/user/admin/modelc2/c2', shippingData)
//     .then(res => history.push('/shippingItem'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };


export const OrderDetail = (checkPay, history) => dispatch => {
  axios
    .post('/api/user/admin/check/pay', checkPay)
    .then(res => history.push('/shipping'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const shippingItem = (shippingOrder, history) => dispatch => {
  axios
    .post('/api/user/item/checkout', shippingOrder)
    .then(res => history.push('/success'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const shippingItemData = (shippingOrder, history) => dispatch => {
  axios
    .get('/api/user/item/checkout')
    .then(res => history.push('/success'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const reviewSpecification = (newReview, history) => dispatch => {
  //console.log("review data items")
  axios
    .post('api/user/specifications/specifications', newReview)
    .then(res => history.push('/shipping'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const userPayments = (userPay, history) => dispatch => {
  //console.log("review data items")
  axios
    .post('/api/users/check', userPay)
    .then(res => history.push('/home'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};



