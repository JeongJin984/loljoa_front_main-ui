import produce from "immer";
import { TEST_FAILURE, TEST_SUCCESS, ADD_TEAM_DATA, DELETE_TEAM_DATA, } from "../../config/event/eventName/matchEvent"


const initialState = {
  teamData: [{ "id": 0, "startTime": "999", "team": "teamName" }]
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
        let newData = action.payload;
        // const index = Result.findIndex( (element) => element.grade === 'B');
        let ifSameId = draft.teamData.findIndex((element) => element.id === newData["id"]) > 0;
        let ifSameValue = draft.teamData.findIndex((element) => element.team === newData["team"] && element.id === newData["id"]) > 0;
        if (ifSameId) {
          if (ifSameValue) {
            draft.teamData = draft.teamData.filter((item) => item.id !== newData["id"]);
          }
          else {
            draft.teamData = draft.teamData.filter((item) => item.id !== newData["id"]);
            draft.teamData.push(action.payload);
          }
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