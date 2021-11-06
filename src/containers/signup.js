import {Link} from "react-router-dom";
import Input from "./input";
import PasswordInp from "./password";
import "./signup.css"

function Signup(){
    return(
        <div style={{ overflowX: "hidden"}}>
           <div style={{marginTop:"1%", marginLeft:"8%"}} className="container bg-white w-100 margining border border-3">
         <h1 className="heading">Sign Up</h1>
         <h6 className="line">If you already have an account. Please <Link to="/login" className="text-primary" style={{textDecoration: "none"}}>Login</Link> </h6>
          <div className="row">
              
              <div className="col-md-8 ">
            <div className="row">
                <div className="col-md-6">
                <div className="my-2">
                <Input styling={{width:"90%"}} name="Enter Your First Name" />
             </div>
              </div>
              <div className="col-md-6">
              <div className="my-2">
                <Input styling={{width:"90%"}} name="Enter Your Last Name" />
             </div>
              </div>
              <div className="row">
              <div className="col-md-12 marginings">
              <div className="my-2 text-center">
           
                <Input styling={{width:"100%"}} name="Enter Your Email Address" />
                <h6 style={{fontSize:"12px"}} className="fw-light text-secondary">You should enter the correct E-mail Address.</h6>
                 </div>
        
              </div>
                  </div>
              
              
              <div className="row">
              <div className="col-md-6">
                <div className="my-2">
                <PasswordInp name="Password" />
             </div>
              </div>
              <div className="col-md-6">
              <div className="my-2">
                <PasswordInp name="Confirm Password" />
             </div>
              </div>
              <h6 style={{fontSize:"12px"}} className="fw-light text-secondary">Use 8 or more characters with a mix of letters, numbers & symbols</h6>
                
                  </div>
           
              <div className="row">
              <div className="col-md-10">
               
              </div>
              <div className="col-md-2">
              <div className="my-4">
                <button style={{marginBottom:"6%"}} className="btn btn-primary rounded shadowed"><Link to="/login" style={{textDecoration:"none",color:"white"}}>Next</Link></button>
             </div>
              </div>                
                  </div>



              </div>
              </div>
              <div className="col-md-4">
               <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWl--_ezHEzyNv4j9LtcZ4bD9ncmeen5zqovZBtlG5gZ0sKuWllJhABzVPNeF0LkZWe0&usqp=CAU" />
              </div>
          </div>



           </div>
        </div>
    )
}
export default Signup;