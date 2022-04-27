import produce from "immer";
import { GET_USER_SUCCESS, LOGIN_SUCCESS } from "../../config/event/eventName/userEvent";
import { BETTING_SUCCESS } from "../../config/event/eventName/matchEvent";

const initialState = {
  user: {},
}

const userReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.user = action.data
        break
      case GET_USER_SUCCESS:
        draft.user = action.data
        break
      case BETTING_SUCCESS:
        draft.user.bettingData.push(action.data)
        draft.
        break
      default:
        break;
    }
  })
}

export default userReducer;