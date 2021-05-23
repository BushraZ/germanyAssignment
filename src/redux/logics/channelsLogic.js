import { createLogic } from "redux-logic";
import _ from "lodash";

import * as TYPES from "../actions/types";
import {
 //   getAllChannels,
    getAllChannelsSuccess,
    getAllChannelsFailed,
    getSelectedChannels,
    getUnselectedChannels,
    removedChannels,
    unSelectedChannels,
    addToSelectedChannel
} from '../actions/channelsActions';



const getAllChannelsLogic = createLogic({
    type: TYPES.READ_ALL_CHANNELS,
    latest: true,
    name: "readAllChannels",
    async process({ getState, action }, dispatch, done) {
      try {
      
       const res = await fetch("/data/channels.json", {
         headers: {
            "Content-type": "application/json;charset=utf-8",
            Accept: "application/json",
            },
          });
      
        const data = await res.json();   
        console.log('dddd=',data)
        dispatch(getAllChannelsSuccess(data));   
        dispatch(getSelectedChannels()); 
        dispatch(getUnselectedChannels());   
      } catch (error) {
        console.log(error)
       dispatch(getAllChannelsFailed(error))
      } finally {
        done();
      }
    },
  });

  
  
  export default [getAllChannelsLogic];