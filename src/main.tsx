import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { configureAppStore } from "./app-store/configure-store.ts";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";
import { CssBaseline } from "@mui/material";

const store = configureAppStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
