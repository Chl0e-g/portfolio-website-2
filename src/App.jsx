import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#d4ceef",
      light: "#d4ceef",
      dark: "#d4ceef",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#0A0629",
      contrastText: "rgba(255,255,255,0.87)",
    },
    background: {
      default: "#0a0629",
      paper: "#1B0C4E",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(250,250,250,0.7)",
      disabled: "rgba(255,255,255,0.5)",
      hint: "rgba(255,255,255,0.5)",
    },
    divider: "#B357FF",
  },
  typography: {
    fontFamily: "Outfit",
    fontSize: 16,
    h1: {
      fontSize: "6rem",
      fontFamily: "Outfit",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 200,
    },
    h3: {
      fontSize: "3.1rem",
    },
    overline: {
      fontSize: "1.1rem",
      color: "#B357FF",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0a0629",
          color: "#fff",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
