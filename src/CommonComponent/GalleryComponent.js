


function GalleryComponent(props) {
   
    return (
     
         <div id={props.id} class="col-6  ImgList"  >
          <img src={props.src}  alt={props.alt} />
         
         </div>


    );
  }
  
  export default GalleryComponent;
  