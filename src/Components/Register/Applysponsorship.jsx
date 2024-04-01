import './Applysponsorship.css';
function   Applysponsorship(){
    return(
        <div class="container">
       <form class="form-signup"> 
       <h1>Applysponsorship</h1>
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
        <div className="form-group">
    <label htmlFor="inputAcademicAchievements">Academic Achievements:</label>
    <textarea
        className="form-control"
        id="inputAcademicAchievements"
        placeholder="List your academic achievements here..."
        rows="4"
    ></textarea>
     </div>
     <div className="form-group">
    <label htmlFor="inputGoal">Goal:</label>
    <input 
        type="text" 
        className="form-control" 
        id="inputGoal" 
        placeholder="Enter your sponsorship goal" 
        aria-describedby="goalHelpText" 
    />
    <small id="goalHelpText" className="form-text text-muted">
        Describe your objective or aim in seeking sponsorship. What do you hope to achieve with the sponsorship?
    </small>
</div>

        <button type="submit" class="btn btn-success">Submit</button>
    </form> 
</div>
        
  );
    
}
export default Applysponsorship