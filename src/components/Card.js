import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = {
        Task1: {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        Task2: {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        Task3: {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        Task4: {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        Task5: {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        },
    };

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = (e) => {
        let updatedTask = { ...taskObj, completed: e.target.checked };
        updateListArray(updatedTask, index);
    };

    const currentColors = colors[taskObj.Category] || { primaryColor: '#fff', secondaryColor: '#fff' };

    return (
        <div className="card-wrapper mr-5" style={{ marginBottom: 20, border: `1px solid ${currentColors.primaryColor}`, borderRadius: '10px', boxShadow: '0px 3px 6px rgba(0,0,0,0.1)' }}>
            <div className="card-top" style={{ backgroundColor: currentColors.primaryColor, height: '40px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="card-header" style={{ color: currentColors.secondaryColor }}>
                    {taskObj.Category}
                </span>
            </div>
            <div className="task-holder" style={{ padding: '10px' }}>
                <input type="checkbox" checked={taskObj.completed} onChange={handleCheckboxChange} />
                <span className="card-header" style={{ backgroundColor: currentColors.secondaryColor, borderRadius: "10px", display: 'block', padding: '5px', marginBottom: '10px' }}>
                    {taskObj.Name}
                </span>
                <p className="mt-3">{taskObj.Description}</p>
                <p className="mt-3">{new Date(taskObj.Deadline).toLocaleDateString()}</p>

                <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                    <button style={{ color: currentColors.primaryColor, cursor: "pointer", marginRight: '10px' }} onClick={() => setModal(true)}>Edit</button>
                    <button style={{ color: currentColors.primaryColor, cursor: "pointer" }} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;
