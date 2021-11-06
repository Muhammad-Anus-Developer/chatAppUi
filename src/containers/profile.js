import { Link } from "react-router-dom";
import "./profile.css"

function Profile(){
    return(
        <div>
<h1 className="my-5">User Profile</h1>
<div  style={{margin:"auto"}} class="circle">
  <div class="image">
  </div>
</div>

<h3 className="my-2">Imran Khan</h3>
<p>imrankhan@gmail.com</p>
<Link to="/chatpage">
<button className="btn btn-danger rounded-pill shadowed my-1 px-3" >Start Chat</button>
</Link>

        </div>
    )
}
export default Profile;