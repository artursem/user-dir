import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState(undefined);
	const [isOpen, setIsOpen] = useState(false);
	const [enteredNameValid, setEnteredNameValid] = useState(true);
	const [enteredAgeValid, setEnteredAgeValid] = useState(true);

	const nameChangeHandler = (event) => {
		if (enteredName.length === 0) {
			setEnteredNameValid(false)
		} else {
			setEnteredNameValid(true)
		}

		setEnteredName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		if (enteredAge <= 0) {
			setEnteredAgeValid(false)
		} else {
			setEnteredAgeValid(true)
		}
		setEnteredAge(event.target.value);
	};

	const createNewUser = (event) => {
		event.preventDefault();

		if (enteredNameValid && enteredAgeValid) {
			props.onAddUser({
				name: enteredName,
				age: enteredAge,
			});

			setEnteredName("");
			setEnteredAge("");
			setIsOpen(false);
			return;
		}

		

		if (enteredAge < 0) {
			setEnteredAgeValid(false)
		}
	};

	const ctaHandler = () => {
		setIsOpen(true);
	};

	const closeHandler = () => setIsOpen(false);

	const addUserForm = (
		<form onSubmit={props.onAddUser} className={styles.form}>
			<label className={styles.label}>
				User Name:
				<input
					type="text"
					onChange={nameChangeHandler}
					value={enteredName}
					className={`${styles.userInput} ${!enteredNameValid && styles.error}`}
					/>
			</label>
			<br />
			<label className={styles.label}>
				User Age:
				<input
					type="number"
					onChange={ageChangeHandler}
					value={enteredAge}
					className={`${styles.userInput} ${!enteredAgeValid && styles.error}`}
				/>
			</label>
			<div className={styles.buttons}>
				<button type="submit" onClick={createNewUser} className={styles.addBtn}>
					Add
				</button>
				<button
					type="submit"
					onClick={closeHandler}
					className={styles.cancelBtn}
				>
					Cancel
				</button>
			</div>
		</form>
	);

	const ctaBtn = (
		<button onClick={ctaHandler} className={styles.ctaBtn}>
			Add New User
		</button>
	);

	return <div>{isOpen ? addUserForm : ctaBtn}</div>;
};

export default UserForm;
