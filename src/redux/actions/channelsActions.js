import * as TYPES from './types';

export const getAllChannels = () =>{
    return{
        type:TYPES.READ_ALL_CHANNELS,
        // payload:{
        //     data
        // }
    }
}

export const getAllChannelsSuccess = data =>{
    return {
        type: TYPES.READ_ALL_CHANNELS_SUCCESS,
        payload: {
            data
        }
    }
}

export const getAllChannelsFailed = error =>{
    return {
        type:TYPES.READ_ALL_CHANNELS_FAILED,
        payload:{
            error
        }
    }
}

export const getSelectedChannels = () =>{
    return {
        type:TYPES.SELECTED_CHANNELS,
        // payload:{
        //     data
        // }
    }
}

export const getUnselectedChannels = () => {
    return {
        type:TYPES.GET_UNSELECTED_CHANNELS
    }
}


export const removedChannels = id =>{
    return {
        type:TYPES.REMOVED_CHANNELS,
        payload:{
            id
        }
    }
}

export const unSelectedChannels = id => {
    return {
        type:TYPES.UNSELECTED_CHANNELS,
        payload:{
            id
        }
    }
}

export const addToSelectedChannel = id => {
    return {
        type:TYPES.ADD_TO_SELECTED_CHANNELS,
        payload:{
            id
        }
    }
}

export const disabledChannel = id=>{
    return{
        type:TYPES.DISABLED_CHANNEL,
        payload:{
            id
        }
    }
}