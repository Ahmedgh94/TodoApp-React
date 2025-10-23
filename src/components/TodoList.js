import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// Icons
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
// import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import TextField from "@mui/material/TextField";

import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

// Component
import ToDo from "./ToDo";
import { TodosContext } from "../Contexts/todosContext";

// Others
import { useState } from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  // useState definition
  // Use context to get todos and setTodos
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleinput] = useState("");

  function handleCheckClick(todoId) {
    // de handle functie omzetten naar context dus hier de context gebruiken en dit logic wordt in ToDo.js teoegepast
    // const updatedTodos = todos.map((t) => {
    //   if (t.id === todoId) {
    //     // if (t.isCompleted == true) {
    //     //   t.isCompleted = false;
    //     // } else {
    //     //   t.isCompleted = true;
    //     // }

    //     t.isCompleted = !t.isCompleted;
    //   }
    //   return t;
    // });
    // setTodos(updatedTodos);
  }

  // Add task function
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTitleinput("");
  }

  // Map through ToDo items
  const todoJsx = todos.map((t) => {
    return <ToDo key={t.id} todo={t}  />;
  });
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
          {todoJsx}
          {/* ==ToDo ==  */}

          {/* Add task field */}
          <Grid
            container
            style={{ marginTop: "20px", marginBottom: "5px" }}
            spacing={2}
          >
            <Grid
              size={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Add task"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleinput(e.target.value);
                }}
              />
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                style={{ width: "100", height: "100%" }}
                variant="contained"
                endIcon={<AddIcon />}
                onClick={() => {
                  handleAddClick();
                }}
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
