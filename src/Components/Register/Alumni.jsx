import './Alumni.css';
function   Alumni(){
    return(
        <div class="container">
       <form class="form-signup"> 
       <h1>Alumni</h1>
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
            <label for="inputPhoneno">Phone no.:</label>
            <input type="number" class="form-control"  placeholder="phone no." />
        </div>
        <div class="form-group">
            <label for="inputPassword">Password:</label>
            <input type="password" class="form-control"  placeholder="Password" />
        </div>
                  <div className="form-group">
                    <label htmlFor="inputYearOfPassing">Year of Passing from IUST:</label>
                    <input type="text" className="form-control" id="inputYearOfPassing" placeholder="Year of Passing from IUST" />
                </div>
        <div class="form-group">
            <label for="inputRegister number">Register number:</label>
            <input type="number" class="form-control"  placeholder="Register number" />
        </div>
        <div class="form-group">
            <label for="inputjob">Job:</label>
            <input type="text" class="form-control"  placeholder="Job." />
        </div>
       

        <button type="submit" class="btn btn-success">Submit</button>
    </form> 
</div>
        
  );
    
}
export default Alumni