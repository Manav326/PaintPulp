

  import  OurGallery from './OurGallery';

  import Video from './Video';


function Home() {
    return (
      <>
      
  <div className='ContentContainer PageHome '>
     <div className="container-fluid">

     <Video></Video>
     </div>
     </div>


    <div className="container-fluid">

    <OurGallery />
  </div>

  {/* <div className='ContentContainer '>
    <div className="container-fluid">
    <LatestNews />
  </div>
  </div> */}
  </>

    );
  }
  
  export default Home;
  