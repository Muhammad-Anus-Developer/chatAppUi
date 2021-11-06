import {Link} from "react-router-dom"
import img from "./image.PNG"
import Input from "./input";
import PasswordInp from "./password";
function Signin(){
    return(
        <div className="text-center my-5">
            <div style={{width:"50%", margin:"auto"}} className="container bg-white margining border border-3">
            <h1 className="heading my-3">Login</h1>
         <h6 className="line">If don't have an account. Please <Link to="/" className="text-primary" style={{textDecoration: "none"}}>Sign Up</Link> </h6>
             <img width="30%" src={img} />
            <div className="row">
            <div className="col-md-12 ">
            <Input name="Email Address" styling={{marginTop:"3%"}} />
            </div>
            <div className="col-md-12">
            <PasswordInp name="Password" />
            </div>
            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                <button style={{marginBottom:"10%"}} className="btn btn-primary rounded shadowed my-4"><Link to="/profile" style={{textDecoration:"none",color:"white"}}>Login</Link></button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Signin;