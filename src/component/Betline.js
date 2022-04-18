import React, { useCallback, useEffect, useState } from 'react'
import styles from '../../styles/Betline.module.css';
import { useDispatch, useSelector } from "react-redux";
import {
  addTeamData,
  GET_GAME_DATA_REQUEST
} from '../../config/event/eventName/matchEvent';
import { Accordion } from 'semantic-ui-react'

const Betline = ({ matchData }) => {

  // const { teamData } = useSelector(state => state.teamReducer)
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(-1)

  const { game } = useSelector(state => state.matchReducer)

  const handleAccordion = useCallback((index, leagueId) => (e) => {
    setActiveIndex(activeIndex === index ? -1 : index)
    if(activeIndex !== index && !matchData[index].details) {
      dispatch({
        type: GET_GAME_DATA_REQUEST,
        params: {
          leagueId
        },
        plus: {
          leagueId
        }
      })
    }
  }, [activeIndex])

  return (
    <Accordion>
      {matchData.map((item, i) => (
        <span key={item.id}>
          <Accordion.Title
            active={activeIndex === i}
            index={0}
            onClick={handleAccordion(i, item.id)}
          >
            <div className={styles.betlineWide}>
              <div className={styles.tournament}>
                <img src={'/image/LCK.png'} style={{ height: "25px" }} />
                <div>LOL Champions Korea</div>
              </div>
              <div className={styles.matchup}>
                <button className={styles.leftMatch}>
                  <img src={"/image/" + item.leagueName.split("vs")[0] + ".png"} style={{ height: "25px" }} />
                  <div className={styles.leftTeam} >{item.leagueName.split("vs")[0]}</div>
                </button>
                <div className={styles.middle}>VS</div>
                <button className={styles.rightMatch}>
                  <div className={styles.rightTeam}>{item.leagueName.split("vs")[1]}</div>
                  <img src={"/image/" + item.leagueName.split("vs")[1] + ".png"} style={{ height: "25px" }} />
                </button>
              </div>
              <div className={styles.betlineDate}>{item.startTime}</div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === i}>
            <p>
              {item.details && item.details[0].gameId}
            </p>
          </Accordion.Content>
        </span>
      ))}
    </Accordion>
  )
}

export default Betline