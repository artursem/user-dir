import React, { useState } from "react";

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
        setEnteredName('');
        setEnteredAge('');
        setIsOpen(false);
	};

    const ctaHandler = () => {
        setIsOpen(true);
    }

    const addUserForm = (
        <form onSubmit={props.onAddUser}>
        <label>
            User Name:
            <input type="text" onChange={nameChangeHandler} value={enteredName} />
        </label><br/>
        <label>
            User Age:
            <input type="number" onChange={ageChangeHandler} value={enteredAge} />
        </label>

        <button type="submit" onClick={createNewUser}>
            Add
        </button>
    </form>
    );

    const ctaBtn = (
        <button onClick={ctaHandler}>New User</button>
    );

	return (
		<div>
            {isOpen ? addUserForm : ctaBtn}   
		</div>
	);
};

export default UserForm;
