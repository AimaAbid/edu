import './Loginexpert.css'
function Loginexpert() {
    return(
        <div class="auth">
        <form class="form-signup"> 
        <h1>Login</h1>
             <div class="form-group">
             <label for="inputFirstname">Firstname:</label>
                <input type="text" className="form-control" placeholder="Enter username"/>
                   </div>
                   <div className='form-group'>
                   <label for="inputpassword">password:</label>
                <input type="text" className="form-control" placeholder="Password"/>
                   </div>
                   <div className='form-group'>
                <input type="submit" className="btn btn-success" value="Submit"/> 
            </div>
            </form>
            
        </div>
    );
}
export default Loginexpert