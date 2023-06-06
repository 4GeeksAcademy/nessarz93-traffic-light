import React from "react";
import Light from "./light.js";

//create your first component
const Home = () => {
	const colors = ["red", "yellow", "green"]

	return (
		<>
		<div className="poste">
		</div>
		<div className="semaforo">
			{colors.map((color) => {
				return <Light/>;
			})}
		</div>
		</>
	);
};

export default Home;
