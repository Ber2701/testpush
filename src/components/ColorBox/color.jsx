import React, { useState } from "react";
import Counter from "../counter";

function ColorBox(props) {
	const [color, setColor] = useState("white");
	return (
		<div>
			{color}
			<button onClick={() => setColor("brown")}>change</button>
				<button onClick={() => setColor("black")}>change to black</button>
		</div>
	);
}

export default ColorBox;
