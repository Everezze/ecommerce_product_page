export default function MainDisplay(props){
	//main-display curspoint =>.classes to add to this component
	console.log("MainDisplay props: ",props);
	return (
		<div className={"img-container " + props.classes.join(" ")}>
			<img src={`images/image-product-${props.currentImg}.jpg`} alt="" />
			<div className="prev-img-btn img-container curspoint" onClick={props.prevImage}>
				<img src="images/icon-previous.svg" alt="" />
			</div>
			<div className="next-img-btn img-container curspoint" onClick={props.nextImage}>
				<img src="images/icon-next.svg" alt="" />
			</div>
		</div>
	)
}
