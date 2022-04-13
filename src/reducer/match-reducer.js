import produce from "immer";
import { CALL_MATCH_FAILURE, CALL_MATCH_SUCCESS } from "../../config/event/eventName/matchEvent";

const initialState = {
    match: Array
}

const matchReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case CALL_MATCH_SUCCESS:
                draft.match = action.data["match"];
                break;
            case CALL_MATCH_FAILURE:
                draft.match = "error";
                break;
            default:
                break;
        }
    })
}

export default matchReducer;