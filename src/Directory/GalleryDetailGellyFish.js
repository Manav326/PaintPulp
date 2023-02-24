
import MainContainer from "../CommonComponent/MainContainer";

import Thumb1 from '../../src/PaintingsAsset/Aquaphoenix/1.jpg'
import Thumb2 from '../../src/PaintingsAsset/Aquaphoenix/2.jpg'
import Thumb3 from '../../src/PaintingsAsset/Aquaphoenix/3.jpg'
// import Thumb4 from '../../src/PaintingsAsset/ShipOfDesert/4.mp4'


import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },

];


function AquaPhoenix() {

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
      key: 'DubaiIndexDesign',
      routeTo: '/', 
      id:'DubaiIndexDesign',
     src:Thumb3,
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
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
       <h2 className="CustomHeadingSpace">Our Gallery</h2>
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
       <h2 className="PaintingDetailTitle"> Aqua Phoenix </h2>
       <div className="PaintingDetailDesc">
       <p ><strong>Rationale:</strong> Jellyfish are an integral part of the oceanic ecosystem. It has this unique lifecycle where it sinks
to thebottom of the ocean floor after death, and then its cells regenerate to form polyps from which
a new jellyfish rises again, thus making them immortal. This phenomenon is quite similar to the mythical
creature phoenix, which is born again from its own ashes.

</p>
<p>While jellyfish are generally transparent blobs, here I have tried to capture the mythical correlation by using
phoneixesque colours and bold strokes. Along with that, I have also portrayed the vibrant nature of the aquatic
ecosystem where all the different species of jellyfish thrive. </p>
</div>



<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">W- 101cm X 152cm</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Medium:</span> <span className="ListValue">Acrylic on Canvas</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Frame:</span> <span className="ListValue">Without frame</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Year of Creation:</span> <span className="ListValue">2021</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Certificate of Authencity:</span> <span className="ListValue">Yes</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Enquiry:</span> <span className="ListValue">info@paintpulp.com</span></li>

</ul>

       </div>
       </div>


       </div>     
     </MainContainer>
    );
  }
  
  export default AquaPhoenix;
  