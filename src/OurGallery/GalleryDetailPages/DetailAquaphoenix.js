
import MainContainer from "../../CommonComponent/MainContainer";

import Thumb1 from '../OtherPaintings/Aquaphoenix/1.jpg'
import Thumb2 from '../OtherPaintings/Aquaphoenix/2.jpg'
import Thumb3 from '../OtherPaintings/Aquaphoenix/3.jpg'

import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  
];


function  Aquaphoenix() {

  const GalleryDetailImages = [
    { 
      key: 'Aquaphoenix',
      routeTo: '/', 
      id:'Aquaphoenix',
     src:Thumb1,
     alt:'Aquaphoenix',
     title: 'Aquaphoenix'

    }, 

       { 
      key: 'Aquaphoenix',
      routeTo: '/', 
      id:'Aquaphoenix',
      src:Thumb2,
     alt:'Aquaphoenix',
     title:'Aquaphoenix'

    }, 
    { 
      key: 'Aquaphoenix',
      routeTo: '/', 
      id:'Aquaphoenix',
      src:Thumb3,
     alt:'Aquaphoenix',
     title:'Aquaphoenix'

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
       <h2 className="PaintingDetailTitle">Aquaphoenix</h2>
       <div className="PaintingDetailDesc">
       <p > Jellyfish are an integral part of the oceanic ecosystem. It has this unique lifecycle where it sinks to the bottom of the ocean floor after death, and then its cells regenerate to form polyps from which a new jellyfish rises again, thus making them immortal. This phenomenon is quite similar to the mythical creature phoenix, which is born again from its own ashes.

</p>

<p>While jellyfish are generally transparent blobs, here I have tried to capture the mythical correlation by using phoneixesque colours and bold strokes. Along with that, I have also portrayed.
</p>
</div>


<ul className="PaintingDetail">
<li className="PaintingDetailList"><span className="ListLabel">Size:</span> <span className="ListValue">100cm X 152cm</span></li>
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
  
  export default  Aquaphoenix;
  