import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";
import { backURL } from "../../config/config";

const watchTest = createSaga("TEST", "http://ae37ffc833def4e25ab5f3a0f433c114-905272317.ap-northeast-2.elb.amazonaws.com/init/db/", "get");

export default function* leagueSaga() {
  yield all([
    fork(watchTest)
  ]);
}