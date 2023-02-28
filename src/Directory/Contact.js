import MainContainer from "../CommonComponent/MainContainer";
import ContactForm from './ContactForm';

function Contact() {
    return (
      <MainContainer>
      
     
     
        <div className="GalleryContainer ">
       
        <div class="row justify-content-md-left" >
         
            <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h2 >Contact Us</h2>
            <a href="mailto:pue@paintpulp.com" className="nav-link PageLink">pue@paintpulp.com</a>
            <p>Dubai, UAE</p>
            
            <div className="ContactDetail">
            <ul className='Social'>
              <li>
              <a href='https://www.instagram.com/paint_pulp/?igshid=YmMyMTA2M2Y%3D' className="SocialIcon IconInsta" ></a>
              </li>
              <li>
             <a href='https://www.facebook.com/piu.majumder.18?mibextid=LQQJ4d' className="SocialIcon IconFaceBook" ></a>
            </li>
            </ul>
            </div>
           </div>
      <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="FormContainer">
    <form action="https://formspree.io/f/xyyajkdo" method="POST">
   <div className="mb-4">
   <input name="subject" type="hidden" value="Paint Pulp" />
  <div class="row "  >
    <div class=" col-xs-5  col-lg-4" >
    <label for="name" className="form-label">Name</label>
    </div>
    <div class=" col-xs-7 col-lg-8">
    <div class="row " >
    <div class="col col-lg-6">
     <input type="text" className="form-control" name = 'firstName' id="firstName"required placeholder="First Name" />
      </div>
      <div class="col col-lg-6">
      <input type="text" className="form-control" name = 'LastName' id="latsName" required placeholder="Last Name" />
      </div>
      </div>
   
 
    </div>
   
</div>
  </div>

  <div className="mb-4">
  <div class="row " >
    <div class=" col-xs-5 col-lg-4" >
    <label for="email" className="form-label">Email</label>
    </div>

    <div class=" col-xs-7 col-lg-8">
    <input type="email" className="form-control" name='email' id="email" required />
    
    </div>

</div>
  </div>

  <div className="mb-4">
  <div class="row " >
    <div class=" col-xs-5 col-lg-4" >
    <label for="message" className="form-label">Message</label>
    </div>
    <div class=" col-xs-7 col-lg-8">
    <textarea type="email" className="form-control" name="message"  id="message" aria-describedby="emailHelp" />
  
    </div>
</div>
  </div>

<div style={{textAlign:'right'}}>
    <input className="btn btn-lg  btn-outline-primary" type="submit" name="submit" value="Submit"/> 
  </div>
</form>

</div> 

</div>
</div>
</div>


     </MainContainer>
    );
  }
  
  export default Contact;
  