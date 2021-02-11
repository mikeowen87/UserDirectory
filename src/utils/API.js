import axios from "axios";

export function populateEmployees() {
  return axios.get("https://randomuser.me/api/?results=10");
};


