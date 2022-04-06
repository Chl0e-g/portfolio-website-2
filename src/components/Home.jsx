import { CssBaseline, Container, Box } from "@mui/material";
import AboutMePanel from "./AboutMePanel";
import TechnologiesPanel from "./TechnologiesPanel";
import ProjectsPanel from "./ProjectsPanel";
import FooterPanel from "./FooterPanel";
import NavBar from "./NavBar";
import StarsBackground from "./StarsBackground";
import { Switch, Route, Redirect } from 'react-router-dom';


export default function Home() {
  return (
    <>
        <CssBaseline />
        <StarsBackground />
        <Container maxWidth="lg">
          <NavBar />
          <AboutMePanel />
          <TechnologiesPanel />
          <ProjectsPanel />
          <FooterPanel />
        </Container>
    </>
  );
}

