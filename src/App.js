import React, {useState} from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "./components/Pagination";
import SearchForm from "./components/SearchForm";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const todosPerPage = 5;
	const [activePage, setActivePage] = useState(1);
	const [paginate, setPaginate] = useState(1);


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
			<SearchForm todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue}/>
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
