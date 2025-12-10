import Axios from "axios";
import Cookies from "js-cookie";
import routes from "./routes";
import { refreshTokenRequest } from "@/components/pages/auth/refreshToken/request";

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
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN_NAME);
      if (refreshToken) {
        try {
          const refreshResponse = await refreshTokenRequest({
            token: refreshToken,
          });
          Cookies.set(
            import.meta.env.VITE_TOKEN_NAME,
            refreshResponse.accessToken
          );
          if ((refreshResponse as any).refreshToken) {
            Cookies.set(
              import.meta.env.VITE_REFRESH_TOKEN_NAME,
              (refreshResponse as any).refreshToken
            );
          }
          const originalConfig = error.config;
          originalConfig.headers.authorization = `Bearer ${refreshResponse.accessToken}`;
          return axios(originalConfig);
        } catch (refreshError) {
          Cookies.remove(import.meta.env.VITE_TOKEN_NAME);
          Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN_NAME);
          window.location.href = routes?.Auth?.Login;
        }
      } else {
        Cookies.remove(import.meta.env.VITE_TOKEN_NAME);
        window.location.href = routes?.Auth?.Login;
      }
    }

    return Promise.reject(error);
  }
);
