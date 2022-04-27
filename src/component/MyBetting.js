import React from "react";
import styles from '../../styles/MyBetting.module.css';
import { useSelector, useDispatch } from "react-redux";

const MyBetting = (userData) => {
  const dispatch = useDispatch()

  const { matchData } = useSelector(state => state.matchReducer)



  return (
    <div>
      {userData.user.bettingData?.map((item, i) => (
        <div className={styles.bettingWide} >
          <div className={styles.matchData} >
            <img src={'/image/LCK.png'} style={{ height: "15px" }} />
            <div>{item.leftTeam} 대 {item.rightTeam}</div>
          </div>
          <div className={styles.predictWide}>
            <img className={styles.logo} src={"/image/" + item.choice + ".png"} />
            <div className={styles.choice}>
              <div style={{ display: "flex", fontSize: "20px" }}>{item.choice}</div>
              <div style={{ display: "flex", fontSize: "10px", color: "#F6BE23" }}>예측</div>
            </div>
            <div className={styles.odds}>{item.odd}</div>
          </div>
          <div className={styles.pintWide}>
            <div className={styles.bettingPoint}>{item.point}P 배팅</div>
            <div className={styles.rewardPoint}>{Math.round(Number(item.point) * Number(item.odd))}P 예상</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyBetting