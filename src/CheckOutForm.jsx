// import React, { useState } from "react";
// import {
// 	CardElement,
// 	useStripe,
// 	Elements,
// 	useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import "./CheckOutForm.css";

// const stripePromise = loadStripe("pk_test_51PA5xLSF9fS1hf4NahJZAzdgtPWlh7jwTFlLRb4sAZAbI5dzyDBrtVGLdE11vGGOGOJjzVVT8npkTGINseegqSsZ00qfsiyBjn");

// const CheckoutForm = () => {
// 	const stripe = useStripe();
// 	const elements = useElements();
// 	const [error, setError] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [name, setName] = useState("");

// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
// 		setLoading(true);

// 		const { error, paymentMethod } = await stripe.createPaymentMethod({
// 			type: "card",
// 			card: elements.getElement(CardElement),
// 			billing_details: {
// 				name: name,
// 			},
// 		});

// 		setLoading(false);

// 		if (error) {
// 			setError(error.message);
// 		} else {
// 			// Send paymentMethod.id to your server to complete the payment
// 			console.log("Payment Method:", paymentMethod);
// 		}
// 	};

// 	return (
// 		<div className="checkout">
// 			<div className="checkout-form-container">
// 				<h2>Checkout</h2>
// 				<form onSubmit={handleSubmit} className="checkout-form">
// 					<div className="form-group">
// 						<label>Name</label>
// 						<input
// 							type="text"
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 							placeholder="Name"
// 							className="form-control"
// 						/>
// 					</div>
// 					<div className="form-group">
// 						<label>Card details</label>
// 						<CardElement options={{}} className="form-control" />
// 					</div>
// 					{error && <div className="error-message">{error}</div>}
// 					<button
// 						type="submit"
// 						disabled={!stripe || loading}
// 						className="btn btn-primary"
// 					>
// 						{loading ? "Processing..." : "Pay"}
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// const Checkout = () => {
// 	return (
// 		<div className="checkout-container">
// 			<Elements stripe={stripePromise}>
// 				<CheckoutForm />
// 			</Elements>
// 		</div>
// 	);
// };

// export default Checkout;
