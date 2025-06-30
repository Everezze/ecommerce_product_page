import CartedProduct from "./Product";

export default function(props){
	function displayCartContent(){
		if(props.quantity){
			return (
				<CartedProduct quantity={props.quantity}
				removeProduct={props.removeProduct}/>
			)
		}
		return (
			<p className="empty-msg">Your cart is empty.</p>
		)
	}

	return (
		<div className="cart">
			<h3>Cart</h3>
			{displayCartContent()}
		</div>
	)
}
