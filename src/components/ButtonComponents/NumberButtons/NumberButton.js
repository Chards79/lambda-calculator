import React from "react";

const NumberButton = props => {
	console.log(props);
	return <button className="number-buttons">{props.numbers}</button>;
};

export default NumberButton;
