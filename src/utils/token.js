import { TOKEN_KEY } from "./constant";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const revokeToke = () => {
  localStorage.removeItem(TOKEN_KEY);
};
