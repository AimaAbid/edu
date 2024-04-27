import React from 'react'
import DashHeader from '../DashHeader'
import Dashboard from '../Dashboard'
import "../../App.css"

export default function PendingPosts() {
  return (
    <div>
      <DashHeader/>
      <Dashboard/>
    <div className='position-adjustment'>
    <div className="container">
				<div className="table-heading">Pending Posts</div>
				<br />
       
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Post Title</th>
							<th>Upload Date</th>
              <th>Post Status</th>
						</tr>
					</thead>
					

{/* 1. "The Rise of Artificial Intelligence: Exploring the Future of Machine Learning"
2. "Cybersecurity in the Digital Age: Strategies for Protecting Your Data"
3. "The Evolution of Programming Languages: From Assembly to Python"
4. "Quantum Computing: Unraveling the Mysteries of Quantum Mechanics"
5. "Blockchain Technology: Revolutionizing Transactions and Beyond"
6. "The Internet of Things (IoT): Connecting the World Through Smart Devices"
7. "Big Data Analytics: Leveraging Data for Insights and Innovation"
8. "Ethical Considerations in Artificial Intelligence: Balancing Innovation with Responsibility"
9. "Augmented Reality and Virtual Reality: Transforming User Experiences"
10. "The Future of Computing: Trends and Predictions for the Next Decade" */}


					<tbody>
						<tr>
							<td>The Future of Computing: Trends and Predictions for the Next Decade</td>
							<td>30-01-2024</td>
              <td>Waiting</td>
						</tr>
						<tr>
							<td>Augmented Reality and Virtual Reality: Transforming User Experiences</td>
							<td>02-02-2024</td>
              <td>Rejected</td>
						</tr>
						<tr>
							<td>Ethical Considerations in Artificial Intelligence</td>
							<td>02-02-2024</td>
              <td>Waiting</td>
						</tr>
						<tr>
							<td>The Internet of Things IoT: Connecting the World</td>
							<td>05-02-2024</td>
              <td>Waiting</td>
						</tr>
            <tr>
							<td>Blockchain Technology: Revolutionizing Transactions and Beyond</td>
							<td>05-02-2024</td>
              <td>Waiting</td>
						</tr>
						<tr>
							<td>Quantum Computing: Unraveling the Mysteries of Quantum Mechanics</td>
							<td>05-02-2024</td>
              <td>Waiting</td>
						</tr>

						<tr>
							<td>The Evolution of Programming Languages: From Assembly to Python</td>
							<td>09-02-2024</td>
              <td>Waiting</td>
						</tr>
					
					</tbody>
				</table>
        </div>
    </div>
    
    </div>
  )
}
