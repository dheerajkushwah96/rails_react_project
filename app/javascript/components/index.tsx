import React from "react";
import Container from "@mui/material/Container";
import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "./header";

document.addEventListener("turbo:load", () => {
  const mountNode = document.getElementById("rails-react-app");

  if (mountNode) {
    const root = createRoot(mountNode);
    root.render(
      <>
        <Header />
        <Container sx={{ mt: 4, mb: 4 }}>
          <App />
        </Container>
      </>
    );
  }
});
