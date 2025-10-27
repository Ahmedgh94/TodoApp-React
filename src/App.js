import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid"; // Component to generate unique IDs

import { TodosContext } from "./Contexts/todosContext";
import { Pallet } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"],
  },
  
});


// const initialtodos = [
//   {
//     id: uuidv4(),
//     title: "Buy groceries",
//     details: "test test test",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Go to centrum",
//     details: "test test test",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Read a book",
//     details: "test test test",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Pay bills",
//     details: "test test test",
//     isCompleted: false,
//   },
// ];

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#191b1f",
          height: "100vh",
        }}
      >
        {/* Het is mogelijk om hier context te gebruiken en kan ook de values met andere naam declareren 
        zoals hieronder: todos: todos, setTodos: setTodos
        Maar kan ook korter geschreven worden als hieronder omdat de key en value dezelfde naam hebben. */}
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
