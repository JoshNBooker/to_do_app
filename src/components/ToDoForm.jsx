import { useState } from "react";
import ToDoList from "./ToDoList";

function ToDoForm ({toDos,setToDos}) {
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")

    const createToDo = () => {
        const newToDo = {
            id: ToDoList.length + 1,
            description: description,
            priority: priority
        };
        setToDos([newToDo,...toDos])
        setDescription("")
    };

    return (
        <>
            <h3>Add To Do</h3>
            <div>
                <label htmlFor="Description">Description: </label>
                <textarea name="Description" id="Description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <p>Select Priority:</p>
                <label htmlFor="high">High</label>
                <input type="radio" name="priority" id="high" value='high' onClick={(e) => setPriority(e.target.value)}/>
                <label htmlFor="low">Low</label>
                <input type="radio" name="priority" id="low" value='low' onClick={(e) => setPriority(e.target.value)}/>
            </div>
            <button onClick={createToDo}>Create To Do</button>
        </>
    )
}

export default ToDoForm