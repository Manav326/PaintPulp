
import MainContainer from "../CommonComponent/MainContainer";
import Thumb1 from '../../src/GalleryThumb/thumb1.png'

import Thumb2 from '../../src/GalleryThumb/thumb2.png'

import Thumb3 from '../../src/GalleryThumb/thumb3.png'

import Thumb4 from '../../src/GalleryThumb/thumb4.png'
import Thumb5 from '../../src/GalleryThumb/thumb5.png'

import Thumb6 from '../../src/GalleryThumb/thumb6.png'

import Thumb7 from '../../src/GalleryThumb/thumb7.png'

import Thumb8 from '../../src/GalleryThumb/thumb1.png'
import GalleryDetail from '../CommonComponent/GalleryDetailComponenet'
import { Link } from "react-router-dom";


function Work() {
    return (

      
  <MainContainer>
       <div className='ContentContainer  '>
       <h2 className="CustomHeadingSpace">Our Gallery</h2>
     
        <div className="GalleryContainer text-center">
        {/* <h4>A trained artist from <strong>institute name</strong>, which is one of the most premium art institutions of India, Pue relies on her strong foundation to create unique pieces which break the rules and leave audiences awestruck. </h4>    
        <h4>While she has been around the Indian scene for a while, she broke into the art world of the Gulf around <strong>Year</strong>. Since then, her work has garnered a lot of attention and earned her many admirers. Here are some of her expressions for you to enjoy.</h4> */}

      <div class="ImgRow"> 
      
  <div className="ImgColumn">
    <ul className="ImgListContainer">
      <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
      <img src={Thumb1} />
    </Link>
    </li>
    <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
    <img src={Thumb3}  />
    </Link>
    </li>
    <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
    <img src={Thumb5}  />
    </Link>
    </li>
    <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
    <img src={Thumb7} />
    </Link>
    </li>
    </ul>
  </div>
  <div className="ImgColumn">
  <ul className="ImgListContainer">
      <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
      <img src={Thumb2} />
    </Link>
    </li>
    <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
    <img src={Thumb4}  />
    </Link>
    </li>
    <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
    <img src={Thumb6}  />
    </Link>
    </li>
    <li>
    <Link to='/ship-of-desert'  className="navbar-brand" > 
    <img src={Thumb8} />
    </Link>
    </li>
    </ul>
  </div>  
</div>
</div>
 </div>
     </MainContainer>
    
    );
  }
  
  export default Work;
  