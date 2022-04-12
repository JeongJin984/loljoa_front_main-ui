import {all, fork} from 'redux-saga/effects';
import createSaga from "../utils/createSaga";
import {backURL} from "../../config/config";

const watchTest = createSaga("TEST", backURL + "/init/db/", "get");

export default function* leagueSaga() {
  yield all([
    fork(watchTest)
  ]);
}