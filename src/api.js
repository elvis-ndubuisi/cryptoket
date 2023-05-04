import axios from "axios";
import { user } from "./store";

let refToken = JSON.parse(sessionStorage.getItem("refreshToken"));

const baseURL = "http://localhost:8080";

const API = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

let shouldRefresh = false;
API.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401 && !shouldRefresh) {
      shouldRefresh = true; // start request;
      const refResponse = await API.post("/cryptoket/auth/refresh", {
        "refresh-token": refToken,
      });

      if (refResponse.status === 200) {
        API.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${refResponse.data.accessToken}`;

        return API(error.config);
      }
    }
    shouldRefresh = false;
    return error;
  }
);

// const API_PRIVATE = axios.create({
//   baseURL: baseURL,
//   withCredentials: true,
//   headers: {
//     Authorization: `Bearer: ${tokens}`,
//   },
// });

export default API;
