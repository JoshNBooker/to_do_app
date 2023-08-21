import ToDo from './ToDo';
function ToDoList({ toDos }) {
	const toDoItems = toDos.map((toDo) => <ToDo toDo={toDo} key={toDo.id} />);

	return (
		<>
			<h1>Your To Do List</h1>
			<ul id="todo-list">{toDoItems}</ul>
		</>
	);
}

export default ToDoList;
