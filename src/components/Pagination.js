import React from "react";
import {Button} from 'react-bootstrap';

const Pagination = ({todos, todosPerPage, onPaginatedList, paginationButtons}) => {

	paginationButtons = [];
	for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
		paginationButtons.push(i);
	}

// Hello

	return (<>
		<div className="d-flex">
			{paginationButtons?.map((btn, index) => {
				return <div key={index}>
					<Button onClick={() => onPaginatedList(index + 1)} size="sm" className="m-1"
					        variant="outline-dark">{btn}</Button>
				</div>;
			})}
		</div>
	</>);
};
// HELLLO  COMMIT 1
export default Pagination;