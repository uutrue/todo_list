import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState(new Date());

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

    const handleSave = (e) => {
        e.preventDefault();
        let taskObj = {
            Name: taskName,
            Description: description,
            Category: category,
            Deadline: deadline,
            completed: false // 새로운 태스크는 기본적으로 완료되지 않은 상태로 시작
        };
        save(taskObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Create Task</DialogTitle>
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
                        <option value="Task1">Task1</option>
                        <option value="Task2">Task2</option>
                        <option value="Task3">Task3</option>
                        <option value="Task4">Task4</option>
                        <option value="Task5">Task5</option>
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
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTaskPopup;
