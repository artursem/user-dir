import React from "react";
import Card from "./Card";

import styles from "./Modal.module.css";

const Modal = (props) => {
    
	return (
		<div className={styles.backdrop}>
			<Card className={styles.modal}>
				<header>
					<h2>{props.title}</h2>
				</header>
				<div>{props.children}</div>
			</Card>
		</div>
	);
};

export default Modal;
