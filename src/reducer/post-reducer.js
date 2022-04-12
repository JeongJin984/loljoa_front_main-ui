import produce from "immer";

const initialState = {
}

const postReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  })
}

export default postReducer;