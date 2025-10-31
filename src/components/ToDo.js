import { Card, CardContent, Modal, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useContext, useState } from "react";
import { TodosContext } from "../Contexts/todosContext";

// Dialog imports
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";


// to test the push 

export default function ToDo({ todo }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState({ title: todo.title || "" , details: todo.details || "" });
    const { todos, setTodos, updateTodo, deleteTodo,handleCheckClick } = useContext(TodosContext);



    // Event handlers

    // Handle delete Dialog
    function handleDeleteClick() {
        setShowDeleteModal(true);
    }
    function handleDeleteDialogClose() {
        setShowDeleteModal(false);
    }

    const handleDeleteConfirm = () => {
        deleteTodo(todo.id); // Delete the Task using the Context
        setShowDeleteModal(false);
    };
    // === handle Delete Dialog ===




    // Handle Update Dialog
    function handleUpdateClick() {
        setShowUpdateModal(true);
    }
    function handleUpdateClose() {
        setShowUpdateModal(false);
    }
   
    
    const handleEditeConfirm = () => {
        updateTodo(todo.id, updatedTodo); // Update the Task using the Context
        setShowUpdateModal(false);
    }
    // === Handle Update Dialog ===



    // Handle check click
    // function handleCheckClick() {
    //     const updatedTodos = todos.map((t) => {
    //         if (t.id === todo.id) {
    //             t.isCompleted = !t.isCompleted;  // تغيير حالة isCompleted
    //         }
    //         return t;
    //     });
    //     setTodos(updatedTodos);  // تحديث الـ todos باستخدام setTodos
    // }
    // === Event handlers ==


    return (
        <>
            {/* Delete Modal */}
            <Dialog
                onClose={handleDeleteDialogClose}
                open={showDeleteModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Ben je zeker dat je deze Taak wilt verwideren?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let op als je deze taak verwijderd hebt kan je dit niet meer terug halen!.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose}>Annuleren</Button>
                    <Button onClick={handleDeleteConfirm} autoFocus>
                        Akkord
                    </Button>
                </DialogActions>
            </Dialog>
            {/* == Delete Modal ==  */}


            {/* Update Modal */}
            <Dialog
                onClose={handleUpdateClose}
                open={showUpdateModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Ben je zeker dat je deze Taak wilt verwideren?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let op als je deze taak verwijderd hebt kan je dit niet meer terug halen!.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="title"
                        name="title field"
                        label="Title of the task"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.title}
                        onChange={(e) => {
                            setUpdatedTodo({ ...updatedTodo, title: e.target.value })
                        }
                        }
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="Details"
                        name="Details field"
                        label="Add details"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.details}
                        onChange={(e) => {
                            setUpdatedTodo({ ...updatedTodo, details: e.target.value })
                        }
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateClose}>Annuleren</Button>
                    <Button onClick={handleEditeConfirm} autoFocus>
                        Akkord
                    </Button>
                </DialogActions>
            </Dialog>
            {/* == Update Modal ==  */}
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
                            <Typography variant="h5" sx={{
                                textAlign: "left",
                                textDecoration: todo.isCompleted ? "line-through" : "none"
                            }}>
                                {todo.title}
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: "left" }}>
                                {todo.body}
                            </Typography>
                        </Grid>

                        <Grid size={4}
                            display="flex" justifyContent="space-around" alignItems="center">


                            {/* Check Icon Button */}
                            <IconButton
                                onClick={() => handleCheckClick(todo.id)}
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: todo.isCompleted ? "white" : "#8bc34a",
                                    background: todo.isCompleted ? "#8bc34a" : "white",
                                    border: "solid 8bc34a 3px ",
                                }}
                            >
                                <CheckIcon />
                            </IconButton>
                            {/* == Check Icon Button == */}


                            {/* Edit Icon Button */}
                            <IconButton
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: "#2b47c4ff",
                                    background: "white",
                                    border: "solid 8bc34a 3px ",
                                }}
                                onClick={handleUpdateClick}
                            >
                                <EditIcon />
                            </IconButton>
                            {/* == Edit Icon Button == */}


                            {/* Delete Icon Button */}
                            <IconButton
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: "#b92b2bff",
                                    background: "white",
                                    border: "solid 8bc34a 3px ",
                                }}
                                onClick={handleDeleteClick}
                            >
                                <DeleteOutlineIcon />
                            </IconButton>
                            {/* == Delete Icon Button == */}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
