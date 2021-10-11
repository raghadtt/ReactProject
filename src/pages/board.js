import { useState } from 'react';
import Popup from '../components/popup';
import Card from '../components/card';
import { FaPlus } from 'react-icons/fa';
import './board.scss';

function Board(props) {
    const [pressed, setPressed] = useState(false);
    const [newTask, setNewTask] = useState([]);

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
                        <FaPlus />
                    </button>
                </div>
            </div>
            {pressed ? <Popup toggle={handle_popup} /> : null}
        </div >
    );
}

export default Board;
