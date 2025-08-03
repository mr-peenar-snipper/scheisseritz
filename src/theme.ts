import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E3A5F", // Dunkelblau
    },
    secondary: {
      main: "#3BA99C", // Türkis
    },
    success: {
      main: "#4CAF50", // Grün
    },
    background: {
      default: "#FAFAFA",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    body1: { fontSize: 18 },
  },
});

export default theme;
