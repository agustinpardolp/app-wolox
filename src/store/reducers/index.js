import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { notification } from "./notification/notifications-reducer";

const allReducers = combineReducers({
  user: userReducer,
  notification,
});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
