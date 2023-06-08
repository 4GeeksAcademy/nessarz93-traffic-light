import React, { useState } from "react";

//create your first component
const Home = () => {
	
	const [color, setColor] = useState("")

	

	return (
		<>
		<div className="trafficTop"></div>
		<div className="semaforo">
			<div onClick= {()=> setColor("rojo")} className={"red light"+" " + (color==="rojo"? "prendido":"")}></div>
			<div onClick= {()=> setColor("amarillo")} className={"yellow light" +" " + (color==="amarillo"? "prendido":"")}></div>
			<div onClick= {()=> setColor("verde")} className={"green light" +" " + (color==="verde"? "prendido":"")}></div>
		</div>
		</>
	);
};

export default Home;
