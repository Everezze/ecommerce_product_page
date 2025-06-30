export default function CartedProduct(props){
	return (
		<div className="checkout">
			<div className="carted-product df">
				<div className="img-container thumbnail">
					<img src="images/image-product-1-thumbnail.jpg" alt="" />
				</div>
				<div>
					<p>Fall Limited Edition Sneakers</p>
					<p>
						<span>$125.00 x {props.quantity}</span>
						<span className="total-price"> ${(125.00 * props.quantity).toFixed(2)}</span>
					</p>
				</div>
				<div className="img-container curspoint cart-bin" onClick={props.removeProduct}>
					<img src="images/icon-delete.svg" alt="" />
				</div>
			</div>
			<button>Checkout</button>
		</div>
	)
}
