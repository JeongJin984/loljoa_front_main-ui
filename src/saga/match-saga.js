import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";

const watchMatch = createSaga("CALL_MATCH", "http://localhost:4321/match", "get");

const watchAddTeam = createSaga("ADD_TEAM_DATA", "http://localhost:4321/team", "get")

const watchTeamSelect = createSaga("TEAM_SELECT", "http://localhost:4321/select", "get")
export default function* bettingSaga() {
  yield all([
    fork(watchMatch),
    fork(watchAddTeam),
    fork(watchTeamSelect)
  ]);
}