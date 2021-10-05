import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState(undefined);
	const [isOpen, setIsOpen] = useState(false);

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const createNewUser = (event) => {
		event.preventDefault();
		props.onAddUser({
			name: enteredName,
			age: enteredAge,
		});
		setEnteredName("");
		setEnteredAge("");
		setIsOpen(false);
	};

	const ctaHandler = () => {
		setIsOpen(true);
	};

    const closeHandler = () => setIsOpen(false);
    
	const addUserForm = (
		<form onSubmit={props.onAddUser}>
			<label className={styles.label}>
				User Name:
				<input
					type="text"
					onChange={nameChangeHandler}
					value={enteredName}
					className={styles.userInput}
				/>
			</label>
			<br />
			<label className={styles.label}>
				User Age:
				<input
					type="number"
					onChange={ageChangeHandler}
					value={enteredAge}
					className={styles.userInput}
				/>
			</label>

			<button 
            type="submit" 
            onClick={createNewUser}
            className={styles.add}>
				Add
			</button>
            <button 
            type="submit" 
            onClick={closeHandler}
            className={styles.add}>
				Cancel
			</button>
		</form>
	);

	const ctaBtn = (
		<button onClick={ctaHandler} className={styles.ctnBtn}>
			New User
		</button>
	);

	return <div>{isOpen ? addUserForm : ctaBtn}</div>;
};

export default UserForm;
