import React from "react";
import styles from "./commonBtn.module.css";

const Button = (props) => {
	return (
		<button
			type={props.type || "button"}
			className={`${props.className} ${styles.btn}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;