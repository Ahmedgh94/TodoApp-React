import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create TodosContext
export const TodosContext = createContext();

// Create TodosProvider component
export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]); // State to hold todos
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors


    // Fetch the Info from the API when the component mounts
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts').then((res) => {
            console.log(res.data);
            setTodos(res.data); // Store tasks
            setLoading(false); // stop loading
        })
            .catch((err) => {
                setError(err); // Store errors
                setLoading(false); // stop loading
            });
    }, [] // It's will called only once when the component mounts
    );

    // Add new Task function
    const addTodo = (newTodo) => {
        axios.post('http://127.0.0.1:8000/api/posts', newTodo)
            .then((response) => {
                setTodos((prevTodos) => [...prevTodos, response.data]); // Add the new task
            })
            .catch((error) => {
                console.error("Error adding task:", error);
            });
    }

    // Edit Task function
    const updateTodo = (todoId, updatedTodo) => {
        axios.patch(`http://127.0.0.1:8000/api/posts/${todoId}`, {
            title: updatedTodo.title,
            body: updatedTodo.details
        })
            .then((response) => {
                console.log(response.data);
                setTodos((prevTodos) => prevTodos.map(todo =>
                    todo.id === todoId ? response.data : todo
                ));
            })
            .catch((error) => {
                console.error("Error updating task:", error);
            });
    };

    // Delete Task function
    const deleteTodo = (todoId) => {
        axios.delete(`http://127.0.0.1:8000/api/posts/${todoId}`)
            .then(() => {
                setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId)); // delete the task
            })
            .catch((error) => {
                console.error("Error deleting task:", error);
            });
    };


    // handle check click
    const handleCheckClick = (todoId) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.isCompleted = !todo.isCompleted;

                axios.patch(`http://127.0.0.1:8000/api/posts/${todoId}/status`, {
                    isCompleted: todo.isCompleted  
                })
                    .then((response) => {
                        console.log('Task status is updated:', response.data);
                    })
                    .catch((error) => {
                        console.error('Error:', error.response.data);  
                    });
            }
            return todo;
        });
        setTodos(updatedTodos); 
    };
    

    return (
        <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, handleCheckClick, loading, error }}>
            {children} {/* link with the side components */}
        </TodosContext.Provider>
    )

}