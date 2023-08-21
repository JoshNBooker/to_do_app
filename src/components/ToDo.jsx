function ToDo({toDo}){

    return (
        <li className="toDo">
            <h3><b>Task: </b>{toDo.description}</h3>
            <h3><b>Priority:</b>{toDo.priority}</h3>
        </li>
    )
}

export default ToDo