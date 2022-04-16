import Axios from 'axios';
import wrapper from "../store/store-wrapper";
import { TEAM_SELECT_REQUEST, teamSelectRequest } from '../../config/event/eventName/matchEvent';
import { useDispatch, useSelector } from "react-redux";



const BettingItem = () => {
  const { teamData } = useSelector(state => state.teamReducer)
  console.log({ teamData })
  return (
    <div>
      {teamData?.map((item, i) => (
        <div key={i} style={{ display: 'flex', border: "solid" }}>
          <div style={{ margin: 5 }}>{item.id}</div>
          <div style={{ margin: 5 }}>{item.team}</div>
          <div style={{ margin: 5 }}>{item.odds}</div>
        </div>
      ))}
    </div>
  )
}


export default BettingItem