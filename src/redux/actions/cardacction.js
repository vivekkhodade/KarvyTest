import {ADD_UPDATE_CARD_DATA} from '../constants/constants';

export const addUpdateCardData = (data)=>{
    return{
        type:ADD_UPDATE_CARD_DATA,
        payload:data
    };
}