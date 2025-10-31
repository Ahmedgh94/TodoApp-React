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
import { useState, useContext, useEffect } from "react";

export default function TodoList() {
  const { todos, addTodo, loading, error } = useContext(TodosContext); // استخدام الـ Context
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // Add task function
  function handleAddClick() {
    const newTodo = { title: titleInput, body: "" };
    addTodo(newTodo);  // add the new task using the Context
    setTitleInput("");  
  }

  // filter basid on the status
    const completedTodos = todos.filter((t) => t.isCompleted);
    const notCompleted = todos.filter((t) => !t.isCompleted);
     let todosToBeRendered = todos;
  if (displayedTodosType === "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType === "noneCompleted") {
    todosToBeRendered = notCompleted;
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} style={{
        maxHeight: "80vh",
        overflowY: "scroll"
      }}>
        <CardContent>
          <Typography gutterBottom variant="h2">
            Tasks
            <Divider />
          </Typography>

          {/* Toggle Buttons  */}
          <ToggleButtonGroup
            value={displayedTodosType}
            exclusive
            onChange={(e) => setDisplayedTodosType(e.target.value)}
            aria-label="text alignment"
            style={{ marginTop: "30px" }}
          >
            <ToggleButton value="all" aria-label="left aligned">
              All
            </ToggleButton>
            <ToggleButton value="completed" aria-label="centered">
              Done
            </ToggleButton>
            <ToggleButton value="noneCompleted" aria-label="right aligned">
              In progess
            </ToggleButton>
          </ToggleButtonGroup>
          {/* <FIlter buttons /> */}


          {/* ToDo Items */}
            {todosToBeRendered.map((todo) => (
            <ToDo key={todo.id} todo={todo} />
          ))}
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
                 onChange={(e) => setTitleInput(e.target.value)}
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
                onClick={handleAddClick}
                disabled={titleInput.length == 0}
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
