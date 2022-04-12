
import {useCallback, useState} from 'react'
import Link from 'next/link';
import RanNumTest from '../src/component/RanNumTest';
import MatchTest from '../src/component/MatchTest';
import Betline from '../src/component/Betline'
import {useDispatch, useSelector} from 'react-redux';
import {Button} from "semantic-ui-react";
import {TEST_REQUEST} from "../config/event/eventName/test";

const Home = () => {
  const dispatch = useDispatch()
  const { message } = useSelector(state => state.leagueReducer)

  const [list, setList] = useState([]);

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
          <Betline list={list} />
        </a>
      </Link>
      <RanNumTest />
      {/* <MatchBetline list={match} /> */}
      <MatchTest />
      <Button onClick={onCLick}>{message}</Button>
    </div>
  )
}

export default Home