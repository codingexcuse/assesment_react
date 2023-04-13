import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4D47C3", //Blue Color
      light: "#FFFFFF", //White Color
    },
    secondary: {
      main: "#F0EFFF",
    },
    navbar: "#F1F0FA",
    headerFont: "#505D68",
    dataFont: "#151515",
  },
  typography: {
    fontFamily: "montserrat"
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
