import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://10.234.1.125:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const saveToken = (token: string) => AsyncStorage.setItem("token", token);
export const clearToken = () => AsyncStorage.removeItem("token");
export const getToken = () => AsyncStorage.getItem("token");

export default api;
