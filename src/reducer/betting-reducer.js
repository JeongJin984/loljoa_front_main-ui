import produce from "immer";

const initialState = {
}

const bettingReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  })
}

export default bettingReducer;