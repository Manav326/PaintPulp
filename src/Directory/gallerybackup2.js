import React, { useState } from 'react';
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
  const [isHover, setIsHover] = useState([false, false, false, false, false, false]);
   


   const handleMouseEnter = (e) => {
   for(var i =0; i<isHover.length; i++){
    if(i!=e){
      isHover[i] = true
    }
   }
    // isHover[e] = true
     setIsHover([...isHover]);
      console.log('Hovered', e, isHover)
   };

   const handleMouseLeave = (e) => {
    
    for(var i =0; i<isHover.length; i++){
  
        isHover[i] = false
      
     } 
    
     // isHover[e] = false
    setIsHover([...isHover]);
   };


  const GalleryList = [
    { 
      key: 'WorldArtDubai',
      routeTo: '/ship-of-desert', 
      id:'WorldArtDubai',
     src:Thumb1,
     alt:'WorldArtDubai',
     title: 'World Art Dubai 2022'

    }, 

       { 
      key: 'EmergingSceneArtPrize',
      routeTo: '/ship-of-desert', 
      id:'EmergingSceneArtPrize',
      src:Thumb2,
     alt:'EmergingSceneArtPrize',
     title:'Emerging Scene Art Prize 2022'

    }, 

    { 
      key: 'DubaiIndexDesign',
      routeTo: '/ship-of-desert', 
      id:'DubaiIndexDesign',
     src:Thumb3,
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 

  
    { 
      key: 'DubaiIndexDesign',
      routeTo: '/ship-of-desert', 
      id:'DubaiIndexDesign',
     src:Thumb4,
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 


    { 
      key: 'DubaiIndexDesign',
      routeTo: '/ship-of-desert', 
      id:'DubaiIndexDesign',
     src:Thumb5,
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 


    { 
      key: 'DubaiIndexDesign',
      routeTo: '/ship-of-desert', 
      id:'DubaiIndexDesign',
     src:Thumb6,
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 

]




    return (

      
  <MainContainer>
       <div className='ContentContainer  '>
       <h1>Our Gallery</h1>
     
        <div className="GalleryContainer text-center">
        {/* <h4>A trained artist from <strong>institute name</strong>, which is one of the most premium art institutions of India, Pue relies on her strong foundation to create unique pieces which break the rules and leave audiences awestruck. </h4>    
        <h4>While she has been around the Indian scene for a while, she broke into the art world of the Gulf around <strong>Year</strong>. Since then, her work has garnered a lot of attention and earned her many admirers. Here are some of her expressions for you to enjoy.</h4> */}

  
      
  <div className="ImgColumn">

         {GalleryList.map((item, index) => (
              <Link to={item.routeTo} id={item.id+index} className={isHover[index] ? 'GrayImg' : 'ColoredImg'}  onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)}> 
              <img src={item.src} />
            </Link>
          ))}
  
 


  </div>
 

</div>
 </div>
     </MainContainer>
    
    );
  }
  
  export default Work;
  