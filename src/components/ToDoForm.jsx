import { useState } from "react";
import ToDoList from "./ToDoList";

function ToDoForm ({toDos,setToDos}) {
    const [description, setDescription] = useState("")

    const createToDo = () => {
        const newToDo = {
            id: ToDoList.length + 1,
            description : description,
        };
        setToDos([newToDo,...toDos])
        setDescription("")
    };

    return (
        <>
            <h3>Add To Do</h3>
            <div>
                <label htmlFor="Description">Description</label>
                <textarea name="Description" id="Description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            </div>
            <button onClick={createToDo}>Create To Do</button>
        </>
    )
}

export default ToDoForm