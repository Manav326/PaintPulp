
import MainContainer from "./MainContainer";

function GalleryDetail(props) {
    return (
     
<>

<MainContainer>
       <div className='ContentContainer  '>
       <h2 style={{marginBottom:90, marginLeft:60}}>Our Gallery</h2>
        <div className="GalleryContainer">
        <div class="row justify-content-md-left" >
            <div class="col col-lg-6">
            {props.children}
           
           </div>

        <div class="col col-lg-6" style={{paddingLeft:'5vw'}}>
        <h2>{props.title}</h2>
        <p> {props.desc}</p>

        <h4>Size: {props.size}</h4>
        <h4>Medium: {props.medium}</h4>
        <h4>Material: {props.material}</h4>
        <h4>Frame: {props.frame}</h4>
        <h4>Price: {props.price}</h4>
        <h4>Certificate of Authencity = {props.coa}</h4>
        <h4>Enquiry: {props.enquiry}</h4>
        
        </div>
        </div>


        </div>     
      </div>
     </MainContainer>
      
</>

    );
  }
  
  export default GalleryDetail;
  