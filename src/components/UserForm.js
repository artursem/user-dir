import React, { useState, useReducer } from "react";
import styles from "./UserForm.module.css";
import Button from "./UI/Button";

const ACTIONS = {
	ADD_USER: "add-user",
	VALIDATE_USER: "validate-user",
	ADD_AGE: "add-age",
	VALIDATE_AGE: "validate-age",
	ZERO_USER: "zero-user",
	ZERO_AGE: "zero-age",
};

const usersReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_USER:
			return { value: action.payload, isValid: action.payload.length > 2 };
		case ACTIONS.VALIDATE_USER:
			return { value: state.value, isValid: state.value.length > 2 };
		case ACTIONS.ZERO_USER:
			return { value: "", isValid: null };
		default:
			return { value: "", isValid: false };
	}
};

const ageReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_AGE:
			return { value: action.payload, isValid: action.payload > 0 };
		case ACTIONS.VALIDATE_AGE:
			return { value: action.payload, isValid: action.payload > 0 };
		case ACTIONS.ZERO_AGE:
			return { value: "", isValid: null };
		default:
			return { value: "", isValid: false };
	}
};

const UserForm = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const [usersState, usersDispatch] = useReducer(usersReducer, {
		value: "",
		isValid: null,
	});

	const [ageState, ageDispatch] = useReducer(ageReducer, {
		value: "",
		isValid: null,
	});

	const nameChangeHandler = (event) => {
		usersDispatch({ type: ACTIONS.ADD_USER, payload: event.target.value });
	};

	const ageChangeHandler = (event) => {
		ageDispatch({ type: ACTIONS.ADD_AGE, payload: event.target.value });
	};

	const validateUser = () => {
		usersDispatch({ type: ACTIONS.VALIDATE_USER });
	};

	const validateAge = () => {
		usersDispatch({ type: ACTIONS.VALIDATE_AGE });
	};

	const createNewUser = (event) => {
		event.preventDefault();

		if (usersState.isValid && ageState.isValid) {
			props.onAddUser({
				name: usersState.value,
				age: ageState.value,
			});
		}

		usersDispatch({ type: ACTIONS.ZERO_USER });
		ageDispatch({ type: ACTIONS.ZERO_AGE });
		setIsOpen(false);
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
					value={usersState.value}
					className={`${styles.userInput} ${
						usersState.isValid === false && styles.error
					}`}
					onBlur={validateUser}
				/>
			</label>
			<br />
			<label className={styles.label}>
				User Age:
				<input
					type="number"
					onChange={ageChangeHandler}
					value={ageState.value}
					className={`${styles.userInput} ${
						ageState.isValid === false && styles.error
					}`}
					onBlur={validateAge}
				/>
			</label>
			<div className={styles.buttons}>
				<Button type="submit" onClick={createNewUser} className={styles.addBtn}>
					Add
				</Button>
				<Button
					type="submit"
					onClick={closeHandler}
					className={styles.cancelBtn}
				>
					Cancel
				</Button>
			</div>
		</form>
	);

	const ctaBtn = (
		<Button onClick={ctaHandler} className={styles.ctaBtn}>
			Add New User
		</Button>
	);

	return <div>{isOpen ? addUserForm : ctaBtn}</div>;
};

export default UserForm;
