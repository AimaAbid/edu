import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import React from 'react'
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import "./Createpost.css";

export default function EditPage() {
	var { id } = useParams();
	return (
		<div>
			<div>
				<div className="dash-header ">
					<div className="both" id="left">
						<i class="fa fa-rss" aria-hidden="true">
							&nbsp;
						</i>
						EduCollabHub
					</div>

					<div className="both" id="dash-right">
						<Link to={`/post/${id}`}>Go Back</Link>
					</div>
				</div>
			</div>

			<div className="vertical-adjustment">

        <div class="auth">
            <div className='form'>
                <div className="form-group">
                    <input type="text" class='form-control input-title' placeholder="Title"/>
                </div>
                <div className="form-group">
                <select>
                <option>Computer network</option>
                <option>Automata</option>
                <option>Compiler</option>
                <option>DBMS</option>
                <option>Data Structure</option>
                <option>Microprocessor</option>
                </select>
                </div>

                <div className="form-group">
                    <input type="text"  class='form-control input-body' placeholder="Body"/>
                </div>

                <div className="form-group">
                    <button><i class="fa fa-link" aria-hidden="true"></i></button> 
                     <button><i class="fa-solid fa-image"></i></button>
                     <button><i class="fa-solid fa-video"></i></button>
                     <button><i class="fa-solid fa-audio-description"></i></button>
                     </div>
                     <button className='btn btn-success'>Submit</button>
            </div>
        </div>
      </div>
		</div>
	);
}
