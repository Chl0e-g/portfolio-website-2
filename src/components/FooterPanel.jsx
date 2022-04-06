import { Typography, IconButton, Button, Container, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FooterPanel() {
  return (
    <>
      <Box sx={{ mt: 20 }}>
        <Typography variant="overline" component="h2">
          Contact
        </Typography>
      </Box>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mt: 5, mb: 8 }}>
          <Typography variant="p">
            Thank you for taking a look at my work! If you'd like to get in touch, please contact me via email. Whether it's an opportunity
            you think I should hear about or just a question, I'd love to hear from you.
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Button variant="outlined" href="mailto:chloe_g@btinternet.com">
              Get in touch
            </Button>
            <Box sx={{ mt: 3 }}>
              <IconButton aria-label="view my GitHub" size="large" href="https://github.com/Chl0e-g" color="primary">
                <GitHubIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="view my LinkedIn"
                size="large"
                href="https://www.linkedin.com/in/chloe-glassonbury-84390b231/"
                color="primary"
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Container>
      <footer>
        <Box sx={{ textAlign: "center", padding: 3}}>
          <Typography variant="p" color="primary">
            Designed & built by Chloe in 2022
          </Typography>
        </Box>
      </footer>
    </>
  );
}
