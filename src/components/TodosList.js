import {Button} from "react-bootstrap";
import React, {useState} from "react";


const TodosList = ({todos, setTodos, todosPerPage, activePage}) => {

	const [editing, setEditing] = useState(false);
	const [editInput, setEditInput] = useState('');
	const [editedItem, setEditedItem] = useState('')
	const [name, setName] = useState('')
	const [editId, setEditId] = useState(null)
	const removeHandler = (id) => {
		setTodos(todos.filter((todo) => {
			return todo.id !== id;
		}));
	};
	

	const editHandler = (id) => {
		const selectedTodo = todos.find(item => item.id === id)

		if(!editing) {
			setEditing(true)
			setEditId(id)
			setName(selectedTodo.task)
		} if(editing) {
			selectedTodo = name
		}
	};
	let end = activePage * todosPerPage;
	let start = end - todosPerPage;
	return (<>
		{todos.slice(start, end)?.map((item) => {
			return (<div key={item.id} className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
					<span style={{fontSize: "24px"}}>{item.task}</span>
				<Button onClick={() => removeHandler(item.id)} className="m-lg-2" size="sm" variant="danger">Remove</Button>
				<Button onClick={() => editHandler(item.id)} className="" size="sm" variant="info">{editing ? "save": "edit"}</Button>
			</div>);
		})}
		<input value={name} onChange={(e) => setName(e.target.value)}/>
	</>);

};


export default TodosList;