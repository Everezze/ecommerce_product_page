import Header from "./components/Header";
import Vitrine from "./components/Vitrine";
import React from "react";

export default function App(){

	const [count,setCount] = React.useState(0);
	const [zoom,setZoom] = React.useState(false);

	function add(){
		const quantity = document.querySelector(".quantity");
		quantity.textContent = parseInt(quantity.textContent) + 1;
	}

	function substract(){
		const quantity = document.querySelector(".quantity");
		if(quantity.textContent - 1 >= 0){
			quantity.textContent = parseInt(quantity.textContent) - 1;
		}
	}

	function removeProduct(){
		setCount(0);
	}

	function putToCart(){
		const quantity = document.querySelector(".quantity");
		setCount(parseInt(quantity.textContent));
	}

	function toggleZoom(){
		setZoom(prevState => !prevState);
	}

	return (
		<>
			<Header quantity={count} removeProduct={removeProduct}/>
			<Vitrine quantity={count} adder={add}
			substracter={substract}
			putToCart={putToCart} toggleZoom={toggleZoom}
			zoom={zoom}/>
		</>
	)
}
