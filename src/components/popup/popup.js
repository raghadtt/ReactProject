import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

import './popup.scss'


function Popup(props) {
    const [task_name, setTask_name] = useState("");

    const handleChangeInput = (e) => {
        setTask_name(e.target.value);
    }
    const handleClickOnAddButton = () => {
        props.toggle(task_name);
    }

    return (
        <div class="Modal">
            <div class="Modal_content">
                <span
                    onClick={handleClickOnAddButton}>
                    <FaTimes className="Close" />
                </span>
                <input
                    name="task"
                    placeholder="add new task.."
                    onChange={handleChangeInput}
                />
                <button
                    className="AddButton"
                    onClick={handleClickOnAddButton}>
                    Add
                </button>
            </div>
        </div >
    );
}

export default Popup;