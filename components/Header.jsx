import React from "react"
import Cart from "./Cart";

export default function Header(props){

	const [showCart,setShowCart] = React.useState(false);

	function toggleCart(){
		setShowCart(prevState => !prevState);
	}

	function toggleMobileMenu(e){
		const menu = document.querySelector(".mobile-menu");
		menu.classList.toggle("active");
	}

	return (
		<header>
			<div className="mobile-menu">
				<nav className="mobile-nav">
					<div className="img-container menu-closer curspoint" onClick={toggleMobileMenu}>
						<img src="images/icon-close.svg" alt="" />
					</div>
					<ul className="vert-sep">
						<li>
							<a href="#">Collections</a>
						</li>
						<li>
							<a href="#">Men</a>
						</li>
						<li>
							<a href="#">Women</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="left-nav">
				<div className="img-container ham-icon curspoint" onClick={toggleMobileMenu}>
					<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill-rule="evenodd"/>
					</svg>
				</div>
				<div className="img-container">
					<img src="images/logo.svg" alt="logo" />
				</div>
				<nav>
					<ul className="hor-sep df">
						<li>
							<a href="#">Collections</a>
						</li>
						<li>
							<a href="#">Men</a>
						</li>
						<li>
							<a href="#">Women</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="right-nav">
				<div className="img-container cart-img" onClick={toggleCart}>
					{props.quantity > 0 &&
					<span className="quantity-indicator">{props.quantity}</span>
					}
					<img className="curspoint" src="images/icon-cart.svg" alt="" />
					{showCart && 
					<Cart quantity={props.quantity} removeProduct={props.removeProduct}/>
					}
				</div>
				<div className="img-container profile-pic">
					<img src="images/image-avatar.png" alt="" />
				</div>
			</div>
		</header>
	)
}
