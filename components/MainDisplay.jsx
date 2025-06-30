export default function MainDisplay(props){
	//main-display curspoint =>.classes to add to this component
	console.log("MainDisplay props: ",props);
	return (
		<div className={"img-container " + props.classes.join(" ")}>
			<img onClick={props.click ? props.toggleZoom:undefined} src={`images/image-product-${props.currentImg}.jpg`} alt="" />
			<div className="prev-img-btn img-container curspoint" onClick={props.prevImage}>
				<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
			</div>
			<div className="next-img-btn img-container curspoint" onClick={props.nextImage}>
				<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
			</div>
		</div>
	)
}
