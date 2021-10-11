import React, { useState, useReducer } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import FilterList from "./components/FilterList";
import Card from "./components/UI/Card";

import "./App.css";

const startingState = [
	{ name: "Jan", age: 64, id: 1, key: 1 },
	{ name: "Max", age: 73, id: 2, key: 2 },
	{ name: "Ron", age: 43, id: 3, key: 3 },
];

export const LIST = {
	ADD: "list-add",
	DELETE: "list-delete",
};

const listReducer = (state, action) => {
	switch (action.type) {
		case LIST.ADD:
			return [...state, action.payload];
		case LIST.DELETE:
			return state.filter((user) => user.id !== action.payload);
		default:
			return startingState;
	}
};

function App() {
	const [listFilter, setListFilter] = useState("");
	const [listState, listDispatch] = useReducer(listReducer, startingState);

	const addUserHandler = (newUserData) => {
		const newId = Date.now();
		const newUser = {
			name: newUserData.name,
			age: newUserData.age,
			id: newId,
			key: newId,
		};
		// console.log(newUser);
		listDispatch({ type: LIST.ADD, payload: newUser });
	};

	const filterListHandler = (filteredValue) =>
		setListFilter(filteredValue.toLowerCase());

	const filteredUsers = listState.filter((user) =>
		user.name.toLowerCase().includes(listFilter)
	);

	return (
		<div>
			<Card>
				<UserForm onAddUser={addUserHandler} />
			</Card>
			<Card>
				<FilterList onFilterList={filterListHandler} />
			</Card>
			<Card>
				{!filteredUsers.length > 0 && <p>No users found</p>}
				<UserList list={filteredUsers} listDispatch={listDispatch} />
			</Card>
		</div>
	);
}

export default App;
