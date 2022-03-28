import {Button} from "react-bootstrap";
import React, {useState} from "react";


const TodosList = ({todos, setTodos, todosPerPage, activePage}) => {

	const [editing, setEditing] = useState(false);
	const [editInput, setEditInput] = useState('');
	const removeHandler = (id) => {
		setTodos(todos.filter((todo) => {
			return todo.id !== id;
		}));
	};
	const editHandler = (index) => {
		// const filteredItems = todos.filter((todo) => {
		// 	return todo.id !== index
		// })
		const selectedTodo = todos.find((item) => {
			return item.id === index;
		});

		setEditing(true);

		console.log(selectedTodo);

	};
	let end = activePage * todosPerPage;
	let start = end - todosPerPage;
	return (<>
		{todos.slice(start, end)?.map((item, index) => {
			return (<div key={index} className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
				{editing ?
					<input style={{fontSize: "24px"}} onChange={(e) => setEditInput(e.target.value)} value={item.task}/> :
					<span style={{fontSize: "24px"}}>{item.task}</span>}
				<Button onClick={() => removeHandler(item.id)} className="m-lg-2" size="sm" variant="danger">Remove</Button>
				<Button onClick={() => editHandler(item.id)} className="" size="sm" variant="info">edit</Button>
			</div>);
		})}
	</>);

};


export default TodosList;