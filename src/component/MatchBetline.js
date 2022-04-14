import React, { useCallback, useEffect, useState } from 'react'
import styles from '../../styles/Betline.module.css';
import { useDispatch, useSelector } from "react-redux";
import { TEAM_SELECT_REQUEST, ADD_TEAM_DATA_SUCCESS, DELETE_TEAM_DATA } from '../../config/event/eventName/matchEvent';

const MatchBetline = ({ matchData }) => {

  const dispatch = useDispatch()

  const leftClick = (item) => {
    const leftTeamData = { id: item.id, team: item.leftTeam, odds: item.leftOdds }
    const addLeftData = leftTeamData => ({ type: ADD_TEAM_DATA_SUCCESS, payload: leftTeamData })
    addLeftData(leftTeamData)
    console.log(leftTeamData)
    console.log({ teamData })
  }

  const rightClick = (item) => {
    const rightTeamData = { id: item.id, team: item.rightTeam, odds: item.rightOdds }
    const addRightData = rightTeamData => ({ type: ADD_TEAM_DATA_SUCCESS, payload: rightTeamData })
    addRightData(rightTeamData)
    console.log(rightTeamData)
    console.log({ teamData })
  }

  const { teamData } = useSelector(state => state.teamReducer)




  return (
    <div>
      {matchData.map((item, i) => (
        <div key={i} className={styles.betlineWide}>
          <div className={styles.tournament}>{item.tournament}</div>
          <div className={styles.matchup}>
            <button className={styles.leftMatch} onClick={() => leftClick(item)}>
              <div className={styles.leftTeam} >{item.leftTeam}</div>
              <div className={styles.leftOdds} >{item.leftOdds}</div>
            </button>
            <div className={styles.middle}>VS</div>
            <button className={styles.rightMatch} onClick={() => rightClick(item)}>
              <div className={styles.rightOdds}>{item.rightOdds}</div>
              <div className={styles.rightTeam}>{item.rightTeam}</div>
            </button>
          </div>
          <div className={styles.betlineDate}>{item.betlineDate}</div>
        </div>
      ))}
    </div>
  )
}



export default MatchBetline