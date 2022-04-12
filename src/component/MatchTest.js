import React from 'react'
import { connect } from 'react-redux'
import MatchBtn from './MatchBtn'

const MatchTest = () => {
  return (
    <div className="MatchTest" style={{ textAlign: "center", margin: "30px" }}>
      {/* <span>{this.props.match}</span><br /> */}
      {/* <MatchBetline list={this.props.match} /> */}
      <MatchBtn />
    </div>
  );
}

export default MatchTest;
