
import MainContainer from "../../CommonComponent/MainContainer";

import Thumb1 from '../Bird/RedBackedKingfisher/1.jpg'
import Thumb2 from '../Bird/RedBackedKingfisher/2.jpg'

import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  
];


function RedBackedKingfisher() {

  const GalleryDetailImages = [
    { 
      key: 'RedBackedKingfisher',
      routeTo: '/', 
      id:'RedBackedKingfisher',
     src:Thumb1,
     alt:'RedBackedKingfisher',
     title: 'RedBackedKingfisher'

    }, 

       { 
      key: 'RedBackedKingfisher',
      routeTo: '/', 
      id:'RedBackedKingfisher',
      src:Thumb2,
     alt:'RedBackedKingfisher',
     title:'RedBackedKingfisher'

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
           <div class=" col-xs-12  col-sm-5  col-lg-5" style={{padding:0}} >
           <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {GalleryDetailImages.map((item) => (
            <img  src={item.src}  className='img-fluid'/> 
          ))}
        </Carousel>
      </div>
          
          </div>

       <div class="col-xs-12  col-sm-7  col-lg-5">
        <div className="PaintingDetailDescContainer">
       <h2 className="PaintingDetailTitle">Red Backed Kingfisher</h2>
       <div className="PaintingDetailDesc">
       <p > The red-backed kingfisher is a species of kingfisher in the subfamily Halcyoninae, also known as tree kingfishers. Most of these are forest species are threatened by habitat loss caused by forest clearance or degradation and in some cases by introduced species.

</p>
<p>#TheManyShadesofOurPlanet</p>

</div>


<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">40cm X 60cm</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Medium:</span> <span className="ListValue">Acrylic </span></li>
<li className="PaintingDetailList"><span className="ListLabel">Material:</span> <span className="ListValue">Canvas</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Frame:</span> <span className="ListValue">No</span></li>
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
  
  export default RedBackedKingfisher;
  