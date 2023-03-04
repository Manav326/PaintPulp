
import React, { useState } from 'react';


import GalleryComponent from  '../CommonComponent/GalleryComponent'

import Thumb1 from '../../src/OurGallery/Animal/RedPanda/1.jpg'
import Thumb2 from '../../src/OurGallery/Animal/Tiger/1.jpg'
import Thumb3 from '../../src/OurGallery/Animal/Zebra/1.jpg'
import Thumb4 from '../../src/OurGallery/Bird/BlueJay/1.jpg'
import Thumb5 from '../../src/OurGallery/Bird/Cardinal1/1.jpg'

import Thumb6 from '../../src/OurGallery/Bird/Cardinal2/1.jpg'
import { Link } from "react-router-dom";


function OurGallery() {

  const [isHover, setIsHover] = useState('');
   


  const handleMouseEnter = (e) => {
   const {id}=e.target;
  console.log(e.target)
    setIsHover(id);
     
  };

  const handleMouseLeave = (e) => {
  
   setIsHover('');
  };





  const GalleryList = [
    { 
      key: 'RedPanda',
      routeTo: '/red-panda', 
      id:'RedPanda',
     src:Thumb1,
     alt:'RedPanda',
     title: 'RedPanda',
    

    }, 

       { 
      key: 'Tiger',
      routeTo: '/tiger', 
      id:'Tiger',
      src:Thumb2,
     alt:'Tiger',
     title:'Tiger',
    

    }, 

    { 
      key: 'Zebra',
      routeTo: '/zebra', 
      id:'Zebra',
     src:Thumb3,
     alt:'Zebra',
     title:'Zebra',
    
    }, 

  
    { 
      key: 'BlueJay',
      routeTo: '/blueJay', 
      id:'BlueJay',
     src:Thumb4,
     alt:'BlueJay',
     title:'BlueJay',
   
    }, 


    { 
      key: 'Cardinal1',
      routeTo: '/cardinal1', 
      id:'Cardinal1',
     src:Thumb5,
     alt:'Cardinal1',
     title:'Cardinal1',
    
    }, 


    { 
      key: 'Cardinal2',
      routeTo: '/cardinal2', 
      id:'Cardinal1',
     src:Thumb6,
     alt:'Cardinal2',
     title:'Cardinal2',
     
    }, 

  ]


 

    return (
     
<>
   
<h2 className='CustomHeadingSpace'>Our Gallery</h2>


       
{/* <h4>A trained artist from <strong>institute name</strong>, which is one of the most premium art institutions of India, Pue relies on her strong foundation to create unique pieces which break the rules and leave audiences awestruck. </h4>    
<h4>While she has been around the Indian scene for a while, she broke into the art world of the Gulf around <strong>Year</strong>. Since then, her work has garnered a lot of attention and earned her many admirers. Here are some of her expressions for you to enjoy.</h4> */}




<div className="GalleryContainer " id='scroller'>
<div class="CustomRow clearfix " >
 {GalleryList.map((item, index) => (
     <div class=" CustomCol CustomPadding" style={item.style}>
      <Link  to={item.routeTo}  id={item.id+index} className={isHover!= ''?isHover!= `${item.id}-${index}-img` ? 'GrayImg  ' : 'ColoredImg': 'ColoredImg'}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > 
        {console.log(isHover)}
        <img className='img-fluid' id={`${item.id}-${index}-img`} src={item.src} />
    </Link>
    </div>
  ))}
  </div>

  <div className='BtnContainer' >
    <Link to='/gallery'  className="navbar-brand" > 
    <button type="button" className="btn btn-lg  btn-outline-primary">See All</button>
    </Link>

    </div>

  </div>

</>


    );
  }
  
  export default OurGallery;
