import { Card, CardContent, Container, Typography, Stack, Box, useTheme } from "@mui/material";
import bild1 from "../assets/Bild1.jpeg"; // Beispielbild
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Start() {
    const theme = useTheme();

    return (
        <Box id="start" sx={{ py: 10, backgroundColor: theme.palette.primary.light }}>
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={6}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Linke Seite: Card */}
                    <Stack spacing={5}>
                        <Card elevation={6}>
                            <CardContent>
                                <Typography variant="h4" gutterBottom color="primary">
                                    Über die Weisseritz
                                </Typography>
                                <Typography variant="body1">
                                    Die Weisseritz ist ein Fluss in Sachsen, der durch Dresden fließt.
                                    Sie bietet wunderschöne Natur und ist ein beliebtes Ziel für
                                    Spaziergänge und Radtouren.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card elevation={6}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom color="primary">
                                    Audiowalk an der Weißeritz
                                </Typography>
                                <Typography variant="body1">
                                    Audiowalks sind ortsgebundene Parcours, die Hörerinnen und Hörer über
                                    Kommentare, Interviews und Klangbeiträge entlang einer definierten
                                    Route zu <b>aktiven Teilnehmern</b> ihrer Raumerfahrung machen. Sie
                                    verbinden Umweltbildung mit kreativen, partizipativen Methoden und
                                    schaffen durch die landschaftliche Bildung einen unmittelbaren Bezug
                                    zur konkreten Umgebung. Der Audiowalk an der Weißeritz fungiert also
                                    als modernes Instrument landschaftlicher Bildung, das durch
                                    multiperspektivische Beiträge und narrative Klanginszenierungen
                                    ökologische, historische und soziale Dimensionen des urbanen
                                    Fließgewässers hörbar und erlebbar macht.
                                </Typography>
                            </CardContent>
                        </Card>

                    </Stack>

                    {/* Rechte Seite: Bild */}
                    <Box
                        component="img"
                        src={bild1}
                        alt="Weisseritz"
                        sx={{
                            width: "100%",
                            maxWidth: 700,
                            borderRadius: 3,
                            boxShadow: 4,
                        }}
                    />
                </Stack>
            </Container>
            <ScrollToTopButton />
        </Box>
    );
}
