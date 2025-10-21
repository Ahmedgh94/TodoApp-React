import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// Icons
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToDo from "./ToDo";
import TextField from '@mui/material/TextField';

import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

// Component

export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h2">
            Tasks
            <Divider />
          </Typography>

          {/* Toggle Buttons  */}
          <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            style={{ marginTop: "30px" }}
          >
            <ToggleButton value="left" aria-label="left aligned">
              All
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Done
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              In progess
            </ToggleButton>
          </ToggleButtonGroup>
          {/* <FIlter buttons /> */}

          {/* ToDo Items */}
          <ToDo />
          {/* ==ToDo ==  */}

          {/* Add task field */}
          <Grid container  
          style={{ marginTop: "20px", marginBottom: "5px" }} spacing={2}>
            <Grid size={8}
              display="flex" justifyContent="center" alignItems="center"
            >
              <TextField style={{width: "100%"}} id="outlined-basic" label="Add task" variant="outlined" />

            </Grid>
            <Grid size={4}
              display="flex" justifyContent="center" alignItems="center">
              <Button
              style={{width:"100", height: "100%"}}
            variant="contained"
            endIcon={<AddIcon />}           
          >
            Add Task
          </Button>
            </Grid>

          </Grid>
          {/* == Add task field ==  */}
        </CardContent>
      </Card>
    </Container>
  );
}
