import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callMatchRequest } from '../actions';

const MatchButton = () => {
  return (
    <input value={'MatchBtn'} type="button" onClick={callMatchRequest} />
  )
}

export default MatchButton;