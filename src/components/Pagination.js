import React from "react";
import {Button} from 'react-bootstrap';

const Pagination = ({todos, todosPerPage}) => {


	let paginationButtons = [];

	for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
		paginationButtons.push(i);
	}

	console.log(paginationButtons);

	return (
		<>
			<div className="d-flex">
				{paginationButtons?.map((btn) => {
					return <Button size="sm" className="m-1" ariant="info">{btn}</Button>;
				})}
			</div>
		</>
	);
};

export default Pagination;