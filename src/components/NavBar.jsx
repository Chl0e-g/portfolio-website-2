import * as React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, useScrollTrigger, Slide } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorPosition, setAnchorPosition] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.target);
    setAnchorPosition(() => {
      return { top: 17, left: event.view.innerWidth - 34 };
    });
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <HideOnScroll>
      <AppBar sx={{ boxShadow: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ justifyContent: "end", flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorReference="anchorPosition"
                anchorPosition={anchorPosition}
                keepMounted
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <HashLink smooth to={"#about-me"}>
                  <MenuItem key="AboutMe" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About me</Typography>
                  </MenuItem>
                </HashLink>
                <HashLink smooth to={"#projects"}>
                  <MenuItem key="RecentProjects" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Recent projects</Typography>
                  </MenuItem>
                </HashLink>
                <MenuItem key="Contact" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ justifyContent: "end", flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <HashLink smooth to={"#about-me"}>
              <Button key="AboutMe" onClick={handleCloseNavMenu} sx={{ my: 2, color: "primary", display: "block" }}>
                About Me
              </Button>
              </HashLink>
              <HashLink smooth to={"#projects"}>
              <Button key="RecentProjects" onClick={handleCloseNavMenu} sx={{ my: 2, color: "primary", display: "block" }}>
                Recent Projects
              </Button></HashLink>
              <HashLink smooth to={"#contact"}>
              <Button key="Contact" onClick={handleCloseNavMenu} sx={{ my: 2, color: "primary", display: "block" }}>
                Contact
              </Button></HashLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
