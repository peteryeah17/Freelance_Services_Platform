import axios from "axios";
//d
const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

export default newRequest;