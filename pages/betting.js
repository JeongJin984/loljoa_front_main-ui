import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import {
    Button
} from "semantic-ui-react"
import BetLine from '../src/component/Betline';
import BettingBar from '../src/component/Bettingbar';

const Betting = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false)
    const [list, setList] = useState([]);

    return (
        <>
            <div style={{ textAlign: "right", margin: "20px" }}>
                {isLogin && <Button>Logout</Button>}
            </div>
            <div style={{ display: "flex", border: "solid" }}>
                <div style={{ border: "solid", flex: 3 }}>
                    <div style={{ textAlign: "center", margin: "30px" }}>
                        <h2>오늘</h2>
                    </div>
                    <BetLine list={list} />
                    <div style={{ textAlign: "center", margin: "30px" }}>
                        <h2>내일</h2>
                    </div>
                    <BetLine list={list} />
                    <div style={{ textAlign: "center", margin: "30px" }}>
                        <h2>다음 주</h2>
                    </div>
                    <BetLine list={list} />
                </div>
                <div style={{ border: "solid", color: "blue", flex: 1, backgroundColor: "#242737" }}>
                    <BettingBar />
                </div>
            </div>
        </>
    )
}

export default Betting