import React from "react";

const UserItem = (props) => {
	const { name, age } = props.userData;
	return (
		<li>
			username: <b>{name}</b>, age: <b>{age}</b>
		</li>
	);
};

export default UserItem;
