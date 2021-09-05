import {UPDATE_CONNECTION_TYPE,UPDATE_CONNECTION_STATUS} from '../Actions/connectionAction';

const initialState = {
    online:true,
    connectionType:null,
};

const connectionReducer = (state=initialState,action)=>{
    switch (action.type){
        case UPDATE_CONNECTION_TYPE:
            return {connectionType:action.payload}
        case UPDATE_CONNECTION_STATUS:
            // const {online} = action.payload
            return {online:action.payload}
        default:
            return state
    }
};

export {connectionReducer};