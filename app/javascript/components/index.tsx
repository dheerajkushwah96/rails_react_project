import React from "react";
import Container from '@mui/material/Container';
import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "./header";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <App />
      </Container>
    </>
  );
});
