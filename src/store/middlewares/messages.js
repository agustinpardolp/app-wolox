import users from "../actions/userActions/types";

export const successMessages = {
  [users.LOGIN_USER_SUCCESS]: "Sesion iniciada con exito.",
};
export const failureMessages = {
  [users.LOGIN_USER_FAILURE]: "Error al iniciar sesion.",
};
