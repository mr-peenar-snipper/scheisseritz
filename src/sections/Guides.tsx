import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { ReactSVG } from "react-svg";
import audio1 from "../assets/audio/audio1.mp3";
import audio2 from "../assets/audio/audio2.mp3";
import audio3 from "../assets/audio/audio3.mp3";
import audio4 from "../assets/audio/audio4.mp3";
import audio5 from "../assets/audio/audio5.mp3";
import audio6 from "../assets/audio/audio6.mp3";
import audio7 from "../assets/audio/audio7.mp3";
import audio8 from "../assets/audio/audio8.mp3";
import audio9 from "../assets/audio/audio9.mp3";
import audio10 from "../assets/audio/audio10.mp3";
import mapSvg from "../assets/map.svg";


import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

type Station = {
    id: string;
    title: string;
    audio: string;
};

const audioFiles = [
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
    audio6,
    audio7,
    audio8,
    audio9,
    audio10,
];

const stations: Station[] = audioFiles.map((audio, index) => ({
    id: `station_${index + 1}_circle`,
    title: `Station ${index + 1}`,
    audio,
}));

export default function Guides() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Station | null>(null);

    const handleClick = (id: string) => {
        console.log('Click');
        const point = stations.find((s) => s.id === id);
        if (point) {
            setActive(point);
            setOpen(true);
        }
    };
    return (
        <Box id='guides' sx={{ width: "100%", mx: "auto" }}>
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    mt: 6,              
                    mb: 4,              
                }}
            >
                Hörbeiträge
            </Typography>
            <ReactSVG
                src={mapSvg}
                beforeInjection={(svg: SVGSVGElement) => {
                    svg.setAttribute("style", "width: 100%; height: auto;");
                }}
                afterInjection={(svg: SVGSVGElement) => {
                    svg.querySelectorAll("text").forEach((text) => {
                        (text as SVGElement).style.userSelect = "none";
                        (text as SVGElement).style.pointerEvents = "none"; // Klicks ignorieren
                    });

                    stations.forEach((station) => {
                        const element = svg.querySelector(`[id^="${station.id}"]`);
                        if (element instanceof SVGElement) {
                            console.log(element);
                            element.style.cursor = "pointer";
                            element.addEventListener("click", () => handleClick(station.id));
                        }
                    });
                }}
            />

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        p: 4, // mehr Padding
                        borderRadius: 3,
                        boxShadow: 24,
                        width: 400, // feste Breite
                        maxWidth: "90%",
                    }}
                >
                    {active && (
                        <>
                            <Typography variant="h5" gutterBottom>
                                {active.title}
                            </Typography>

                            <Box sx={{ mt: 2 }}>
                                <AudioPlayer
                                    src={active.audio}
                                    customAdditionalControls={[]}
                                    showJumpControls={false}
                                    style={{
                                        borderRadius: "10px",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                    }}
                                />
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>

        </Box>
    );
}
