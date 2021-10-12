import { useState } from 'react';
<<<<<<< HEAD
import Popup from '../components/popup';
import Card from '../components/card';
import { FaPlus } from 'react-icons/fa';
=======

import { FaPlus } from 'react-icons/fa';

import Popup from '../components/popup';
import Card from '../components/card';
>>>>>>> update project
import './board.scss';

function Board(props) {
    const [pressed, setPressed] = useState(false);
    const [newTask, setNewTask] = useState([]);

<<<<<<< HEAD
    const handle_popup = (name) => {
        setPressed(!pressed)
        if (name != "") {
            setNewTask([...newTask, name]);
        }
    }

    return (
        <div className="board">
            <h1>
                To-do list
            </h1>
            <div className="list">
                <div>
                    {newTask.length == 0 ? null : (newTask.map((item) => { return (<Card name={item} />); }))}
                </div>
                <div className="add">
                    <button className="icon" onClick={() => setPressed(!pressed)}>
=======
    const handlePopup = (name) => {
        setPressed(!pressed)
        addTasks(name);
    }
    const addTasks = (name) => {
        if (name !== "") {
            setNewTask([...newTask, name]);
        }
    }
    const showTasks = () => {
        return newTask.map((item) => {
            return (
                <div>
                    <Card name={item} />
                </div>);
        })
    }
    return (
        <div className="Board">
            <h1>
                To-do list
            </h1>
            <div className="List">
                <div>
                    {newTask.length !== 0 && showTasks()}
                </div>
                <div className="Add">
                    <button
                        className="Icon"
                        onClick={() => setPressed(!pressed)}>
>>>>>>> update project
                        <FaPlus />
                    </button>
                </div>
            </div>
<<<<<<< HEAD
            {pressed ? <Popup toggle={handle_popup} /> : null}
=======
            {pressed && <Popup toggle={handlePopup} />}
>>>>>>> update project
        </div >
    );
}

export default Board;
