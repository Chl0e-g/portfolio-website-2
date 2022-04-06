import { Typography, Box, Grid, Divider } from "@mui/material";

export default function TechnologiesPanel() {
  return (
      <>
      <Divider sx={{mt: 10, mb: 10}}/>
      <Typography variant="overline" component="h2">
        Technologies
      </Typography>
      <Typography variant="p">Here are some of the technologies I've worked with recently:</Typography>
        <Grid container spacing={2} sx={{mt: 0.1}}>
          <Grid item xs={12} md={3}>
              <Typography variant="p">Languages</Typography>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3, Sass/SCSS</li>
              <li>PostgreSQL</li>
              <li>Some experience with R</li>
            </ul>
          </Grid>
          
          <Grid item xs={12} md={3}><Typography variant="p">On the back-end</Typography>
            <ul>
              <li>Node.js</li>
              <li>Express APIs</li>
              <li>NoSQL (Firestore)</li>
              <li>Firebase authentication</li>
            </ul>
          </Grid>
          
          <Grid item xs={12} md={3}><Typography variant="p">On the front-end</Typography>
            <ul>
              <li>React</li>
              <li>React Native (Expo)</li>
              <li>UIKit</li>
              <li>MUI</li>
              <li>NativeBase</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}><Typography variant="p">Tools & platforms</Typography>
            <ul>
              <li>Testing: Jest, Supertest</li>
              <li>Version control: Git, GitHub</li>
              <li>JIRA, Confluence</li>
              <li>Sketch, Figma</li>
            </ul>
          </Grid>
        </Grid>
        </>
  );
}
