import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const configs = {
  baseURL: import.meta.env.VITE_BASE_API_URL,
};

export const axiosFetch = (addHeadersToRequest = true) => {
  const YOUR_TOKEN = localStorage.getItem("hotelBookSystemJWT");

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${YOUR_TOKEN}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  if (addHeadersToRequest) {
    return axiosInstance;
  }
  return axios;
};
