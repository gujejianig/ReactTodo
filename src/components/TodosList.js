import {Button} from "react-bootstrap";
import React, {useState, useEffect} from "react";


const TodosList = ({todos, setTodos, todosPerPage, activePage}) => {

	const [editing, setEditing] = useState(false);
	const [name, setName] = useState('');
	const [editId, setEditId] = useState(null);
	const [checkboxId, setCheckboxId] = useState([]);
	const [boxChecked, setBoxchecked] = useState([]);


	const [checked, setChecked] = useState([]);


	const removeHandler = (id) => {
		if (!editing) {
			setTodos(todos.filter((todo) => {
				return todo.id !== id;
			}));
		} else {
			setEditId('');
			setEditing(false);
		}
	};

	const editHandler = (id) => {
		let selectedTodo = todos.find(item => item.id === id);
		if (!editing) {
			setEditing(true);
			setEditId(id);
			setName(selectedTodo.task);
		}
		if (editing && name.length > 0) {
			setEditId('');
			selectedTodo.task = name;
			setEditing(false);
		}
	};


	const checkboxHandler = (id) => {

		const selectedTodo = todos.map((todo) => {
			if (todo.id === id) {
				!todo.done ? todo.done = true : todo.done = false;
			}
			return todo;
		});
		setTodos(selectedTodo);

	};


	let end = activePage * todosPerPage;
	let start = end - todosPerPage;
	return (<>
		{todos.slice(start, end)?.map((item) => {
			return (<div key={item.id} className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
				{editId === item.id ? <input value={name} onChange={(e) => setName(e.target.value)}/> :


					<span style={{fontSize: "24px", textDecoration: item.done ? "line-through" : ''}}>{item.task}</span>}

				<input onChange={(event) => checkboxHandler(item.id)} type="checkbox"/>


				<Button onClick={() => removeHandler(item.id)} className="m-lg-2" size="sm"
				        variant="danger">{editId === item.id ? "cancel" : "remove"}</Button>
				<Button onClick={() => editHandler(item.id)} className="" size="sm"
				        variant="info">{editId === item.id ? "save" : "edit"}</Button>
			</div>);
		})}
	</>);

};


export default TodosList;