import React from 'react';

const RanButton = ({callDataRequest}) => {
  return (
    <input value={'Random'} type="button" onClick={callDataRequest} />
  )
}

export default RanButton;