import { ADD_UPDATE_CARD_DATA } from "../constants/constants";

const INIT_STATE = {
  postData:[]
};
// eslint-disable-next-line
export default (state = INIT_STATE, action) => { // NOSONAR
  if(action.type === ADD_UPDATE_CARD_DATA){
    return {
      ...state,
      ...action.payload,
    };
  }else{
    return state;
  }  
};
