
import MainContainer from "../CommonComponent/MainContainer";

import Thumb1 from '../../src/PaintingsAsset/Rove/1.png'
import Thumb2 from '../../src/PaintingsAsset/Rove/2.jpg'
import Thumb3 from '../../src/PaintingsAsset/Rove/3.jpg'



import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },

];


function TheRove() {

  const GalleryDetailImages = [
    { 
      key: 'ShipOfDesert',
      routeTo: '/', 
      id:'ShipOfDesert',
     src:Thumb1,
     alt:'ShipOfDesert',
     title: 'ShipOfDesert'

    }, 

       { 
      key: 'EmergingSceneArtPrize',
      routeTo: '/', 
      id:'EmergingSceneArtPrize',
      src:Thumb2,
     alt:'EmergingSceneArtPrize',
     title:'Emerging Scene Art Prize 2022'

    }, 
    { 
        key: 'EmergingSceneArtPrize',
        routeTo: '/', 
        id:'EmergingSceneArtPrize',
        src:Thumb3,
       alt:'EmergingSceneArtPrize',
       title:'Emerging Scene Art Prize 2022'
  
      }, 
  
  
  
    // { 
    //   key: 'DubaiIndexDesign',
    //   routeTo: '/', 
    //   id:'DubaiIndexDesign',
    //  src:Thumb4,
    //  alt:'Dubai Index Design 2022',
    //  title:'Dubai Index Design 2022',
    // }, 


   
]

    return (
      <MainContainer >
       <h2 className="CustomHeadingSpace"> Our Gallery</h2>
       <div className="GalleryContainer PaintingDetailPage">
       <div class="row justify-content-md-left" >
           <div class="col col-lg-6">
           <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {GalleryDetailImages.map((item) => (
            <img  src={item.src}  className='img-fluid'/> 
          ))}
        </Carousel>
      </div>
          
          </div>

       <div class="col col-lg-6" style={{paddingLeft:'5vw'}}>
       <h2 className="PaintingDetailTitle">Rove </h2>
       <div className="PaintingDetailDesc">
       <p ><strong>Rationale:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo efficitur nisi ut accumsan. Nunc at risus ullamcorper, suscipit ex consequat, porttitor ex. Ut ut nulla vestibulum, ullamcorper mi in, ultricies justo. 

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo efficitur nisi ut accumsan. Nunc at risus ullamcorper, suscipit ex consequat, porttitor ex. Ut ut nulla vestibulum, ullamcorper mi in, ultricies justo. </p>
</div>


<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">W- 76cm X 76cm</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Medium:</span> <span className="ListValue">Acrylic on Canvas</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Frame:</span> <span className="ListValue">With frame</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Year of Creation:</span> <span className="ListValue">2022</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Certificate of Authencity:</span> <span className="ListValue">Yes</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Enquiry:</span> <span className="ListValue">info@paintpulp.com</span></li>

</ul>

       </div>
       </div>


       </div>     
     </MainContainer>
    );
  }
  
  export default TheRove;
  