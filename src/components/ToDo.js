import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ToDo() {
    return (
        <>
            <Card
            className="todoCard"
                sx={{
                    minWidth: 275,
                    background: "#283593",
                    marginTop: 5,
                    color: "white",
                }}
            >
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Typography variant="h5" sx={{ textAlign: "left" }}>
                                First Task
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: "left" }}>
                                Details about task go here
                            </Typography>
                        </Grid>

                        <Grid size={4}
                            display="flex" justifyContent="space-around" alignItems="center">
                            <IconButton
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: "#8bc34a",
                                    background: "white",
                                    border: "solid 8bc34a 3px ",
                                }}
                            >
                                <CheckIcon />
                            </IconButton>

                            <IconButton
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: "#2b47c4ff",
                                    background: "white",
                                    border: "solid 8bc34a 3px ",
                                }}
                            >
                                <EditIcon />
                            </IconButton>

                            <IconButton
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: "#b92b2bff",
                                    background: "white",
                                    border: "solid 8bc34a 3px ",
                                }}
                            >
                                <DeleteOutlineIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
