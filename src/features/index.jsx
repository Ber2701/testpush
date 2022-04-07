import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./Todo/components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
	const initTodoList = [
		{
			id: 1,
			title: "Eat",
			status: "new",
		},
		{
			id: 2,
			title: "ia",
			status: "completed",
		},
		{
			id: 3,
			title: "dai",
			status: "new",
		},
	];
	const [todoList, setTodoList] = useState(initTodoList);
	const handleTodoList = (todo, idx) => {
		//clone current
		const newTodoList = [...todoList];
		console.log(todo, idx);
		//toggle this.state
		newTodoList[idx] = {
			...newTodoList[idx],
			status: newTodoList[idx].status === "new" ? "completed" : "new",
		};
		setTodoList(newTodoList);
	};
	const handleShowallClick = () => {};
	const handleShowCompletedClick = () => {};
	const handleShownewClick = () => {};
	return (
		<div>
			<h3>Todo List</h3>
			<TodoList todoList={todoList} onTodoClick={handleTodoList} />
			<div>
				<button onClick={handleShowallClick}>Show all</button>
				<button onClick={handleShowCompletedClick}>Show all</button>
				<button onClick={handleShownewClick}>Show all</button>
			</div>
		</div>
	);
}

export default TodoFeature;
