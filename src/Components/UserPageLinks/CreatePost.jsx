import React from 'react'
import DashHeader from '../DashHeader'
import Dashboard from '../Dashboard'
import './Createpost.css';


export default function CreatePost() {
  return (
    <div >
      <DashHeader/>
      <Dashboard/>
      
      <div className="position-adjustment">

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
  )
}
