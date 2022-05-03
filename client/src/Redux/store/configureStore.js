import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducers from "../reducers/userReducers";
import buildingReducer from "../reducers/buildingReducers";
import roomsReducer from "../reducers/roomReducers";
import tenantReducers from "../reducers/tenantReducers";

const configureStore = () => {
   const store = createStore(
      combineReducers({
         user: userReducers,
         buildings: buildingReducer,
         rooms: roomsReducer,
         tenants: tenantReducers,
      }),
      applyMiddleware(thunk)
   );
   return store;
};

export default configureStore;
