import React from "react";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";

export default function UploadedPosts() {
	return (
		<div>
			<DashHeader />
			<Dashboard />
			<div className="position-adjustment">
      <div className="container">
				<div className="table-heading">Uploaded Posts</div>
				<br />
       
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Post Title</th>
							<th>Upload Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
            <tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
						</tr>
					</tbody>
				</table>
        </div>
			</div>
		</div>
	);
}
