import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState(new Date());
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
        setCategory(taskObj.Category);
        setDeadline(new Date(taskObj.Deadline));
        setCompleted(taskObj.completed);
    }, [taskObj]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "category") {
            setCategory(value);
        }
    };

    const handleCheckboxChange = (e) => {
        setCompleted(e.target.checked);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {
            Name: taskName,
            Description: description,
            Category: category,
            Deadline: deadline,
            completed: completed
        };
        updateTask(tempObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Update Task</DialogTitle>
            <DialogContent>
                <TextField
                    label="Task Name"
                    variant="outlined"
                    fullWidth
                    value={taskName}
                    onChange={handleChange}
                    name="taskName"
                    margin="dense"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={description}
                    onChange={handleChange}
                    name="description"
                    margin="dense"
                />
                <div className="form-group" style={{ marginTop: '16px' }}>
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', borderColor: '#ccc' }}
                    >
                        <option value="">Select Category</option>
                        <option value="Work">Work</option>
                        <option value="Study">Study</option>
                        <option value="Rest">Rest</option>
                        <option value="Shopping">Shopping</option>
                    </select>
                </div>
                <div className="form-group" style={{ marginTop: '16px' }}>
                    <label htmlFor="deadline">Deadline</label>
                    <DatePicker
                        selected={deadline}
                        onChange={(date) => setDeadline(date)}
                        id="deadline"
                        name="deadline"
                        style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', borderColor: '#ccc' }}
                    />
                </div>
                <div className="form-group" style={{ marginTop: '16px' }}>
                    <label htmlFor="completed">Completed</label>
                    <input
                        type="checkbox"
                        id="completed"
                        name="completed"
                        checked={completed}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleUpdate}>Update</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTaskPopup;
