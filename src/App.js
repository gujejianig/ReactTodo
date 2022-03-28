import React, {useState} from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "./components/Pagination";

const App = () => {

	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const todosPerPage = 5;
	const [activePage, setActivePage] = useState(1);
	const [paginate, setPaginate] = useState(1);
	const submitHandler = (e) => {
		e.preventDefault();
		if (!inputValue) {
			alert('input have no value');
		} else {
			const newItem = {task: inputValue, id: Math.random()};
			// adding to Todos - main data
			setTodos([...todos, newItem]);
		}

		setInputValue('');
	};


	console.log(Math.ceil(todos.length / 5));

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			submitHandler(event);
		}
	};

	// function which renders page with pagination
	let end = activePage * todosPerPage;
	let start = end - todosPerPage;

	const paginatedList = (activeNumber) => {
		setActivePage(activeNumber);
	};


	const removeHandler = (id) => {
		setTodos(todos.filter((todo) => {
			return todo.id !== id;
		}));

	};


	return (<>
		<div className="Container">
			<div className="d-flex w-100 justify-content-sm-center mt-3">
				<input onKeyUp={handleKeyDown} value={inputValue} style={{width: '100%', borderRadius: '5px'}}
				       onChange={(e) => setInputValue(e.target.value)}/>
				<Button size="sm" onClick={submitHandler} variant="primary">Add</Button>
			</div>
			{todos.slice(start, end)?.map((item, index) => {
				return (<div key={index} className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
					<span style={{fontSize: "24px"}}>{item.task}</span>
					<Button onClick={() => removeHandler(item.id)} className="m-lg-2" size="sm" variant="danger">Remove</Button>
					<Button className="" size="sm" variant="info">edit</Button>
				</div>);
			})}
			<Pagination setActivePage={setActivePage} setPaginate={setPaginate}
			            activePage={activePage} onPaginatedList={paginatedList} todos={todos} todosPerPage={todosPerPage}/>

		</div>

	</>);
};
//
export default App;
