import './Signupstudent.css';
import { Link } from 'react-router-dom';
function  Signupstudent(){
    return(
        <div className='container-student'>
       <form class="form-signup"> 
       <h1>Signup student</h1>
    <div class="form-group">
     <div class="row">
            <div class="col-md-6">
                <label for="inputFirstname">firstname:</label>
                <input type="text" class="form-control"  placeholder="firstname"/>
            </div>
            <div class=" col-md-6">
                <label for="inputLastN=name">lastname:</label>
                <input type="text" class="form-control"  placeholder="lastname"/>
            </div>
        </div>
        </div>
        <div class="form-group">
            <label for="inputAge">age:</label>
            <input type="text" class="form-control" placeholder="age" />
        </div>
        <div class="form-group">
            <label for="inputAge">email:</label>
            <input type="email" class="form-control" placeholder="email" />
        </div>
        <div class="form-group">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">qulification</label>
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
               <option selected>Choose...</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="b.tech">b.tech</option>
              </select>
        </div>
        <div class="form-group">
            <label for="inputPassword">password:</label>
            <input type="password" class="form-control"  placeholder="password" />
        </div>
        <br />
        <button type="submit" class="btn btn-lg btn-success ">
        <Link to="/">Sign Up!</Link>
					
				</button>
				<br />

				
				<Link to="/" className='already'>Already registered? Log In!</Link>
    </form> 
</div>
        
  );
    
}
   export default Signupstudent