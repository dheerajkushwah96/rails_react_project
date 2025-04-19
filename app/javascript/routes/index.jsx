import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "../components/posts";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </Router>
);
