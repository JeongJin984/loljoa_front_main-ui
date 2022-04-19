
import Axios from 'axios';
import { useCallback, useState } from 'react'
import Link from 'next/link';
import Betline from '../src/component/Betline';
import wrapper from "../src/store/store-wrapper";
import { END } from "redux-saga";
import { useDispatch, useSelector } from 'react-redux';
import { CALL_MATCH_REQUEST } from '../config/event/eventName/matchEvent'
import { Button, Icon } from "semantic-ui-react";
import { TEST_REQUEST } from "../config/event/eventName/test";
import BettingItem from '../src/component/BettingItem';
import {GET_USER_REQUEST} from "../config/event/eventName/userEvent";

const Home = () => {
  const dispatch = useDispatch()
  const { matchData } = useSelector(state => state.matchReducer)

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 4 }}>
        <div style={{ textAlign: "center", margin: "30px" }}>
          <h2>League of Legends
            /
            Most Popular</h2>
        </div>
        <div style={{ textAlign: "center", margin: "30px" }}>
          <Betline matchData={matchData} />
        </div>
      </div>
      <div style={{ color: "white", flex: 1, backgroundColor: "#242737" }}>

        <div style={{ display: "flex", textAlign: "center", margin: "30px" }}>
          <div>
            내 배팅
          </div>
        </div>
      </div>
    </div>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(store =>
  async ({ req, res, ...etc }) => {
    const cookie = req ? req.headers.cookie : '';
    Axios.defaults.headers.Cookie = '';
    Axios.defaults.withCredentials = true;
    // if (req) {
    store.dispatch({
      type: CALL_MATCH_REQUEST
    })
    // }

    if (cookie) {
      Axios.defaults.headers.Cookie = cookie;
      store.dispatch({
        type: GET_USER_REQUEST
      })
    }
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);


export default Home;