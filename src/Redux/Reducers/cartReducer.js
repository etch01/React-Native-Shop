import {ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART} from '../Types';

const initialState = {
    cart:[
        
    ]
};

const cartReducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return {...state, cart:[...state.cart, action.payload]}
        case REMOVE_FROM_CART:
            return{cart:[...state.cart.filter(item => item.id != action.payload.id)]}
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
            }
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(cart=> cart.id === action.payload.id ?
                    { ...cart, quantity: action.payload.quantity} :
                    cart
                )};
        default:
            return state
    }
};

export {cartReducer};