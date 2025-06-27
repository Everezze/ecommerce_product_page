export default function Vitrine(props){
	console.log(props);
	return (
		<article className="vitrine">
			<div className="showcase">
				<div className="img-container main-display curspoint">
					<img src="images/image-product-1.jpg" alt="" />
					<div className="prev-img-btn img-container curspoint">
						<img src="images/icon-previous.svg" alt="" />
					</div>
					<div className="next-img-btn img-container curspoint">
						<img src="images/icon-next.svg" alt="" />
					</div>
				</div>
				<div className="gallery">
					<div className="img-container curspoint hover-opacity">
						<img src="images/image-product-1-thumbnail.jpg" alt="" />
					</div>
					<div className="img-container curspoint hover-opacity">
						<img src="images/image-product-2-thumbnail.jpg" alt="" />
					</div>
					<div className="img-container curspoint hover-opacity">
						<img src="images/image-product-3-thumbnail.jpg" alt="" />
					</div>
					<div className="img-container curspoint hover-opacity">
						<img src="images/image-product-4-thumbnail.jpg" alt="" />
					</div>
				</div>
			</div>
			<div className="product-info">
				<h1>SNEAKER COMPANY</h1>
				<h2>Fall Limited Edition Sneakers</h2>
				<p className="desc">
					These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&#39;ll withstand everything the weather can offer.
				</p>
				<div className="pricing">
					<div className="discounted-price">
						<h2 className="final-pricing">$125.00</h2>
						<span className="discount">50%</span>
					</div>
					<span className="initial-pricing">$250.00</span>
				</div>
				<div className="selection">
					<div className="quantifier">
						<img onClick={props.substracter} className="curspoint substracter hover-opacity" src="images/icon-minus.svg" alt="" />
						<span className="quantity">{props.quantity}</span>
						<img onClick={props.adder} className="curspoint adder hover-opacity" src="images/icon-plus.svg" alt="" />
					</div>
					<div className="carter">
						<button className="curspoint">
							<div className="img-container">
								<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/></svg>
							</div>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</article>
	)
}
