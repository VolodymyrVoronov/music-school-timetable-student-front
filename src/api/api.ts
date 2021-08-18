import axios from "axios";

const URL = `http://localhost:5000`;

const instanceAPI = axios.create({
  baseURL: URL,
});

const fetchTeachers = () => instanceAPI.get("/user");

export { fetchTeachers };
