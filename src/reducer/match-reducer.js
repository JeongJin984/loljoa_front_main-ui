import produce from "immer";
import { CALL_MATCH_SUCCESS, CALL_MATCH_FAILURE, SPLIT_TEAM_NAME } from "../../config/event/eventName/matchEvent"
const initialState = {
  matchData: [
    // {
    //   "id": "001",
    //   "tournament": "LCK",
    //   "leftTeam": "T1",
    //   "leftOdds": "1.26",
    //   "rightTeam": "젠지",
    //   "rightOdds": "3.85",
    //   "betlineDate": "3월 30일 18:00"
    // },
    // {
    //   "id": "002",
    //   "tournament": "LCK",
    //   "leftTeam": "농심 레드포스",
    //   "leftOdds": "1.35",
    //   "rightTeam": "광동 프릭스",
    //   "rightOdds": "2.99",
    //   "betlineDate": "3월 31일 18:00"
    // },
    // {
    //   "id": "003",
    //   "tournament": "LCK",
    //   "leftTeam": "kt롤스터",
    //   "leftOdds": "1.73",
    //   "rightTeam": "DRX",
    //   "rightOdds": "2.11",
    //   "betlineDate": "4월 01일 18:00"
    // },
    // {
    //   "id": "004",
    //   "tournament": "LCK",
    //   "leftTeam": "담원 기아",
    //   "leftOdds": "1.13",
    //   "rightTeam": "한화생명",
    //   "rightOdds": "6.07",
    //   "betlineDate": "4월 04일 18:00"
    // },
    // {
    //   "id": "005",
    //   "tournament": "LCK",
    //   "leftTeam": "광동 프릭스",
    //   "leftOdds": "2.29",
    //   "rightTeam": "젠지",
    //   "rightOdds": "1.57",
    //   "betlineDate": "4월 05일 18:00"
    // }
    {
      "id": 999,
      "leagueName": "TEAM1vsTEAM2",
      "weekNum": "Week 1",
      "startTime": "2022-01-16 05:00",
      "endTime": null
    }
  ]
}

const matchReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CALL_MATCH_SUCCESS:
        draft.matchData = action.data.schedules;
        break;
      case CALL_MATCH_FAILURE:
        draft.message = "error";
        break;
      // case SPLIT_TEAM_NAME:
      //   draft.matchData
      default:
        break;
    }
  })
}

export default matchReducer;