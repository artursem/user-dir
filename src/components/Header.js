import React, { useState, useContext } from "react";
import UserForm from "./UserForm";
import Button from "./UI/Button";
import styles from "./Header.module.css";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openFormHandler = () => {
		setIsOpen(true);
	}

    const closeFormHandler = () => {
		setIsOpen(false);
	}

	const ctaBtn = (
		<Button onClick={openFormHandler} className={styles.ctaBtn}>
			Add New User
		</Button>
	);

    const userForm = (
        <UserForm 
        onAddUser={props.onAddUser}
        onCancel={closeFormHandler}/>
    )

	return (
    <>
        {!isOpen && ctaBtn}
        {isOpen && userForm}
    </>
    )
};

export default Header;
