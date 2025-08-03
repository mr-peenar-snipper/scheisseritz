import {
    AppBar,
    Toolbar,
    Box,
    Button,
    useTheme,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useEffect, useState } from "react";
  import useMediaQuery from "@mui/material/useMediaQuery";
  
  export default function Navbar() {
    const theme = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 0);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setDrawerOpen(false);
      }
    };
  
    const navItems = [
      { id: "start", label: "Start" },
      { id: "about", label: "Die Scheißeritz" },
      { id: "impressions", label: "Impressionen" },
      { id: "guides", label: "Hörbeiträge" },
      { id: "more", label: "Mehr" },
    ];
  
    return (
      <>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            opacity: scrolled ? 0.85 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "center",
              position: "relative",
            }}
          >
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ position: "absolute", right: 16 }}
                >
                  <MenuIcon />
                </IconButton>
                <Box sx={{ fontWeight: "bold" }}>Logo</Box>
              </>
            ) : (
              <Box sx={{ display: "flex", gap: 3 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
  
        {/* Drawer für Mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box
            sx={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 4,
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    );
  }
  