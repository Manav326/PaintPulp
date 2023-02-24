
import MainContainer from "../CommonComponent/MainContainer";

import Thumb1 from '../../src/PaintingsAsset/ShipOfDesert/1.jpg'
import Thumb2 from '../../src/PaintingsAsset/ShipOfDesert/2.jpg'
import Thumb3 from '../../src/PaintingsAsset/ShipOfDesert/3.jpg'

// import Thumb4 from '../../src/PaintingsAsset/ShipOfDesert/4.mp4'


import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },

];


function ShipOfDesert() {

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
      <MainContainer>
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
       <h2 className="PaintingDetailTitle"> Ship of desert </h2>
       <div className="PaintingDetailDesc">
       <p ><strong>Rationale:</strong> Desert safari is one of the most sought after tourist activities in Dubai. Everyone visiting the country wants to experience that. And one of the most exciting parts of that experience is the camel ride. </p>
       <p >The camel handlers try their best to make the camels look as beautiful as possible. A common accessory in the ensemble is the drape which they put on a camel. The designs, forms and colors involved are extraordinary.
They all have thread works which display the expertise of the traditional craftsmen.

</p>
<p>So I wanted to capture that essence with bold strokes, bright colors, graphical forms by using needles and
threads to make it look extra realistic. It is my humble attempt to do justice to the beauty of the ship of the desert.</p>
</div>

<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">W- 113cm X 165cm</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Medium:</span> <span className="ListValue">Mixed Media with Acrylic and thread work on canvas</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Frame:</span> <span className="ListValue">With double wooden frame</span></li>
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
  
  export default ShipOfDesert;
  