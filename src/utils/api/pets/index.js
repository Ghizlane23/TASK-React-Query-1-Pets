import axios from "axios";

export function list() {
  return axios.get("https://pets-react-query-backen.herokuapp.com/pets");
}
export function adopt() {
  return axios.get("https://pets-react-query-backen.herokuapp.com/adopt");
}
