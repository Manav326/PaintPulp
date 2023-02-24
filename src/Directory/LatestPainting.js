
import LatestPaintingImg1 from '../../src/Images/LAtestGallery1.png'
import LatestPaintingImg2 from '../../src/Images/LAtestGallery2.png'


import LatestPaintingImg3 from '../../src/Images/LAtestGallery3.png'


import LatestPaintingImg4 from '../../src/Images/LAtestGallery4.png'




function LatestPainting() {
    return (
  
<div class="row justify-content-md-left">
    <div class="col col-lg-6" style={{paddingRight:'5vw'}} >
   
    <div className="LatestPainting">
      <div className="ImgLatestPainting">
       <img src={LatestPaintingImg1} className='img-fluid' />
      </div>
      <div className='TitleLAtestPainting'>Latest painting<br/> <h4>Latest painting</h4></div>
    </div>

    <div className="LatestPainting">
      <div className="ImgLatestPainting">
       <img src={LatestPaintingImg2} className='img-fluid' />
      </div>
      <div className='TitleLAtestPainting'>Latest painting<br/> <h4>Latest painting</h4></div>
    </div>


   
</div>

<div class="col col-lg-6" style={{paddingLeft:'5vw'}}>

    <div className="LatestPainting">
      <div className="ImgLatestPainting">
       <img src={LatestPaintingImg3} className='img-fluid' />
      </div>
      <div className='TitleLAtestPainting'>Latest painting<br/> <h4>Latest painting</h4></div>
      
    </div>

    <div className="LatestPainting">
      <div className="ImgLatestPainting">
       <img src={LatestPaintingImg4} className='img-fluid' />
      </div>
      <div className='TitleLAtestPainting'>Latest painting<br/> <h4>Latest painting</h4></div>
    </div>


   
</div>

</div>
 
    );
  }
  
  export default LatestPainting;
  