import React from "react";

export default function SearchBar() {
	return (
		<div >
			

			<div class="input-group mb-3">
				<input 
					type="text"
					class="form-control"
					placeholder="Search"
					aria-label="Search"
					aria-describedby="button-addon2"
				/>
				<div class="input-group-append">
					<button
						class="btn btn-outline-secondary"
						type="button"
						id="button-addon2"
					>
						Search!
					</button>
				</div>
			</div>

		

			
		</div>
	);
}
