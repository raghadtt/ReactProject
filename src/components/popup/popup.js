import React, { useState } from 'react';
import './popup.scss'
import Card from '../card';
import { FaTimes } from 'react-icons/fa';

function Popup(props) {
    const [task_name, setTask_name] = useState("");

    const handleChange = (e) => {
        setTask_name(e.target.value);
    }
    const handleClick = () => {
        props.toggle(task_name);
    }

    return (
        <div class="modal">
            <div class="modal_content">
                <span onClick={handleClick}>  <FaTimes className="close" /> </span>
                <input name="task" placeholder="add new task.." onChange={handleChange} />
                <button className="add_button" onClick={handleClick}>
                    Add
                </button>

            </div>
        </div >
    );
}

export default Popup;
