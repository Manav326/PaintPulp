
import MainContainer from "../../CommonComponent/MainContainer";

import Thumb1 from '../Bird/Cardinal4/1.jpg'
import Thumb2 from '../Bird/Cardinal4/2.jpg'

import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  
];


function Cardinal4() {

  const GalleryDetailImages = [
    { 
      key: 'Cardinal4',
      routeTo: '/', 
      id:'Cardinal4',
     src:Thumb1,
     alt:'Cardinal4',
     title: 'Cardinal4'

    }, 

       { 
      key: 'Cardinal4',
      routeTo: '/', 
      id:'Cardinal4',
      src:Thumb2,
     alt:'Cardinal4',
     title:'Cardinal4'

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
       <h2 className="CustomHeadingSpace">Our Gallery</h2>
       <div className="GalleryDetailContainer PaintingDetailPage">
       <div class="row justify-content-md-left" >
           <div class="  col-xs-12  col-sm-5 col-lg-5" style={{padding:0}} >
           <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {GalleryDetailImages.map((item) => (
            <img  src={item.src}  className='img-fluid'/> 
          ))}
        </Carousel>
      </div>
          
          </div>

       <div class="col-xs-12  col-sm-7 col-lg-7">
       <div className="PaintingDetailDescContainer">
       <h2 className="PaintingDetailTitle">Cardinal</h2>
     <div className="PaintingDetailDesc">
      <p > For many bird lovers, the sight of a cardinal holds special meaning, sometimes evoking emotional or spiritual feelings. They say the vibrant red bird is an uplifting, happy sign that those we have lost will live forever, so long as we keep their memory alive in our hearts
    </p> 
    <p> #TheManyShadesofOurPlanet</p>

   </div> 


<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">36cm X 36cm</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Medium:</span> <span className="ListValue">Acrylic</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Material:</span> <span className="ListValue">Canvas</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Frame:</span> <span className="ListValue">Yes</span></li>

<li className="PaintingDetailList"><span className="ListLabel">Certificate of Authencity:</span> <span className="ListValue">Yes</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Enquiry:</span> <span className="ListValue"><a href="mailto:pue@paintpulp.com" className="nav-link PageLink">pue@paintpulp.com</a></span></li>

</ul>
</div>
</div>
</div>
</div>     
     </MainContainer>
    );
  }
  
  export default Cardinal4;
  