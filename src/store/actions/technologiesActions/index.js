import types from "./types";
import { technologieServices } from "../../../services/technologieServices";

export const fetchTechnologiesRequest = () => {
  return {
    type: types.FETCH_TECHNOLOGIES_REQUEST,
  };
};
export const fetchTechnologiesSuccess = (data) => {
  return {
    type: types.FETCH_TECHNOLOGIES_SUCCESS,
    payload: { data: data },
  };
};
export const fetchTechnologiesFailure = (error) => {
  return {
    type: types.FETCH_TECHNOLOGIES_FAILURE,
    payload: error,
  };
};
export const fetchTechnologies = () => {
  return (dispatch) => {
    dispatch(fetchTechnologiesRequest());
    technologieServices
      .fetchTechnologies()
      .then((res) => dispatch(fetchTechnologiesSuccess(res.data)))
      .catch((error) => dispatch(fetchTechnologiesFailure(error)));
  };
};
