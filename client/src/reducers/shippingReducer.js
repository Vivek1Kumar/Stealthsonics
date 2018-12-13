import { GET_SHIPPING, SET_CURRENT_USER } from '../actions/types';
const initialState = {
	shipping: null,
	//profiles: null,
	//loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		
			case GET_SHIPPING:
				return {
					...state,
					shipping: action.payload,
					loading: false
				}
			case SET_CURRENT_USER:
				return {
					...state,
					shipping: null
				}
		default: 
			return state;
	}
}