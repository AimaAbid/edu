import "./Signupexpert.css";
import { Link } from "react-router-dom";
function Signupexpert() {
	return (
        
		<div class="expert-log-container">
			<form class="form-signup">
				<h1>Signup expert</h1>
				<div class="form-group">
					<div class="row">
						<div class="col-md-6">
							<label for="inputFirstname">Firstname:</label>
							<input type="text" class="form-control" placeholder="firstname" />
						</div>
						<div class=" col-md-6">
							<label for="inputLastN=name">Lastname:</label>
							<input type="text" class="form-control" placeholder="lastname" />
						</div>
					</div>
				</div>
				<div class="form-group">
					<label for="inputAge">Age:</label>
					<input type="text" class="form-control" placeholder="age" />
				</div>
				<div class="form-group">
					<label for="inputAge">Email:</label>
					<input type="email" class="form-control" placeholder="email" />
				</div>
				<div class="form-group">
					<label class="my-1 mr-2" for="inlineFormCustomSelectPref">
						Qulification
					</label>
					<select
						class="custom-select my-1 mr-sm-2"
						id="inlineFormCustomSelectPref"
					>
						<option selected>Choose...</option>
						<option value="10th">10th</option>
						<option value="12th">12th</option>
						<option value="b.tech">b.tech</option>
					</select>
				</div>
				<div class="form-group">
					<label class="my-1 mr-2" for="inlineFormCustomSelectPref">
						Experiences
					</label>
					<select
						class="custom-select my-1 mr-sm-2"
						id="inlineFormCustomSelectPref"
					>
						<option selected>Choose...</option>
						<option value="10th">3year</option>
						<option value="12th">5year</option>
						<option value="b.tech">Teaching</option>
						<option value="b.tech">Unemployed</option>
						<option value="b.tech">Professional Job</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputPassword">Password:</label>
					<input type="password" class="form-control" placeholder="password" />
				</div>
				<br />

				<button type="submit" class="btn btn-lg btn-success ">
					Login!
				</button>
				<br />

				
				<Link to="/" className="already">Already registered? Log In!</Link>
			</form>
		</div>
	);
}
export default Signupexpert;
