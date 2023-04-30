
import MainContainer from "../../CommonComponent/MainContainer";

import Thumb1 from '../Flower/BirdofParadise/1.jpg'
import Thumb2 from '../Flower/BirdofParadise/2.jpg'


import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  
];


function  BirdofParadise() {

  const GalleryDetailImages = [
    { 
      key: 'BirdofParadise',
      routeTo: '/', 
      id:'BirdofParadise',
     src:Thumb1,
     alt:'BirdofParadise',
     title: 'BirdofParadise'

    }, 

       { 
      key: 'BirdofParadise',
      routeTo: '/', 
      id:'BirdofParadise',
      src:Thumb2,
     alt:'BirdofParadise',
     title:'BirdofParadise'

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
       <h2 className="PaintingDetailTitle">Bird of Paradise Flower</h2>
       <div className="PaintingDetailDesc">
       <p > The bird of paradise flower, with its vibrant orange and blue hues, symbolizes the essence of paradise and freedom.  As it blooms, it mimics the wings of a bird in flight, expressing a sense of anticipation and excitement. This flower has been admired across different cultures as a universal symbol of beauty and grace.</p>

<p>#TheManyShadesofOurPlanet
</p>
</div>


<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">48cm X 95cm</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Medium:</span> <span className="ListValue">Acrylic </span></li>
<li className="PaintingDetailList"><span className="ListLabel">Material:</span> <span className="ListValue">Canvas </span></li>
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
  
  export default  BirdofParadise;
  