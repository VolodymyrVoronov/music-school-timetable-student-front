import axios from "axios";

const URL = `http://localhost:5000`;

const instanceAPI = axios.create({
  baseURL: URL,
});

const fetchTeachers = () => instanceAPI.get("/user");
const fetchTimetable = (data: { teacherId: string; date: string }) =>
  instanceAPI.post("/timetable/getTeachersTimetable", data);

export { fetchTeachers, fetchTimetable };
