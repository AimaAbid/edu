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
							<td>The Future of Computing: Trends and Predictions for the Next Decade"</td>
							<td>05-02-2024</td>
						</tr>
						<tr>
							<td>Big Data Analytics: Leveraging Data for Insights and Innovation</td>
							<td>06-02-2024</td>
						</tr>
						<tr>
							<td>The Rise of Quantum Computing: Revolutionizing Information Processing</td>
							<td>08-02-2024</td>
						</tr>
						<tr>
							<td>Cyber Threats-Ransomware,Phishing and Social Engineering</td>
							<td>08-02-2024</td>
						</tr>
            <tr>
							<td>Kubernetes and Cloud Computing</td>
							<td>09-02-2024</td>
						</tr>
						<tr>
							<td>React Life Cyle and Hooks</td>
							<td>09-02-2024</td>
						</tr>
						<tr>
							<td>The Internet of Things : Connecting the World Through Smart Devices</td>
							<td>09-02-2024</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>09-02-2024</td>
						</tr>
					</tbody>
				</table>
        </div>
			</div>
		</div>
	);
}
