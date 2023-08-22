import ToDo from './ToDo';
function ToDoList({ toDos }) {
	const toDoItems = toDos.map((toDo, index) => (
		<ToDo toDo={toDo} key={index} />
	));

	return (
		<>
			<h1>Your To Do List</h1>
			<ul id="todo-list">{toDoItems}</ul>
		</>
	);
}

export default ToDoList;
