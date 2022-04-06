import { Typography, IconButton, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Project({ project }) {
  return (
    <>
      <Box sx={{ textAlign: "justify", mt: 3, mb: 3 }}>
        <Typography variant="p">{project.description}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {project.technologies.map((technology) => {
          return (
            <Typography variant="overline" component="p" sx={{ mr: 2 }}>
              {technology}
            </Typography>
          );
        })}
      </Box>
      <IconButton aria-label="view GitHub repository" size="large" href={project.gitHubUrl}>
        <GitHubIcon fontSize="inherit" />
      </IconButton>
      {project.liveUrl && (
        <IconButton aria-label="view live project" size="large" href={project.liveUrl}>
          <LaunchIcon fontSize="inherit" />
        </IconButton>
      )}
    </>
  );
}
