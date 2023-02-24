
import MainContainer from "../../CommonComponent/MainContainer";

import Thumb1 from '../OtherPaintings/RhythmOfEcstasy/1.jpg'
import Thumb2 from '../OtherPaintings/RhythmOfEcstasy/2.jpg'

import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  
];


function     RhythmOfEcstasy() {

  const GalleryDetailImages = [
    { 
      key: '    RhythmOfEcstasy',
      routeTo: '/', 
      id:'    RhythmOfEcstasy',
     src:Thumb1,
     alt:'    RhythmOfEcstasy',
     title: '    RhythmOfEcstasy'

    }, 

       { 
      key: '  RhythmOfEcstasy',
      routeTo: '/', 
      id:'    RhythmOfEcstasy',
      src:Thumb2,
     alt:'    RhythmOfEcstasy',
     title:'    RhythmOfEcstasy'

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
           <div class="  col-xs-12  col-sm-6 col-lg-5" style={{padding:0}} >
           <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {GalleryDetailImages.map((item) => (
            <img  src={item.src}  className='img-fluid'/> 
          ))}
        </Carousel>
      </div>
          
          </div>

       <div class="col-xs-12  col-sm-6 col-lg-7">
        <div className="PaintingDetailDescContainer">
       <h2 className="PaintingDetailTitle"> Rhythm Of Ecstasy</h2>
       <div className="PaintingDetailDesc">
       <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo efficitur nisi ut accumsan. Nunc at risus ullamcorper, suscipit ex consequat, porttitor ex. Ut ut nulla vestibulum, ullamcorper mi in, ultricies justo. 

</p>

</div>



<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">90cm X 90cm</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Medium:</span> <span className="ListValue">Acrylic </span></li>
<li className="PaintingDetailList"><span className="ListLabel">Material:</span> <span className="ListValue">Canvas</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Frame:</span> <span className="ListValue">No</span></li>

<li className="PaintingDetailList"><span className="ListLabel">Certificate of Authencity:</span> <span className="ListValue">Yes</span></li>
<li className="PaintingDetailList"><span className="ListLabel">Enquiry:</span> <span className="ListValue">info@paintpulp.com</span></li>

</ul>
</div>
</div>
</div>
</div>     
     </MainContainer>
    );
  }
  
  export default     RhythmOfEcstasy;
  