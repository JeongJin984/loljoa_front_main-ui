
import Axios from 'axios';
import { useCallback, useState } from 'react'
import Link from 'next/link';
import MatchBetline from '../src/component/MatchBetline';
import wrapper from "../src/store/store-wrapper";
import { END } from "redux-saga";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "semantic-ui-react";
import { TEST_REQUEST } from "../config/event/eventName/test";
import { CALL_MATCH_REQUEST } from '../config/event/eventName/matchEvent';

const Home = () => {
  const dispatch = useDispatch()
  const { matchData } = useSelector(state => state.matchReducer)
  const { message } = useSelector(state => state.leagueReducer)
  const onCLick = useCallback(() => {
    dispatch({
      type: TEST_REQUEST
    })
  }, [dispatch])

  return (
    <div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <h2>League of Legends
          /
          Most Popular</h2>
      </div>
      <Link href="/betting">
        <a>
          <MatchBetline matchData={matchData} />
        </a>
      </Link>
      <Button onClick={onCLick}>{message}</Button>
    </div>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(store =>
  async ({ req, res, ...etc }) => {
    const cookie = req ? req.headers.cookie : '';
    Axios.defaults.headers.Cookie = '';
    Axios.defaults.withCredentials = true;
    // if (req) {
    //   store.dispatch({
    //     type: CALL_MATCH_REQUEST
    //   })
    // }
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);


export default Home;