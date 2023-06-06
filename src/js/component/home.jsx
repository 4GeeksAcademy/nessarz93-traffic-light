import React, { useState } from "react";

//create your first component
const Home = () => {
	
	const [color, setColor] = useState(unselected)
	
	const click = () => {
		setColor(className + color)
	}

	

	return (
		<>
		<div className="trafficTop"></div>
		<div className="semaforo">
			<div onClick= {()=> click("selected")} className="red light"></div>
			<div className="yellow light"></div>
			<div className="green light"></div>
		</div>
		</>
	);
};

export default Home;
