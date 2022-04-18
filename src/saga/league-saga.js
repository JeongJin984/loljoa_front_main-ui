import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";
import { backURL } from "../../config/config";

const watchTest = createSaga("TEST", "http://aefb1dc6a974c4ec69a3d5e7caa0b442-1183511394.ap-northeast-2.elb.amazonaws.com/api/betting/game/data", "get");

export default function* leagueSaga() {
  yield all([
    fork(watchTest)
  ]);
}