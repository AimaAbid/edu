import React from 'react'
import DashHeader from '../DashHeader'
import Dashboard from '../Dashboard'
import './Createpost.css';
import { useState } from 'react';


export default function CreatePost() {
  var [post,setPost]=useState({
    title:"",
    subject:"",
    description:"",
    pic:""
  });
  var [img,setImg]=useState("");
  return (
    <div >
      <DashHeader/>
      <Dashboard/>
      
      <div className="position-adjustment">

        <div class="auth">
            <div className='form'>
                <div className="form-group">
                    <input type="text" class='form-control input-title' placeholder="Title" name='title' onChange={handleChange}/>
                </div>

                <div className="form-group">
                <select onChange={handleChange} name='subject'>
                <option>Computer network</option>
                <option>Automata</option>
                <option>Compiler</option>
                <option>DBMS</option>
                <option>Data Structure</option>
                <option>Microprocessor</option>
                </select>
                </div>

                <div className="form-group">
                    <input type="text"  class='form-control input-body' onChange={handleChange} name='description' placeholder="Body"/>
                </div>

                {/* <div className="form-group">
                    <button><i class="fa fa-link" aria-hidden="true"></i></button> 
                     <button><i class="fa-solid fa-image"></i></button>
                     <button><i class="fa-solid fa-video"></i></button>
                     <button><i class="fa-solid fa-audio-description"></i></button>
                     </div> */}
                     <button className='btn btn-success'>Submit</button>
            </div>
            <input type="file"onChange={handleMedia} name='media' />
            
        </div>
      </div>
    </div>
  );

  async function handleMedia(e){
    var formData = new FormData();
		formData.append("file", e.target.files[0]);
		 var response=await fetch("http://localhost:8000/upload", {
			method: "post",
			body: formData,
		});
    response=await response.json();
    setImg(response.imgPath);
   

  }

  function handleChange(e){
   setPost({...post,[e.target.name]:e.target.value,pic:img});
   console.log("post");
   console.log(post);
  }
}
