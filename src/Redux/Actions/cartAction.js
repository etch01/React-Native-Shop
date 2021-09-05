import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART } from '../Types';

export function addToCart(payload) {
    return (dispatch) =>{
        dispatch({
            type:ADD_TO_CART, 
            payload    
      })
    }     
};

export const removeItem = (payload)  => dispatch =>{
    dispatch({
        type: REMOVE_FROM_CART,
        payload
    })
}

export const clearCart = () => dispatch => {
    dispatch({
        type: CLEAR_CART
    })
}

export const updateQuantity = (payload)  => dispatch => {
    dispatch({
        type: UPDATE_CART_QUANTITY,
        payload
    })
}