import {PRODUCT_SUCCESS} from '../Types';

const initialState = {
    productDetails:{},
};

const productReducer = (state=initialState,action)=>{
    switch (action.type){
        case PRODUCT_SUCCESS:
            return {productDetails:action.payload}
        default:
            return state
    }
};

export {productReducer};