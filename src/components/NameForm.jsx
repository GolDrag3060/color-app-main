import React, { useState } from "react";

export default function NameForm({ onSubmit, disabled = false }) {
	const [name, setName] = useState("");

	const handleClick = () => {
		if (!disabled && name.trim()) {
			onSubmit(name.trim());
		}
	};

	return (
		<div style={{ marginTop: "1rem", width: "100%" }}>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your name"
				disabled={disabled}
				style={{
					padding: "0.5rem",
					fontSize: "1rem",
					width: "70%",
					marginRight: "0.5rem",
				}}
			/>
			<button
				onClick={handleClick}
				disabled={disabled || !name.trim()}
				style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
				{disabled ? "Assigning…" : "Submit"}
			</button>
		</div>
	);
}
