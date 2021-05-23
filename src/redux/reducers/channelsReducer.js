import * as TYPES from '../actions/types';
import {fetchItem, removedItem, fetchItemsGroup,disabledSelectedItem} from '../../utils'; 

const INIT_STATE= {
    allChannels: {
      isLoading:  false,
      data:[]
    },
    selectedChannels: [],
    unSelectedChannels: []
}

const channelsReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case TYPES.READ_ALL_CHANNELS:
            return {
                ...state,
                allChannels: {
                    ...state.allChannels,
                    isLoading:true,
                    data:[],
                    error:null
                }
            };
        case TYPES.READ_ALL_CHANNELS_SUCCESS:
            return {
                ...state,
                allChannels:{
                    ...state.allChannels,
                    data:action.payload.data,
                    error:null,
                    isLoading:false
                }
            };
        case TYPES.READ_ALL_CHANNELS_FAILED:
            return {
                ...state,
                allChannels:{
                    ...state.allChannels,
                    error:action.payload.error
                }
            };
        case TYPES.SELECTED_CHANNELS:
            return {
                ...state,
                selectedChannels: fetchItemsGroup("selected",state.allChannels.data,1)
            };
        case TYPES.GET_UNSELECTED_CHANNELS:
            return {
                ...state,
                unSelectedChannels: fetchItemsGroup("selected",state.allChannels.data,0)
            };    
        case TYPES.ADD_TO_SELECTED_CHANNELS:
            return {
                ...state,
                selectedChannels: [...state.selectedChannels,fetchItem(action.payload.id,state.allChannels.data)],
                unSelectedChannels: removedItem(action.payload.id,state.unSelectedChannels)
            };
        case TYPES.DISABLED_CHANNEL:  
            return {
                ...state,
                selectedChannels:disabledSelectedItem(action.payload.id,state.selectedChannels)
            }  
        default:
            return state;
    }
}

export default channelsReducer;