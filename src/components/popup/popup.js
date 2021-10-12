import React, { useState } from 'react';
<<<<<<< HEAD
import './popup.scss'
import Card from '../card';
import { FaTimes } from 'react-icons/fa';

function Popup(props) {
    const [task_name, setTask_name] = useState("");

    const handleChange = (e) => {
        setTask_name(e.target.value);
    }
    const handleClick = () => {
=======

import { FaTimes } from 'react-icons/fa';

import './popup.scss'


function Popup(props) {
    const [task_name, setTask_name] = useState("");

    const handleChangeInput = (e) => {
        setTask_name(e.target.value);
    }
    const handleClickOnAddButton = () => {
>>>>>>> update project
        props.toggle(task_name);
    }

    return (
<<<<<<< HEAD
        <div class="modal">
            <div class="modal_content">
                <span onClick={handleClick}>  <FaTimes className="close" /> </span>
                <input name="task" placeholder="add new task.." onChange={handleChange} />
                <button className="add_button" onClick={handleClick}>
                    Add
                </button>

=======
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
>>>>>>> update project
            </div>
        </div >
    );
}

<<<<<<< HEAD
export default Popup;
=======
export default Popup;
>>>>>>> update project
