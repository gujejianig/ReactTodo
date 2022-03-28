import {Button} from "react-bootstrap";
import React from "react";


const TodosList = ({todos, setTodos, todosPerPage, activePage}) => {
	const removeHandler = (id) => {
		setTodos(todos.filter((todo) => {
			return todo.id !== id;
		}));
	};
	let end = activePage * todosPerPage;
	let start = end - todosPerPage;
	return (<>
		{todos.slice(start, end)?.map((item, index) => {
			return (<div key={index} className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
				<span style={{fontSize: "24px"}}>{item.task}</span>
				<Button onClick={() => removeHandler(item.id)} className="m-lg-2" size="sm" variant="danger">Remove</Button>
				<Button className="" size="sm" variant="info">edit</Button>
			</div>);
		})}
	</>);

};


export default TodosList;