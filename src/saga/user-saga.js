import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";

const watchLogin = createSaga("LOGIN", "http://aefb1dc6a974c4ec69a3d5e7caa0b442-1183511394.ap-northeast-2.elb.amazonaws.com/api/account/login", "get");
const watchGetUser = createSaga("GET_USER", "http://aefb1dc6a974c4ec69a3d5e7caa0b442-1183511394.ap-northeast-2.elb.amazonaws.com/api/betting/game/user", "get");

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchGetUser)
  ]);
}