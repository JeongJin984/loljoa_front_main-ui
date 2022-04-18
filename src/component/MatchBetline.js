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