import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";
import { backURL } from "../../config/config";

const watchLogin = createSaga("LOGIN", backURL + "/api/account/login", "get");
const watchGetUser = createSaga("GET_USER", backURL + "/api/betting/game/user", "get");

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchGetUser)
  ]);
}