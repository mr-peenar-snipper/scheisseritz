import { Box, Typography } from "@mui/material";
import bild1 from "../assets/hero1.jpeg";
import bild2 from "../assets/hero2.jpeg";
import bild3 from "../assets/hero3.jpeg";
import { useEffect, useState } from "react";

export default function Hero() {
    const images: string[] = [bild1, bild2, bild3];
    const [randomImage, setRandomImage] = useState<string>(images[0]);
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex]);
    }, []);


    return <Box
        sx={{
            position: "relative",
            height: "100vh",
            backgroundImage: `url(${randomImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
        }}
    >
        <Box
            sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                p: 4,
                borderRadius: 3,
                textAlign: "center",
            }}
        >
            <Typography variant="h2" fontWeight="bold">
                Audiowalk Scheißeritz
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
                Ein schwules Gewässer bumsen
            </Typography>
        </Box>
    </Box>


}