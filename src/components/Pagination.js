import React from "react";
import {Button} from 'react-bootstrap';

const Pagination = ({todos, end, onPaginationHandler}) => {

	// const onPagination = (index) => {
	// 	end = index * 5
	// }

	let btn = [];
	for (let i = 1; i <= Math.ceil(todos.length / 5); i++) {
		btn.push(<Button onClick={() => onPaginationHandler(i)} className="m-1" size={"sm"}>{i}</Button>);
	}
	return (
		<>
			<div className="d-flex">
				{btn.map((num, index) => {
					return <div key={index}> {num} </div>;
				})}
			</div>
		</>
	);
};

export default Pagination;