import { UserProps } from "../types/user";
import axiosInstance from "./client";

export const fetchUser = (id: number) => {
  return axiosInstance.get<UserProps>(`/api/v1/users/${id}`);
};

export const fetchCurrentUser = () => {
  return axiosInstance.get<UserProps>(`/api/v1/authenticate_user.json`);
};
