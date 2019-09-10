import React from "react";
import { specials } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
	// STEP 2 - add the imported data to state
	const [specialState, setSpecialState] = useState(specials);
	return (
		<div>
			{numberState.map((numbers, index) => (
				<NumberButton key={index} numbers={numbers} />
			))}
		</div>
	);
};
