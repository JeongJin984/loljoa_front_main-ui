import produce from "immer";

const initialState = {
}

const userReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  })
}

export default userReducer;