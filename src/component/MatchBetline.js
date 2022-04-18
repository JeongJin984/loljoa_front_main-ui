import React, { useCallback, useEffect, useState } from 'react'
import styles from '../../styles/Betline.module.css';
import { useDispatch, useSelector } from "react-redux";
import { teamSelectRequest, TEAM_SELECT_REQUEST, addTeamData, DELETE_TEAM_DATA } from '../../config/event/eventName/matchEvent';

const MatchBetline = ({ matchData }) => {

  // const { teamData } = useSelector(state => state.teamReducer)
  const dispatch = useDispatch()
  const onAddTeamData = (data) => dispatch(addTeamData(data))

  const leftClick = (item) => {
    const leftTeamData = { "id": item.id, "team": item.leftTeam, "odds": item.leftOdds }
    onAddTeamData(leftTeamData)
    console.log({ leftTeamData })
  }

  const rightClick = (item) => {
    const rightTeamData = { "id": item.id, "team": item.rightTeam, "odds": item.rightOdds }
    onAddTeamData(rightTeamData)
    console.log({ rightTeamData })
  }




  return (
    <div>
      {matchData.map((item, i) => (
        <div key={i} className={styles.betlineWide}>
          <div className={styles.matchup}>
            <button className={styles.leftMatch} onClick={() => leftClick(item)}>
              <div className={styles.leftTeam} >{item.leagueName.split("vs")[0]}</div>
            </button>
            <div className={styles.middle}>VS</div>
            <button className={styles.rightMatch} onClick={() => rightClick(item)}>
              <div className={styles.rightTeam}>{item.leagueName.split("vs")[0]}</div>
            </button>
          </div>
          <div className={styles.betlineDate}>{item.startTime}</div>
        </div>
      ))}
    </div>
  )
}



export default MatchBetline