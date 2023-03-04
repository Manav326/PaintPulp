
//  import Video1 from '../Images/Video.mp4';
 import PlayVideo from '../Images/Video.mp4';

//  import Video1 from 'https://youtu.be/ucII_L7tqxM'



  import VideoThumbnail from '../Images/VideoThumbnail.png';

function Video() {
    return (
     
        <div className="HomeSlide1">
        

                <video className='Video' poster={VideoThumbnail}  autoPlay loop muted playsInline>
                    <source src={PlayVideo} type="video/mp4"/>
                </video>



 {/* <video className='Video' src={Video1} poster={VideoThumbnail}   autoPlay  loop muted  playsinline  />  */}
        {/* <div className="BannerCaption ">
            <div className='CaptionMainTitle'>  I paint emotion on canvas.</div>
            <button type="button" class="btn btn-lg  btn-outline-primary">Contact us</button>
            </div> 
      
       */}


 </div> 
    );
  }
  
  export default Video;
  