import { useState } from 'react';

import { FaPlus } from 'react-icons/fa';

import Popup from '../components/popup';
import Card from '../components/card';
import './board.scss';

function Board(props) {
    const [pressed, setPressed] = useState(false);
    const [newTask, setNewTask] = useState([]);

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
                        <FaPlus />
                    </button>
                </div>
            </div>
            {pressed && <Popup toggle={handlePopup} />}
        </div >
    );
}

export default Board;
