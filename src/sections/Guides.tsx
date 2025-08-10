import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import stationMap from "../assets/images/Station1/Map.jpeg"
import caroussel1 from "../assets/images/Station1/1.jpeg"
import caroussel2 from "../assets/images/Station1/2.jpeg"
import caroussel3 from "../assets/images/Station1/3.jpeg"

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Station = {
    id: string;
    title: string;
    audio: string;
    disabled: boolean;
    map: string;
    caroussel: string[];
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
    disabled: index == 0 ? false : true,
    map: stationMap,
    caroussel: [caroussel1, caroussel2, caroussel3]
}));

export default function Guides() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setExpanded(id);
        setTimeout(() => {
            document.getElementById(`acc-${id}`)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 250);
    };

    function GuidesAccordions() {
        return (
            <Box sx={{ width: "80%", mx: "auto", mb: 5 }}>
                {zoomedImage && (
                    <Box
                        sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            bgcolor: "rgba(0,0,0,0.85)",
                            zIndex: 2000,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "zoom-out",
                        }}
                        onClick={() => setZoomedImage(null)}
                    >
                        <Box
                            component="img"
                            src={zoomedImage}
                            alt="Zoomed Map"
                            sx={{
                                maxWidth: "90%",
                                maxHeight: "90%",
                                borderRadius: 2,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                            }}
                        />
                    </Box>
                )}

                {stations.map((station) => (
                    <Accordion id={`acc-${station.id}`} key={station.id} disabled={station.disabled} expanded={expanded == station.id && !station.disabled} onChange={(_, isExpanded) => setExpanded(isExpanded ? station.id : false)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{station.title}</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={10}>
                                <Grid size={{ xs: 12, md: 12 }} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box
                                        component='img'
                                        src={station.map}
                                        alt={station.title}
                                        sx={{
                                            maxHeight: 600,
                                            height: "auto",
                                            borderRadius: 2,
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                            cursor: "zoom-in",
                                            transition: "transform 0.2s",
                                            "&:hover": {
                                                transform: "scale(1.02)",
                                            },

                                        }}
                                        onClick={() => setZoomedImage(station.map)}
                                    >
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                                    <Box sx={{ width: "100%" }}>
                                        <AudioPlayer
                                            src={station.audio}
                                            customAdditionalControls={[]}
                                            showJumpControls={false}
                                            style={{
                                                maxWidth: 400,
                                                borderRadius: "10px",
                                                margin: 'auto',
                                                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Swiper slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        {station.caroussel.map((img, i) => (
                                            <SwiperSlide key={i}>
                                                <Box
                                                    maxHeight={500}
                                                    component="img"
                                                    src={img}
                                                    alt={`Bild ${i + 1}`}
                                                    sx={{
                                                    }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </Grid>
                            </Grid>

                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        );
    }

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
                        (text as SVGElement).style.pointerEvents = "none";
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
            {GuidesAccordions()}
        </Box>
    );
}
