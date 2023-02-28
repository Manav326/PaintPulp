import MainContainer from "../CommonComponent/MainContainer";
import ContactForm from './ContactForm';
import { Link } from "react-router-dom";
function TnakyouPage() {
    return (
      <MainContainer>

     
        <div className="GalleryContainer ">
         <div className="ThankyouPageContainer"> 
        <h3>Thank you for your interest.</h3>
          <p style={{fontStyle:'italic'}} >Your fomr has been submitted successfully. We will get in touch with you soon.</p>
          <Link className="nav-link PageLink"  to='/'  >Go back to home page</Link>
        </div>  
        </div>

     </MainContainer>
    );
  }
  
  export default TnakyouPage;
  