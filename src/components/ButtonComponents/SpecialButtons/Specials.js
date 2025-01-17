import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

export default function Specials() {
	// STEP 2 - add the imported data to state
	const [specialState] = useState(specials);
	return (
		<div className="special-buttons-container">
			{specialState.map((specials, index) => (
				<SpecialButton key={index} specials={specials} />
			))}
		</div>
	);
}
