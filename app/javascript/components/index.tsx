import Container from "@mui/material/Container";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { OVERRIDES } from "../theme/constants";

// Create a dark theme instance.
const theme = createTheme(OVERRIDES);

document.addEventListener("turbo:load", () => {
  const mountNode = document.getElementById("rails-react-app");

  if (mountNode) {
    const root = createRoot(mountNode);
    root.render(
      <ThemeProvider theme={theme}>
        <Container sx={{ mt: 4, mb: 4 }}>
          <App />
        </Container>
      </ThemeProvider>
    );
  }
});
