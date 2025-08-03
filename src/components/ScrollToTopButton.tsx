import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <Fab
      color="primary"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  ) : null;
}
