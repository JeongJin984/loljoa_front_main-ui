import { all, fork } from 'redux-saga/effects';

import leagueSaga from './league-saga';
import postSaga from "./betting-saga";
import matchSaga from "./match-saga";

import axios from 'axios';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(leagueSaga),
    fork(postSaga),
    fork(matchSaga)
  ]);
}