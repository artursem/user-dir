import React from "react";
import Button from "./UI/Button";
import styles from "./UserItem.module.css";

const UserItem = (props) => {
	const { name, age, key } = props.userData;
	return (
		<li className={styles.li} key={key}>
			<div>
				username: <b>{name}</b>, age: <b>{age}</b>
			</div>
			<div>
				<Button className={styles.mini} disabled={true}>
					<i class="fas fa-user-edit"></i>
				</Button>
				<Button className={styles.mini}>
					<i class="far fa-trash-alt"></i>
				</Button>
			</div>
		</li>
	);
};

export default UserItem;
