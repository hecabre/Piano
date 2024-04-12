import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}/api/`,
  withCredentials: true,
});

export default instance;
