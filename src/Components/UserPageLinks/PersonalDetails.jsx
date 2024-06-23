import React from "react";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import "../../App.css";
import G1 from"../../Assets/unnamed.jpg"

export default function PersonalDetails() {
	return (
		<div>
			<DashHeader />
			<Dashboard />
			<div className="position-adjustment">
				<div className="container">
					<div className="table-heading">Personal Details</div>
					<br />
					<br />
          <div className="in-line">
					<div >
            <img className="profile-picture" src={G1} alt="profile" />
          </div>
					<div >
						
						<form className="details-form">
            <label >User Name</label>
								<input
									type="text"
									class="form-control"
									
									
								/>
							
								<label >Email address</label>
								<input
									type="email"
									class="form-control"
									
								/>
								<small id="emailHelp" class="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
						
						
								<label>Password</label>
								<input
									type="password"
									class="form-control"
									
								/>
							
							<div class="form-group form-check">
								<input
									type="checkbox"
									class="form-check-input"
									
								/>
								<label class="form-check-label" >
									Check me out
								</label>
							</div>
							<button type="submit" class="btn btn-success">
								Edit!
							</button>
						</form>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}
