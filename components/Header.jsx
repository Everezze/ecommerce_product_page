import Cart from "./Cart";

export default function Header(props){
	return (
		<header>
			<div className="mobile-menu">
				<nav>
					<div className="img-container menu-closer">
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
				<div className="img-container ham-icon">
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
				<div className="img-container cart-img">
					<img className="curspoint" src="images/icon-cart.svg" alt="" />
					<Cart quantity={props.quantity}/>
				</div>
				<div className="img-container profile-pic">
					<img src="images/image-avatar.png" alt="" />
				</div>
			</div>
		</header>
	)
}
