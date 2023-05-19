import axios from "axios";
import { user } from "./store";

let refToken = JSON.parse(sessionStorage.getItem("refreshToken"));

const baseURL = "http://localhost:8080/cryptoket";

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
    if (
      (error.response.status === 403 || error.response.status === 401) &&
      !shouldRefresh
    ) {
      shouldRefresh = true; // start request;
      try {
        const refResponse = await API.post("/user/auth/refresh", {
          refreshToken: refToken,
        });

        if (refResponse.status === 200) {
          API.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${refResponse.data.accessToken}`;

          return API(error.config);
        }
      } catch (error) {
        console.log("refresh token failed");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("refreshToken");
        user.set(null);
        return Promise.reject(error);
      }
    }
    shouldRefresh = false; // Ends request after first execution

    return Promise.reject(error);
  }
);

export default API;
