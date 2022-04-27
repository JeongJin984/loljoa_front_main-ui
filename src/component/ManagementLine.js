import React, { useCallback, useEffect, useState } from 'react'
import styles from '../../styles/ManagementLine.module.css';
import { useDispatch, useSelector } from "react-redux";
import {
  addTeamData, BETTING_REQUEST,
  GET_GAME_DATA_REQUEST, UPDATE_GAME_DATA_REQUEST
} from '../../config/event/eventName/matchEvent';
import { Accordion } from 'semantic-ui-react'

const Betline = ({ matchData }) => {

  // const { teamData } = useSelector(state => state.teamReducer)
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(-1)
  const [point, setPoint] = useState('0')

  const { game } = useSelector(state => state.matchReducer)
  const { user } = useSelector(state => state.userReducer)

  const onChangePoint = useCallback((e) => {
    setPoint(e.target.value)
  }, [point])

  const onClickBetting = useCallback((leagueId, gameId, choiceId) => () => {
    dispatch({
      type: BETTING_REQUEST,
      params: {
        leagueId: leagueId,
        choiceId: choiceId,
        gameId: gameId,
        accountId: user.accountId,
        point: parseInt(point)
      }
    })
  }, [user, point])

  const handleAccordion = useCallback((index, leagueId) => (e) => {
    setActiveIndex(activeIndex === index ? -1 : index)
    if (activeIndex !== index && !matchData[index].details) {
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
                <div className={styles.leftMatch}>
                  <img src={"/image/" + item.leagueName.split("vs")[0] + ".png"} style={{ height: "25px" }} />
                  <div className={styles.leftTeam} >{item.leagueName.split("vs")[0]}</div>
                  <div className={styles.leftOdds} />
                </div>
                <div className={styles.middle}>VS</div>
                <div className={styles.rightMatch}>
                  <div className={styles.rightOdds} >{item.rightOdds}</div>
                  <div className={styles.rightTeam}>{item.leagueName.split("vs")[1]}</div>
                  <img src={"/image/" + item.leagueName.split("vs")[1] + ".png"} style={{ height: "25px" }} />
                </div>
              </div>
              <div className={styles.betlineDate}>{item.startTime}</div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === i}>
            <div className={styles.dataWide}>
              <div className={styles.Background}>
                <div className={styles.leftDetailData}>
                  <div className={styles.leftTotalPoint}>총 포인트 {item.details[0].choices[0].totalPoint}</div>
                  <div className={styles.leftData}>
                    최대 배팅 : {item.details[0].choices[0].biggestPoint}
                    <div className={styles.leftOdds}>
                      {
                        Math.round(item.details[0].choices[0].odd * 100) / 100
                      }
                    </div>
                  </div>
                </div>

                <div className={styles.rightDetailData}>
                  <div className={styles.rightData}>
                    <div className={styles.rightOdds}>
                      {
                        Math.round(item.details[0].choices[1].odd * 100) / 100
                      }
                    </div>
                    {item.details[0].choices[1].biggestPoint} : 최대 배팅
                  </div>
                  <div className={styles.rightTotalPoint}>{item.details && item.details[0].choices[1].totalPoint} 총 포인트</div>
                </div>
              </div>
            </div>
            <div className={styles.dataWide}>
              <div className={styles.Background}>
                {
                  user.bettingData.findIndex((element) => element.choiceId === item.details[0].choices[0].choiceId) > 0 || user.bettingData.findIndex((element) => element.choiceId === item.details[0].choices[1].choiceId) > 0
                    ? <div className={styles.bettingDone}>경기 배팅 완료</div>
                    :
                    <div className={styles.pointBetting}>
                      < a className={styles.bettingButton} onClick={onClickBetting(item.id, item.details[0].gameId, item.details[0].choices[0].choiceId)} >
                        {item.details[0].choices[0].name} 배팅
                      </a >
                      <div className={styles.pointInput}>
                        <div>사용 가능POINT : {user.point}</div>
                        <input type='number' onChange={onChangePoint} value={point} />
                      </div>
                      <a className={styles.bettingButton} onClick={onClickBetting(item.id, item.details[0].gameId, item.details[0].choices[1].choiceId)}>
                        {item.details[0].choices[1].name} 배팅
                      </a>
                    </div>
                }
              </div>
            </div>
          </Accordion.Content>
          <Accordion.Content active={activeIndex === i}>
            <div>베팅이 완료되었습니다</div>
          </Accordion.Content>
        </span>
      ))
      }
    </Accordion >
  )
}

export default Betline