import Axios from 'axios';
import React, { useState } from "react";
import wrapper from "../src/store/store-wrapper";
import MatchBetLine from "../src/component/MatchBetline";
import BettingItem from "../src/component/BettingItem";
import { END } from "redux-saga";
import { useSelector } from "react-redux";
import { CALL_MATCH_REQUEST } from '../config/event/eventName/matchEvent';

const Betting = () => {
  const { matchData } = useSelector(state => state.matchReducer)

  return (
    <>
      <div style={{ display: "flex", border: "solid" }}>
        <div style={{ border: "solid", flex: 3 }}>
          <div style={{ textAlign: "center", margin: "30px" }}>
            <h2>LCK</h2>
          </div>
          <MatchBetLine matchData={matchData} />
        </div>
        <div style={{ border: "solid", color: "blue", flex: 1, backgroundColor: "#242737" }}>
          <div style={{ border: "solid", color: "white" }}>
            <div>click!</div>
            <BettingItem />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
  async ({ req, res, ...etc }) => {
    // const cookie = req ? req.headers.cookie : '';
    // Axios.defaults.headers.Cookie = '';
    // Axios.defaults.withCredentials = true;
    // if (req) {
    store.dispatch({
      type: CALL_MATCH_REQUEST
    })
    // }
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default Betting