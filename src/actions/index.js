export const CALL_DATA_REQUEST = 'CALL_DATA_REQUEST';
export const CALL_DATA_SUCCESS = 'CALL_DATA_SUCCESS';
export const CALL_DATA_FAILURE = 'CALL_DATA_FAILURE';

export const CALL_MATCH_REQUEST = 'CALL_MATCH_REQUEST';
export const CALL_MATCH_SUCCESS = 'CALL_MATCH_SUCCESS';
export const CALL_MATCH_FAILURE = 'CALL_MATCH_FAILURE';

export const callDataRequest = () => {
    return {
        type: CALL_DATA_REQUEST
    }
};

export const callDataSuccess = (data) => {
    return {
        type: CALL_DATA_SUCCESS,
        data
    }
};

export const callDataFailure = () => {
    return {
        type: CALL_DATA_FAILURE
    }
};

export const callMatchRequest = () => {
    return {
        type: CALL_MATCH_REQUEST
    }
};

export const callMatchSuccess = (data) => {
    return {
        type: CALL_MATCH_SUCCESS,
        data
    }
};

export const callMatchFailure = () => {
    return {
        type: CALL_MATCH_FAILURE
    }
};
