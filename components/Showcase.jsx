import MainDisplay from "./MainDisplay";
import Gallery from "./Gallery";

export default function Showcase(props){
	return (
		<div className={props.parentClass}>
			<MainDisplay classes={props.classes} currentImg={props.currentImg}
			prevImage={props.prevImage} nextImage={props.nextImage}/>
			<Gallery currentImg={props.currentImg} changeImage={props.changeImage} />
		</div>
	)
}
