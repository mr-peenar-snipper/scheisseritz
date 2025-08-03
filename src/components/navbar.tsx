import { AppBar, Toolbar, Box, Button, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function Navbar() {
    const theme = useTheme();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: theme.palette.secondary.main,
                opacity: scrolled ? 0.85 : 1,
                transition: "opacity 0.3s ease",
            }}
        >
            <Toolbar sx={{ justifyContent: "center" }}>
                <Box sx={{ display: "flex", gap: 4 }}>
                    <Button color="inherit" onClick={() => scrollToSection('start')}>Start</Button>
                    <Button color="inherit" onClick={() => scrollToSection('about')}>Die Scheißeritz</Button>
                    <Button color="inherit" onClick={() => scrollToSection('impressions')}>Impressionen</Button>
                    <Button color="inherit" onClick={() => scrollToSection('guides')}>Hörbeiträge</Button>
                    <Button color="inherit" onClick={() => scrollToSection('more')}>Mehr</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
