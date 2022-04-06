import { Typography, Grid, Divider, Paper, Box, ImageList, ImageListItem } from "@mui/material";
import Project from "./Project";
// import animonMob from "../assets/animonMob.png";
// import apiLaptop from "../assets/apiLaptop.png";
// import newsviewsLaptop from "../assets/newsviewsLaptop.png";
// import newsviewsMob from "../assets/newsviewsMob.png";

const projects = [
  {
    name: "'Animon' mobile app",
    description:
      "A gamified education app for children, loosely inspired by Pokemon Go. It includes a list of wild animals for children to find while out and about. They can take photos of animals they find using their device's camera in-app, and image recognition technology confirms if it's a target animal. A map feature enables users to explore places they've previously found animals, and users can earn badges based on how many animals they've found. I worked on this project with 5 other students on the Northcoders bootcamp.",
    img: "animon",
    technologies: ["React Native (Expo)", "Firestore", "Firebase"],
    gitHubUrl: "https://github.com/Chl0e-g/Northcoders-final-project",
  },
  {
    name: "News app API",
    description:
      "A RESTful API that provides the backend service for a Reddit-style news site. The API interacts with a PostgreSQL database and enables CRUD functionality on articles, topics, users, and comments, as well as full error handling. I built the server with the Express package, and with full test-driven development using Jest and Supertest. The API is hosted on Heroku, and the frontend is shown below.",
    img: "api",
    technologies: ["Node.js", "PostgreSQL", "Express", "Jest", "Supertest"],
    liveUrl: "https://chl0e-g-news-app.herokuapp.com/api",
    gitHubUrl: "https://github.com/Chl0e-g/news-app",
  },
  {
    name: "'News & Views' web app",
    description:
      "A fully responsive news web app which I designed and built. I built the app with React and styled it with a combination of the UIKit CSS framework and custom CSS. The site enables full CRUD functionality including liking and commenting on articles and deleting comments. It uses the API I built above, and is hosted on Netlify.",
    img: "newsviews",
    technologies: ["React", "UIKit", "CSS3", "Axios", "Netlify"],
    liveUrl: "https://news-and-views.netlify.app/",
    gitHubUrl: "https://github.com/Chl0e-g/news-app-react",
  },
  {
    name: "Portfolio site",
    description:
      "This website, which I designed and built to display my coding projects. I built it with React and the MUI UI framework, as well as custom CSS. The site is fully responsive and accessible, and is hosted on Netlify.",
    img: "portfolio",
    technologies: ["React", "MUI", "CSS3", "Netlify"],
    liveUrl: "https://chloe-glassonbury.netlify.app",
    gitHubUrl: "https://github.com/Chl0e-g/portfolio-website-2",
  },
];

export default function ProjectsPanel() {
  return (
    <>
      <Divider sx={{ mt: 10, mb: 10 }} />
      <Typography variant="overline" component="h2" id="projects">
        Recent Projects
      </Typography>
      <Grid container >
        {projects.map((project, i) => {
          if (i % 2 === 0) {
            return (
              <>
                <Paper sx={{ display: "flex", padding: 5, mb: 5, mt: 3, flexWrap: "wrap", alignItems: 'center' }}>
                  <Grid item sm={12} md={5} sx={{paddingLeft: 2, paddingRight: 2}}>
                    <img src={`../assets/${project.img}.png`} alt={`mobile screenshot of ${project.name}`} style={{ maxWidth: "100%" }} />
                  </Grid>
                  <Grid item sm={12} md={7}>
                    <Typography variant="h3">{project.name}</Typography>
                    <Project project={project} />
                  </Grid>
                </Paper>
              </>
            );
          } else {
            return (
              <>
                <Paper sx={{ display: "flex", padding: 4, mb: 3, flexWrap: "wrap-reverse", alignItems: 'center' }}>
                  <Grid item sm={12} md={7}>
                    <Typography variant="h3">{project.name}</Typography>
                    <Project project={project} />
                  </Grid>
                  <Grid item sm={12} md={5} sx={{paddingLeft: 2, paddingRight: 2}}>
                    <img src={`../assets/${project.img}.png`} alt={`mobile screenshot of ${project.name}`} style={{ maxWidth: "100%" }} />
                  </Grid>
                </Paper>
              </>
            );
          }
        })}
      </Grid>
    </>
  );
}
