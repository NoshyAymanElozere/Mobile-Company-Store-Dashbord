import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://phone-api.doctor-code.net/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
  },
});
