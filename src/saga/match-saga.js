import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";

const watchMatch = createSaga("CALL_MATCH", "http://localhost:4321/match", "get");

export default function* bettingSaga() {
    yield all([
        fork(watchMatch)
    ]);
}