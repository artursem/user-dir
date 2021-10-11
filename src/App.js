import React, { useState } from "react";
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

function App() {
	const [users, setUsers] = useState(startingState);
	const [listFilter, setListFilter] = useState("");

	const addUserHandler = (newUserData) => {
		// const newId = Math.floor(Math.random() * 1000);
		const newId = Date.now();
		// does id already exist?!
		const newUser = {
			name: newUserData.name,
			age: newUserData.age,
			id: newId,
			key: newId
		};
		setUsers((prevState) => [...prevState, newUser]);
	};

	const filterListHandler = (filteredValue) =>
		setListFilter(filteredValue.toLowerCase());

	const filteredUsers = users.filter((user) =>
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
				{!filteredUsers.length>0 && <p>No users found</p>}
				<UserList list={filteredUsers} />
			</Card>
		</div>
	);
}

export default App;
