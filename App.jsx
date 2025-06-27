import Header from "./components/Header";
import Vitrine from "./components/Vitrine";
import React from "react";

export default function App(){

	const [count,setCount] = React.useState(0);

	function add(){
		setCount(prevCount => prevCount + 1);
	}

	function substract(){
		setCount(prevCount => {
			if(prevCount > 0){
				return prevCount - 1;
			};
			return 0;
		});
	}

	return (
		<>
			<Header quantity={count}/>
			<Vitrine quantity={count} adder={add}
			substracter={substract} />
		</>
	)
}
