import React, {useState} from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "./components/Pagination";
import SearchForm from "./components/SearchForm";
import TodosList from "./components/TodosList";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const todosPerPage = 5;
	const [activePage, setActivePage] = useState(1);
	const [lastBtnPagination, setLastBtnPagination] = useState(null);


	const paginatedList = (activeNumber) => {
		setActivePage(activeNumber);
	};


	return (<>
		<div className="Container">
			<SearchForm onPaginatedList={paginatedList} todosPerPage={todosPerPage} todos={todos} setTodos={setTodos}
			            inputValue={inputValue} setInputValue={setInputValue}/>
			<TodosList lastBtnPagination={lastBtnPagination} setActivePage={setActivePage} onPaginatedList={paginatedList}
			           setTodos={setTodos}
			           todosPerPage={todosPerPage} activePage={activePage} todos={todos}/>
			<Pagination setLastBtnPagination={setLastBtnPagination} setActivePage={setActivePage}
			            activePage={activePage} onPaginatedList={paginatedList} todos={todos} todosPerPage={todosPerPage}
			/>
		</div>

	</>);
};
//
export default App;
