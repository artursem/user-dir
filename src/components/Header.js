import React, { useState, useContext } from "react";
import UserForm from "./UserForm";
import ModalContext from '../store/modal-context'
import Button from "./UI/Button";
import styles from "./Header.module.css";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const ctx = useContext(ModalContext);

	const ctaBtn = (
		<Button onClick={()=>{
            setIsOpen(true)
        }} className={styles.ctaBtn}>
			Add New User
		</Button>
	);

    const userForm = (
        <UserForm 
        onAddUser={props.onAddUser}
        onCancel={()=> {
            setIsOpen(false)
        }}/>
    )

	return (
    <>
        {!isOpen && ctaBtn}
        {isOpen && userForm}
    </>
    )
};

export default Header;
