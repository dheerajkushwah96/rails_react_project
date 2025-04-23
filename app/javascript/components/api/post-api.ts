import { PostFormT } from "../../posts/form-values";
import axiosInstance from "./client";

export const createPost = (data: PostFormT) => {
  return axiosInstance.post('/posts', { post: data });
};
export const fetchPost = (id: string) => {
  return axiosInstance.get<PostFormT>(`/posts/${id}`);
};

export const updatePost = (id: string, data: PostFormT) => {
  return axiosInstance.put(`/posts/${id}`, { post: data });
};
export const deletePost = (id: string) => {
  return axiosInstance.delete(`/posts/${id}`);
}
export const fetchPosts = () => {
  return axiosInstance.get<PostFormT[]>('/posts.json');
}
export const fetchPostsByPage = (page: number) => {
  return axiosInstance.get<PostFormT[]>(`/posts.json?page=${page}`);
}
export const fetchPostsByPageAndPerPage = (page: number, perPage: number) => {
  return axiosInstance.get<PostFormT[]>(`/posts.json?page=${page}&per_page=${perPage}`);
}
