import React, {useEffect} from "react";
import {Button} from 'react-bootstrap';

const Pagination = ({todos, todosPerPage, onPaginatedList, activePage, setLastBtnPagination}) => {

	let paginationButtons = [];
	for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
		paginationButtons.push(i);
	}

	return (<div className="d-flex">
		{paginationButtons?.map((btn, index) => {
			// onPaginatedList(btn)
			console.log('onPaginationBtn', btn);
			setLastBtnPagination(btn);
			return <div key={index}>
				<Button onClick={() => onPaginatedList(index + 1)} size="sm" className={activePage === btn ? 'active' : ''}
				        variant="outline-dark">{btn}</Button>
			</div>;
		})}
	</div>);
};

export default Pagination;