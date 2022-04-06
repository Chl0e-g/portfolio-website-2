import "./App.css";
import "animate.css";
import { CssBaseline, Container, Box } from "@mui/material";
import AboutMePanel from "./components/AboutMePanel";
import TechnologiesPanel from "./components/TechnologiesPanel";
import ProjectsPanel from "./components/ProjectsPanel";
import FooterPanel from "./components/FooterPanel";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StarsBackground from "./components/StarsBackground";

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
    divider: "#aa42ff",
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
      color: "#aa42ff",
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
        <CssBaseline />
        <StarsBackground />
        <Container maxWidth="lg">
          <NavBar />

          <AboutMePanel />
          <TechnologiesPanel />
          <ProjectsPanel />
          <FooterPanel />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
