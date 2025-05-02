import React from "react";
import ColorSwatch from "./ColorSwatch";

export default function Result({ name, color, hex }) {
	return (
		<div style={{ textAlign: "center", marginTop: "2rem" }}>
			<h2>Thanks, {name}!</h2>
			<p>Your assigned color is:</p>
			<div style={{ display: "inline-block", margin: "1rem" }}>
				<ColorSwatch color={hex} label={color[0]} />
			</div>
			<p style={{ fontSize: "1.2rem" }}>
				<strong>{color}</strong> ({hex})
			</p>
		</div>
	);
}
