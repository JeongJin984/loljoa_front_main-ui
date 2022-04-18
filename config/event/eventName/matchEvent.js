export const CALL_MATCH_REQUEST = 'CALL_MATCH_REQUEST';
export const CALL_MATCH_SUCCESS = 'CALL_MATCH_SUCCESS';
export const CALL_MATCH_FAILURE = 'CALL_MATCH_FAILURE';

export const TEAM_SELECT_REQUEST = 'TEAM_SELECT_REQUEST';
export const TEAM_SELECT_SUCCESS = 'TEAM_SELECT_SUCCESS';
export const TEAM_SELECT_FAILURE = 'TEAM_SELECT_FAILURE';

export const ADD_TEAM_DATA_REQUEST = 'ADD_TEAM_DATA_REQUEST';
export const ADD_TEAM_DATA_SUCCESS = 'ADD_TEAM_DATA_SUCCESS';
export const ADD_TEAM_DATA_FAILURE = 'ADD_TEAM_DATA_FAILURE';

export const DELETE_TEAM_DATA_REQUEST = 'DELETE_TEAM_DATA_REQUEST';
export const DELETE_TEAM_DATA_SUCCESS = 'DELETE_TEAM_DATA_SUCCESS';
export const DELETE_TEAM_DATA_FAILURE = 'DELETE_TEAM_DATA_FAILURE';

export const SPLIT_TEAM_NAME = 'SPLIT_TEAM_NAME';

export const ADD_TEAM_DATA = 'ADD_TEAM_DATA';

export const DELETE_TEAM_DATA = 'DELETE_TEAM_DATA';

export const splitTeamName = data => ({ type: SPLIT_TEAM_NAME, payload: data })

export const addTeamData = data => ({ type: ADD_TEAM_DATA, payload: data })
export const teamSelectRequest = () => ({ type: TEAM_SELECT_REQUEST })