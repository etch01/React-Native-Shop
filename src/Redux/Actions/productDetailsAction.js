import { PRODUCT_SUCCESS } from '../Types';

//Actions for types
export function setCurrentProduct(payload,callback) {
    callback();
    return {type: PRODUCT_SUCCESS,payload}
};