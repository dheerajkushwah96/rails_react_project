import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "../components/posts/posts";
import PostDetails from "../components/posts/post-details";
import CreatePostForm from "../components/posts/create-post-form";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/posts/new" element={<CreatePostForm />} />
    </Routes>
  </Router>
);
