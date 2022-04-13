import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import leagueReducer from './league-reducer';
import modalReducer from "./modal-reducer";
import bettingReducer from "./betting-reducer";
import matchReducer from './match-reducer';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {
                ...state,
                ...action.payload,
            };
        default: {
            const combineReducer = combineReducers({
                leagueReducer,
                modalReducer,
                bettingReducer,
                matchReducer
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;