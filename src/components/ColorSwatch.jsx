import React from "react";

export default function ColorSwatch({ color, label }) {
	return (
		<div
			style={{
				backgroundColor: color,
				width: "50px",
				height: "50px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "100px",
				cursor: "default",
			}}
			title={color}>
			<span style={{ color: "#fff", fontWeight: "bold" }}>{label}</span>
		</div>
	);
}
