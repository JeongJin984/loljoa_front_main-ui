import produce from "immer";
import { TEAM_SELECT_SUCCESS, TEAM_SELECT_FAILURE, ADD_TEAM_DATA_SUCCESS, DELETE_TEAM_DATA, ADD_TEAM_DATA_FAILURE } from "../../config/event/eventName/matchEvent"


const initialState = {
  teamData: [{ "id": "0", "team": "teamName", "odds": "0" }, { "id": "0", "team": "teamName", "odds": "0" }]
}

const teamReducer = (state = initialState, action) => {
  let copyState = [state];

  switch (action.type) {
    case TEAM_SELECT_SUCCESS:
      copyState.message = action.data;
      return copyState;
    case TEAM_SELECT_FAILURE:
      copyState.message = "ERROR";
      return copyState;
    case ADD_TEAM_DATA_SUCCESS:
      copyState.push(action.payload);
      return copyState;
    case ADD_TEAM_DATA_FAILURE:
      copyState.message = "ERROR";
    default:
      return state;
  }
}

export default teamReducer;