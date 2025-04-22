import { PostProps } from "../types/post";
import axiosInstance from "./client";

export const fetchPost = (id: string) => {
  return axiosInstance.get<PostProps>(`/posts/${id}`);
};
