import Axios from 'axios';
import React from "react";
import wrapper from "../src/store/store-wrapper";
import MatchBetLine from "../src/component/MatchBetline";
import BettingTab from '../src/component/BettingTab';
import { END } from "redux-saga";
import { useSelector } from "react-redux";
import { CALL_MATCH_REQUEST } from '../config/event/eventName/matchEvent';

const Betting = () => {
    const match = useSelector(state => state.matchReducer)

    return (
        <>
            <div style={{ display: "flex", border: "solid" }}>
                <div style={{ border: "solid", flex: 3 }}>
                    <div style={{ textAlign: "center", margin: "30px" }}>
                        <h2>오늘</h2>
                    </div>
                    <MatchBetLine list={match} />
                </div>
                <div style={{ border: "solid", color: "blue", flex: 1, backgroundColor: "#242737" }}>
                    <BettingTab />
                </div>

            </div>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async ({ req, res, ...etc }) => {
        const cookie = req ? req.headers.cookie : '';
        Axios.defaults.headers.Cookie = '';
        Axios.defaults.withCredentials = true;
        if (req) {
            store.dispatch({
                type: CALL_MATCH_REQUEST
            })
        }
        store.dispatch(END);
        await store.sagaTask.toPromise();
    }
);

export default Betting