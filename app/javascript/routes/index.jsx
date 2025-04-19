import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "../components/PostList";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts" element={<PostList />} />
    </Routes>
  </Router>
);
