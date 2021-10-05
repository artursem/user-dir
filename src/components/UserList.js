import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
	const listItems = props.list.map((user) => {
		return <UserItem userData={user} />;
	});

	return <ul>{listItems}</ul>;
};

export default UserList;
