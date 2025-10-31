import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { TodosProvider } from "./Contexts/todosContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"],
  },
  
});

function App() {

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
        <TodosProvider>
          <TodoList />
        </TodosProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
