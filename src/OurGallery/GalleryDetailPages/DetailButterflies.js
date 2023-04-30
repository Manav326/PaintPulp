
import MainContainer from "../../CommonComponent/MainContainer";

import Thumb1 from '../Butterflies/1.jpg'
import Thumb2 from '../Butterflies/2.jpg'
import Thumb3 from '../Butterflies/3.jpg'
import Thumb4 from '../Butterflies/4.jpg'
import Thumb5 from '../Butterflies/5.jpg'
import Thumb6 from '../Butterflies/6.jpg'
import Thumb7 from '../Butterflies/7.jpg'
import Thumb8 from '../Butterflies/8.jpg'
import Thumb9 from '../Butterflies/9.jpg'
import Thumb10 from '../Butterflies/10.jpg'


import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  
];


function  Butterflies() {

  const GalleryDetailImages = [
    { 
      key: 'Butterflies',
      routeTo: '/', 
      id:'Butterflies',
     src:Thumb1,
     alt:'Butterflies',
     title: 'Butterflies'

    }, 

       { 
      key: 'Butterflies',
      routeTo: '/', 
      id:'Butterflies',
      src:Thumb2,
     alt:'Butterflies',
     title:'Butterflies'

    }, 
    { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb3,
       alt:'Butterflies',
       title:'Butterflies'
  
      }, 
  
      { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb4,
       alt:'Butterflies',
       title:'Butterflies'
  
      }, 
  
      { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb5,
       alt:'Butterflies',
       title:'Butterflies'
  
      }, 
  
  
      { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb6,
       alt:'Butterflies',
       title:'Butterflies'
  
      }, 
  
      { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb7,
       alt:'Butterflies',
       title:'Butterflies'
  
      }, 
  
      { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb8,
       alt:'Butterflies',
       title:'Butterflies'
  
      }, 
  
      { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb9,
       alt:'Butterflies',
       title:'Butterflies'
  
      }, 
  
      { 
        key: 'Butterflies',
        routeTo: '/', 
        id:'Butterflies',
        src:Thumb10,
       alt:'Butterflies',
       title:'Butterflies'
  
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
       <h2 className="PaintingDetailTitle">Spread your wings</h2>
       <div className="PaintingDetailDesc">
       <p > The butterfly counts not months but moments, and has time enough. Today, tomorrow and beyond. Butterflies are self propelled flowers. Beautiful and graceful, varied and enchanting, small but approachable, butterflies lead you to the sunny side of life.


</p>

<p>#TheManyShadesofOurPlanet
</p>
</div>


<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">22.5cm X 22.5cm</span></li>
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
  
  export default  Butterflies;
  