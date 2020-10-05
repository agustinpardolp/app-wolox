import axios from "axios";

import { LOGIN_ENDPOINT } from "../constants";

const login = async (username, password, rememberUser) => {
  let response = await axios.post(LOGIN_ENDPOINT, {
    email: username,
    password: password,
  });

  if (response && response.status === 200) {
    if (rememberUser) {
      localStorage.setItem("token_data", JSON.stringify(response.data));
      return response;
    } else return response;
  } else throw Error("invalid user");
};

const logout = (dispatchToStore) => {
  localStorage.removeItem("token_data");
  return dispatchToStore;
};

export const userService = { login, logout };
