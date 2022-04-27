import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";
import { backURL } from "../../config/config";

const watchMatch = createSaga("CALL_MATCH", backURL + "/api/league/schedule/all", "get");
const watchGetGameData = createSaga("GET_GAME_DATA", backURL + "/api/betting/game/data", "get")
const watchBetting = createSaga("BETTING", backURL + "/api/betting/game/betting", "get")
const watchAddTeam = createSaga("ADD_TEAM_DATA", "http://localhost:4321/team", "get")

// const watchTeamSelect = createSaga("TEAM_SELECT", "http://localhost:4321/select", "get")
export default function* bettingSaga() {
  yield all([
    fork(watchMatch),
    fork(watchAddTeam),
    fork(watchGetGameData),
    fork(watchBetting)
    // fork(watchTeamSelect)
  ]);
}