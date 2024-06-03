import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
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
        }
    };

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const currentColors = colors[taskObj.Category] || colors[index % 5];

    return (
        <div className="card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": currentColors.primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: currentColors.secondaryColor, borderRadius: "10px" }}>
                    {taskObj.Category}
                </span>
                <span className="card-header" style={{ backgroundColor: currentColors.secondaryColor, borderRadius: "10px", marginTop: "10px" }}>
                    {taskObj.Name}
                </span>
                <p className="mt-3">{taskObj.Description}</p>
                <p className="mt-3">{new Date(taskObj.Deadline).toLocaleDateString()}</p>

                <div style={{ position: "absolute", top: "160px", left: "160px" }}>
                    <button style={{ color: currentColors.primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}>Edit</button>
                    <button style={{ color: currentColors.primaryColor, cursor: "pointer" }} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;