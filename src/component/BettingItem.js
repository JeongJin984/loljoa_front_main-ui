import Axios from 'axios';
import wrapper from "../store/store-wrapper";
import { TEAM_SELECT_REQUEST } from '../../config/event/eventName/matchEvent';
import { useSelector } from "react-redux";



const BettingItem = () => {
  const { teamData } = useSelector(state => state.teamReducer)
  console.log({ teamData })
  return (
    <div>
      {teamData.map((item, i) => (
        <div key={i} style={{ display: 'flex' }}>
          <div style={{ margin: 5 }}>{item.id}</div>
          <div style={{ margin: 5 }}>{item.team}</div>
          <div style={{ margin: 5 }}>{item.odds}</div>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
  async ({ req, res, ...etc }) => {
    // const cookie = req ? req.headers.cookie : '';
    // Axios.defaults.headers.Cookie = '';
    // Axios.defaults.withCredentials = true;
    // if (req) {
    store.dispatch({
      type: TEAM_SELECT_REQUEST
    })
    // }
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default BettingItem