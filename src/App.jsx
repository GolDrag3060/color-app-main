// src/App.jsx
import React, { useEffect, useState } from "react";
import { fetchAvailableJSONP, assignColorJSONP } from "./api/api";
import ColorSwatch from "./components/ColorSwatch";
import NameForm from "./components/NameForm";
import Result from "./components/Result";

export default function App() {
	const [available, setAvailable] = useState([]);
	const [participant, setParticipant] = useState(
		JSON.parse(localStorage.getItem("participant")) || null
	);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!participant) {
			fetchAvailableJSONP().then(setAvailable).catch(console.error);
		}
	}, [participant]);

	const handleSubmit = (name) => {
		if (loading) return;
		setLoading(true);

		assignColorJSONP(name)
			.then((res) => {
				if (res.error) {
					alert(res.error);
				} else {
					setParticipant(res);
					localStorage.setItem("participant", JSON.stringify(res));
				}
			})
			.catch((err) => {
				console.error(err);
				alert("Unexpected error");
			})
			.finally(() => setLoading(false));
	};

	const handleReset = () => {
		localStorage.removeItem("participant");
		setParticipant(null);
		setLoading(false);
		fetchAvailableJSONP().then(setAvailable).catch(console.error);
	};

	return (
		<div className="container">
			<header>
				<h1>Aviable colors</h1>
			</header>

			{!participant ? (
				<>
					<div className="palette">
						{available.map((c) => (
							<ColorSwatch
								key={`${c.color}-${c.hex}`}
								color={c.hex}
								label={c.color[0]}
							/>
						))}
					</div>
					<NameForm onSubmit={handleSubmit} disabled={loading} />
				</>
			) : (
				<>
					<Result
						name={participant.name}
						color={participant.color}
						hex={participant.hex}
					/>
					<button onClick={handleReset}>Reset</button>
				</>
			)}
		</div>
	);
}
