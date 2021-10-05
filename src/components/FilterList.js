import React, { useState } from "react";

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
		<form>
			<input
				type="text"
				placeholder="search"
				onChange={changeFilterHandler}
				value={enteredFilter}
			></input>
			<button onClick={clearHandler}>x</button>
		</form>
	);
};

export default FilterList;
