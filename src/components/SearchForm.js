import {Button} from "react-bootstrap";
import React from "react";

const SearchForm = ({inputValue, setInputValue, setTodos, todos}) => {

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

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			submitHandler(event);
		}
	};


	return (<div className="d-flex w-100 justify-content-sm-center mt-3">
		<input onKeyUp={handleKeyDown} value={inputValue} style={{width: '100%', borderRadius: '5px'}}
		       onChange={(e) => setInputValue(e.target.value)}/>
		<Button size="sm" onClick={submitHandler} variant="primary">Add</Button>
	</div>);
};

export default SearchForm;