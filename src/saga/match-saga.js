import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";

const watchMatch = createSaga("CALL_MATCH", "http://aefb1dc6a974c4ec69a3d5e7caa0b442-1183511394.ap-northeast-2.elb.amazonaws.com/api/league/schedule/all", "get");
const watchGetGameData = createSaga("GET_GAME_DATA", "http://aefb1dc6a974c4ec69a3d5e7caa0b442-1183511394.ap-northeast-2.elb.amazonaws.com/api/betting/game/data", "get")
const watchBetting = createSaga("BETTING", "http://aefb1dc6a974c4ec69a3d5e7caa0b442-1183511394.ap-northeast-2.elb.amazonaws.com/api/betting/game/betting", "get")
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