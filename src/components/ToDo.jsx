import React from 'react';
import './toDo.css';

function ToDo({ toDo }) {
	let priorityClass = '';

	switch (toDo.priority) {
		case 'low':
			priorityClass = 'low-priority';
			break;
		case 'medium':
			priorityClass = 'medium-priority';
			break;
		case 'high':
			priorityClass = 'high-priority';
		default:
			break;
	}

	const hello = 'hello';

	return (
		<li className={`toDo ${priorityClass}`}>
			<h3>
				<b>Task: </b>
				{toDo.description}
			</h3>
			<h3>
				<b>Priority:</b>
				{toDo.priority}
			</h3>
			<h3>
				<b>Deadline:</b>
				{toDo.deadline}
			</h3>
		</li>
	);
}

export default ToDo;
