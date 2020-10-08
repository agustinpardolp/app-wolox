import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { notification } from "./notification/notifications-reducer";
import { technologies } from "./technologies/technologies-reducer";

const allReducers = combineReducers({
  user: userReducer,
  notification,
  technologies,
});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
