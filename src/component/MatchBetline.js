import React, { useCallback, useEffect, useState } from 'react'
import styles from '../../styles/Betline.module.css';
import { useDispatch, useSelector } from "react-redux";
import {
  addTeamData,
  GET_GAME_DATA_REQUEST
} from '../../config/event/eventName/matchEvent';
import { Accordion } from 'semantic-ui-react'

const MatchBetline = ({ matchData }) => {

  // const { teamData } = useSelector(state => state.teamReducer)
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0)

  const {game}  = useSelector(state => state.matchReducer)

  const handleAccordion = useCallback((index, id) => (e) => {
    setActiveIndex(activeIndex === index ? -1 : index)
    dispatch({
      type: GET_GAME_DATA_REQUEST,
      params: {
        leagueId: id
      }
    })
  }, [activeIndex])

  return (
    <Accordion>
      {matchData.map((item, i) => (
        <span>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleAccordion(i, item.id)}
          >
            <div  key={item.id} className={styles.betlineWide}>
              <div className={styles.tournament}>
                <img src={'/image/LCK.png'} style={{ height: "25px" }} />
                <div>LOL Champions Korea</div>
              </div>
              <div className={styles.matchup}>
                <button className={styles.leftMatch}>
                  <img src={"/image/" + item.leagueName.split("vs")[0] + ".png"} style={{ height: "25px" }}/>
                  <div className={styles.leftTeam} >{item.leagueName.split("vs")[0]}</div>
                </button>
                <div className={styles.middle}>VS</div>
                <button className={styles.rightMatch}>
                  <div className={styles.rightTeam}>{item.leagueName.split("vs")[1]}</div>
                  <img src={"/image/" + item.leagueName.split("vs")[1] + ".png"} style={{ height: "25px" }}/>
                </button>
              </div>
              <div className={styles.betlineDate}>{item.startTime}</div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === i}>
            <p>
              {game.length > 0 && game[0].gameId}
            </p>
          </Accordion.Content>
        </span>
      ))}
    </Accordion>
  )
}



export default MatchBetline