import React from "react";
import UserItem from "./UserItem";
import styles from './UserList.module.css';

const UserList = (props) => {
	const listItems = props.list.map((user) => {
		return <UserItem userData={user} />;
	});

	return <ul className={styles.list}>{listItems}</ul>;
};

export default UserList;
