import types from "./types";
import { userService } from "../../../services/userServices";

/*-------- LOGIN USER -------------- */

export const loginRequest = () => {
  return {
    type: types.LOGIN_USER_REQUEST,
  };
};
export const loginSuccess = (data) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: data,
  };
};
export const loginFailure = (error) => {
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const login = (user) => (dispatch) => {
  dispatch(loginRequest());
  return userService
    .login(user.username, user.password, user.rememberUser)
    .then((response) => dispatch(loginSuccess(response)))
    .catch((error) => dispatch(loginFailure({ error })));
};

/*-------- LOGOUT USER -------------- */
export const logoutRequest = () => {
  return {
    type: types.LOGOUT_USER_REQUEST,
  };
};
export const logoutSuccess = () => {
  console.log("logout Action");
  return {
    type: types.LOGOUT_USER_SUCCESS,
  };
};
export const logoutFailure = (error) => {
  return {
    type: types.LOGOUT_USER_FAILURE,
    payload: error,
  };
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  return userService.logout(dispatch(logoutSuccess()));
};
