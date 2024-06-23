import React from "react";
import "./Loginstudent.css";
import { Link } from "react-router-dom";

export default function Sponsor() {
	return (
		<div class="auth">
			<form class="form-signup">
				<h1>Login</h1>
				<div class="form-group">
					<label for="inputFirstname">Username:</label>

					<input
						type="email"
						className="form-control"
						placeholder="Enter username"
					/>
				</div>
				<div className="form-group">
					<label for="inputpassword">password:</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						required
					/>
				</div>
				<button className="btn btn-success" onClick={handleSubmit}>
					<Link to="/checkout-form">Sponsor Login!</Link>
				</button>
			</form>
		</div>
	);

	function handleSubmit(e) {
		e.preventDefault();
	}
}
