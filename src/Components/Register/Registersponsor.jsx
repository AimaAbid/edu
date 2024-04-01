import './Registersponsor.css';
function   Registersponsor(){
    return(
        <div class="container">
       <form class="form-signup"> 
       <h1>Signup expert</h1>
    <div class="form-group">
     <div class="row">
            <div class="col-md-6">
                <label for="inputFirstname">Firstname:</label>
                <input type="text" class="form-control"  placeholder="firstname"/>
            </div>
            <div class=" col-md-6">
                <label for="inputLastN=name">Lastname:</label>
                <input type="text" class="form-control"  placeholder="lastname"/>
            </div>
        </div>
        </div>
        <div class="form-group">
            <label for="inputAge">Email:</label>
            <input type="email" class="form-control" placeholder="email" />
        </div>
        <div class="form-group">
            <label for="inputPassword">Password:</label>
            <input type="password" class="form-control"  placeholder="password" />
        </div>
        <div class="form-group">
            <label for="inputPhoneno">Phone no.:</label>
            <input type="number" class="form-control"  placeholder="phone no." />
        </div>
        <div class="form-group">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Qulification</label>
        <select className="custom-select my-1 mr-sm-2" id="inputQualification">
               <option value="">Choose...</option>
               <option value="High School Diploma">High School Diploma</option>
               <option value="Associate's Degree">Associate's Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
             <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
            <option value="Professional Certification">Professional Certification</option>
                 <option value="Other">Other</option>
            </select>

        </div>
        <div className="form-group">
    <label htmlFor="inputJob">Job:</label>
    <input type="text" className="form-control" id="inputJob" placeholder="Job" />
     </div>   
        <button type="submit" class="btn btn-success">Submit</button>
    </form> 
</div>
        
  );
    
}
export default Registersponsor