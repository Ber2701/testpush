import React from "react";
import PropTypes from "prop-types";
import TodoList from "./Todo/components/TodoList";

TodoFeature.propTypes = {};
export const todoList = [
	{
		id: 1,
		title: "Eat",
	},
	{
		id: 2,
		title: "ia",
	},
	{
		id: 3,
		title: "dai",
	},
];
function TodoFeature(props) {
	return (
		<div>
			<h3>Todo List</h3>
			<TodoList todoList={todoList} />
		</div>
	);
}

export default TodoFeature;
