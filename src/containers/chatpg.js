import { width } from "@mui/system";
import "./chatpg.css"

function Chatpg(){
    return(
        <div className="grad my-2" >
            <h2 className="text-dark py-3">Chat Page</h2>
    <div className="chat-container" style={{background:"transparent"}}>
      <ul className="chat">
          <div className="bg-danger py-1 text-white" style={{width:"330px", marginBottom:"30px" }} > <img
            className="avatara"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkx6r5JIpRRaFdeSOgTqd2aKjK4Say3vr6g&usqp=CAU"
            alt=""
          /><h4 className="py-2">Babar Azam</h4></div>
        <li className="message left">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkx6r5JIpRRaFdeSOgTqd2aKjK4Say3vr6g&usqp=CAU"
            alt=""
          />
          <p>Hello, How are you?</p>
        </li>
        <li className="message right">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxrnIIB5prmdcu3ptBTDIu_yDJ_gyr0X-yA&usqp=CAU"
            alt=""
          />
          <p>I am fine how are you? :-)</p>
        </li>
       
      </ul>
      <div style={{marginTop:"40px"}}>
      <input type="text" className="text_input" style={{borderRadius:"50px", border:"1px solid green", marginBottom:"1px"}} placeholder="Enter Message..."  />
      
      </div>
    
    </div>
        </div>
    )
}

export default Chatpg;