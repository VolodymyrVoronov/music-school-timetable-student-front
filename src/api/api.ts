import axios from "axios";

const URL = `http://localhost:5000`;

const instanceAPI = axios.create({
  baseURL: URL,
});
