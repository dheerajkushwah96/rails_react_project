import { UserProps } from "../types/user";
import axiosInstance from "./client";

export const fetchUser = (id: number) => {
  return axiosInstance.get<UserProps>(`/users/${id}`);
};

export const fetchCurrentUser = () => {
  return axiosInstance.get<UserProps>(`/authenticate_user.json`);
};
