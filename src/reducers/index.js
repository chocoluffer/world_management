import { combineReducers } from 'redux';

import base from './base.reducer';

const rootReducer = combineReducers({
  base,
});

export default rootReducer;