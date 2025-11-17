import Axios from "axios";
import Cookies from "js-cookie";
import routes from "./routes";

function authRequestInterceptor(config: {
  headers: { authorization: string; Accept: string };
}) {
  const token = Cookies.get(import.meta.env.VITE_TOKEN_NAME);
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axios.interceptors.request.use(authRequestInterceptor as any);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove(import.meta.env.VITE_TOKEN_NAME);
      window.location.href = routes?.Auth?.Login;
    }
    return Promise.reject(error);
  }
);
