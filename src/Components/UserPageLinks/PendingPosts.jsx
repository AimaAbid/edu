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
					<tbody>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
              <td>Waiting</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
              <td>Rejected</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
              <td>Waiting</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>26-09-2000</td>
              <td>Waiting</td>
						</tr>
            <tr>
							<td>There I was</td>
							<td>26-09-2000</td>
              <td>Waiting</td>
						</tr>
					
					</tbody>
				</table>
        </div>
    </div>
    
    </div>
  )
}
