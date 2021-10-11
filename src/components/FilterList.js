import React, { useState } from "react";
import Button from "./UI/Button";
import styles from "./FilterList.module.css";

const FilterList = (props) => {
	const [enteredFilter, setEnteredFilter] = useState("");

	const changeFilterHandler = (e) => {
		setEnteredFilter(e.target.value);
		props.onFilterList(e.target.value);
	};

	const clearHandler = (e) => {
		e.preventDefault();
		setEnteredFilter("");
		props.onFilterList("");
	};

	return (
		<form className={styles.form}>
			<input
				type="text"
				placeholder="search"
				onChange={changeFilterHandler}
				value={enteredFilter}
				className={styles.filterInput}
			></input>
			<Button 
			className={styles.clearBtn}
			onClick={clearHandler}>x</Button>
		</form>
	);
};

export default FilterList;
