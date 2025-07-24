import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/app/api"
      : "https://chat-application-kappa-nine.vercel.app/app/api",
  withCredentials: true,
});
