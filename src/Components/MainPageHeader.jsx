import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import PayPalLink from './UserPageLinks/PayPalLink'

export default function MainPageHeader() {
  return (
    <div>
        	<div className="header">
				<div className="left">
					<i class="fa fa-rss" aria-hidden="true">
						&nbsp;
					</i>
					EduCollabHub
				</div>
				<div id="right">
					<ul>
					
						<li>
							<Link to="/course-list">Courses!</Link>
						</li>
						
						<li>
							<div><PayPalLink/></div>
						</li>
						
						<li >
							<Link to="/user" ><i class="fa fa-user-circle" aria-hidden="true" ></i></Link>
						</li>
					</ul>
				</div>
			</div>
    </div>
  )
}
