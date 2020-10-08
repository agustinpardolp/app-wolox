import axios from "axios";
import { TECH_ENDPOINT } from "../constants";

const fetchTechnologies = async () => {
  let response = await axios.get(TECH_ENDPOINT);
  return response;
};
export const technologieServices = { fetchTechnologies };
