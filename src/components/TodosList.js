import {Button} from "react-bootstrap";
import React, {useState} from "react";


const TodosList = ({todos, setTodos, todosPerPage, activePage, setActivePage, lastBtnPagination}) => {

	const [editing, setEditing] = useState(false);
	const [name, setName] = useState('');
	const [editId, setEditId] = useState(null);


	const removeHandler = (id) => {
		if (!editing) {
			setTodos(todos.filter((todo) => {
				return todo.id !== id;
			}));
		} else {
			setEditId('');
			setEditing(false);
		}

		// Reduce pagination by one when the last item is deleted from the page

		console.log('todoslenght', todos.length - 1);
		console.log(activePage, lastBtnPagination);
// HERE IS CASE1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -<<<<<<<<<<<<<<<<
		if ((todos.length - 1) % 5 === 0 && activePage === lastBtnPagination) {
			setActivePage(activePage - 1);
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
				<input onChange={() => checkboxHandler(item.id)} type="checkbox"/>
				<Button onClick={() => removeHandler(item.id)} className="m-lg-2" size="sm"
				        variant="danger">{editId === item.id ? "cancel" : "remove"}</Button>
				<Button onClick={() => editHandler(item.id)} className="" size="sm"
				        variant="info">{editId === item.id ? "save" : "edit"}</Button>
			</div>);
		})}
	</>);

};

//ooo
export default TodosList;




