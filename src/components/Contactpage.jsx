import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground" >
      <div style={{marginLeft:"480px"}}>
        <h2 style={{marginLeft:"0px",marginBottom:"40px"}}>Say Hello!</h2>
  <div className="input-group mb-3 w-50">
    <input type="email" className="form-control " placeholder="Enter your mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
    
  </div>
  <div className="input-group w-50">
    
    <textarea className="form-control" placeholder="Message" aria-label="With textarea" defaultValue={""} />
  </div>
  
  <div className="position-relative">
  <div className="position-absolute top-0 start-0">
  <button type="button" className="btn mt-3 w-25" style={{backgroundColor:"green",marginLeft:"390px"}}>Send</button>
  </div>
</div>
</div>
</div>

     
   
  );
  }

export default Contactpage;