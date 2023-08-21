import { useState } from "react"
import ToDoList from "../components/ToDoList"
import ToDoForm from "../components/ToDoForm"

function ToDoContainer () {
    const [toDos, setToDos] = useState([
        {
            id: 0,
            description:"Test to Do",
            priority:"high"
        }
    ])
    return (
        <>  
            <ToDoForm toDos = {toDos} setToDos={setToDos}/>
            <ToDoList toDos = {toDos}/>
        </>
    )
}

export default ToDoContainer