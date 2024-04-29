import "./Signupstudent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Signupstudent() {

	var [details,setDetails]=useState({
		firstname:"",
		lastname:"",
		age:"",
		email:"",
		qualification:"",
		password:""
	})
	return (
		<div className="container-student">
			<div class="form-signup">
				<form>
					<h1>Signup </h1>

					<div class="form-group">
						<div class="row">
							<div class="col-md-6">
								<label for="inputFirstname">firstname:</label>
								<input onChange={handleChange}
									type="text"
									class="form-control"
									placeholder="firstname"
									name="firstname"
								/>
							</div>

							<div class=" col-md-6">
								<label for="inputLastN=name">lastname:</label>
								<input
								onChange={handleChange}
									type="text"
									class="form-control"
									placeholder="lastname"
									name="lastname"
								/>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label for="inputAge">age:</label>
						<input type="text" class="form-control" placeholder="age" name="age" onChange={handleChange} />
					</div>
					<div class="form-group">
						<label for="inputAge">email:</label>
						<input type="email" class="form-control" name="email" placeholder="email" onChange={handleChange} />
					</div>

					<div class="form-group">
						<label class="my-1 mr-2" for="inlineFormCustomSelectPref">
							qulification
						</label>
						<select
							class="custom-select my-1 mr-sm-2"
							id="inlineFormCustomSelectPref" onChange={handleChange}
							name="qualification"
						>
							<option selected>Choose...</option>
							<option value="10th">10th</option>
							<option value="12th">12th</option>
							<option value="b.tech">b.tech</option>
						</select>
					</div>

					<div class="form-group">
						<label for="inputPassword">password:</label>
						<input
							type="password"
							class="form-control"
							placeholder="password"
							name="password"
							onChange={handleChange}
						/>
					</div>
					<br />

					<button type="submit" onClick={handleSubmit} class="btn  btn-success ">
						<Link to="/">Sign Up!</Link>
					</button>
					<br />

					<Link to="/" className="already">
						Already registered? Log In!
					</Link>
				</form>
			</div>
		</div>
	);

	function handleChange(e){
		setDetails({...details,[e.target.name]:e.target.value});
		console.log(details)

	}

	async function handleSubmit(e){
		e.preventDefault();
		var response=await fetch("http://localhost:8000/register",{
			method: "POST",
			headers:{"Content-Type": "application/json"},
			body:JSON.stringify(details)
		}
		
		
	);
	if(response.ok){
		
		alert("User Added Successfully"); 
	}

	}
}
export default Signupstudent;
