import produce from "immer";
import { TEST_FAILURE, TEST_SUCCESS, ADD_TEAM_DATA, DELETE_TEAM_DATA, } from "../../config/event/eventName/matchEvent"


const initialState = {
  teamData: [{ "id": "0", "team": "teamName", "odds": "0" }, { "id": "0", "team": "teamName", "odds": "0" }]
}

const teamReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case TEST_SUCCESS:
        draft.message = action.data;
        break;
      case TEST_FAILURE:
        draft.message = "error";
        break;
      case ADD_TEAM_DATA:
        if (draft.teamData.includes(action.payload)) {
          draft.teamData.slice(-1);
        }
        else {
          draft.teamData.push(action.payload);
        }
        break;
      default:
        break;
    }
  })
}

export default teamReducer;