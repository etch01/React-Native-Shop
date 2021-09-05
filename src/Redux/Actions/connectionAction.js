//Types to trigger reducer cases
const UPDATE_CONNECTION_STATUS = 'UPDATE_CONNECTION_STATUS';
const UPDATE_CONNECTION_TYPE = 'UPDATE_CONNECTION_TYPE';

export {
  UPDATE_CONNECTION_STATUS,
  UPDATE_CONNECTION_TYPE
}

//Actions for types
export function updateConnectionStatus(payload) {
    return {type: UPDATE_CONNECTION_STATUS,payload}
};
