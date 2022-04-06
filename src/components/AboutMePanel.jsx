import { Typography, Box, Container } from "@mui/material";
import StarsBackground from "./StarsBackground"

export default function AboutMePanel() {
  return (
    <>
        <Box sx={{ mt: 15, mb: 3}}>
          <Typography variant="h1" id="AboutMe">Hi, I'm Chloe</Typography>
          </Box>
          <Typography variant="h2" component="p">
            I'm a <em>fullstack software developer</em> looking for new opportunities
          </Typography>
          <Box sx={{ mt: 5, textAlign: "justify" }}>
            <Typography variant="p">
              My background is in digital product management and digital strategy, and I'm transitioning into a software development career
              having recently graduated from the Northcoders Fullstack Bootcamp. I'm passionate about learning new technologies and
              languages, grappling with complex technological problems, and creating user-focused software. As well as being a certified UX
              professional, I have extensive experience working in cross-functional, agile development teams. Please get in touch!
            </Typography>
          </Box>
        
    </>
  );
}
