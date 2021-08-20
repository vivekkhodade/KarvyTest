import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import CardDataReducer from '../reducers/carddatareducer'
// eslint-disable-next-line
export default (history) => combineReducers({
  router: connectRouter(history),
    cardReducer:CardDataReducer
});
 





