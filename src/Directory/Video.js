
  import  LatestPainting from './LatestPainting';
  import  LatestPaintingText from './LatestPaintingText';
  import  OurGallery from './OurGallery';
  import LatestNews from './LatestNews';
 import Video1 from '../Images/Video.mp4';

function Video() {
    return (
     
        <div className="HomeSlide1">
        
        <video className='Video'  src={Video1} autoPlay loop muted />
            {/* <div className="BannerCaption ">
            <div className='CaptionMainTitle'>  I paint emotion on canvas.</div>
            <button type="button" class="btn btn-lg  btn-outline-primary">Contact us</button>
            </div> */}
      
        </div>



    );
  }
  
  export default Video;
  