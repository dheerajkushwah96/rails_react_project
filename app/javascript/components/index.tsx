import React from "react";
import Container from '@mui/material/Container';
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <Container>
      <App />
    </Container>
  );
});
