// import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <footer className='' id=''>

        <div className="heading-footer">
            <span style={{'color':'#333'}}>Edu Collab </span>
            <span style={{'color':'#5cad3d'}}>Hub</span>
		</div>

	  <ul className="all">
	  	<li><Link to="">Help</Link></li>
	  	<li><Link to="">Blogs</Link></li>
      
	  </ul>

      <ul className="all">
	  	<li><Link to="">Community</Link></li>
	  	<li><Link to="">Whats New!</Link></li>
	  	
	  </ul>

      <ul className="all">
	  	<li><Link to="">Our Team</Link></li>
	  	<li><Link to="">Our Office</Link></li>
	  	
	  </ul>

    <ul className="all">
	  	<li><Link to="">Our Team</Link></li>
	  	<li><Link to="">Our Office</Link></li>
	  	
	  </ul>

    
	
       <p className='text-center footer-bottom'>&copy; 2024 Education Platform. All rights reserved.</p>
    </footer>
  )
}


