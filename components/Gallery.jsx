export default function Gallery(props){
	console.log(props);
	const galleryImgs = [];
	for(let i=1;i<5;i++){
		galleryImgs.push(
			<div key={i} className={"img-container curspoint hover-opacity " + (i==props.currentImg? "active":"")} data-position={i} onClick={props.changeImage}>
				<img src={`images/image-product-${i}-thumbnail.jpg` } alt="" />
			</div>
		)
	}
	return (
		<div className="gallery">
			{galleryImgs}
		</div>
	)
}
