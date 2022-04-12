import React from 'react'
import RanButton from './RanButton'

const RanNumTest = ({number}) => {
  return (
    <div className="RanNumTest" style={{ textAlign: "center", margin: "30px" }}>
      <span>{number}</span><br />
      <RanButton />
    </div>
  );
}

export default RanNumTest;
