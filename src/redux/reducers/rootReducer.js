import { combineReducers } from "redux";

import channelsReducer from './channelsReducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
});

export default rootReducer;