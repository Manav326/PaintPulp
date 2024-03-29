import React, { useState } from 'react';
import MainContainer from "../CommonComponent/MainContainer";
import  ScrollToTop from '../ScrollTop';

import Thumb1 from '../../src/OurGallery/Animal/RedPanda/1.jpg'
import Thumb2 from '../../src/OurGallery/Animal/Tiger/1.jpg'
import Thumb3 from '../../src/OurGallery/Animal/Zebra/1.jpg'

import Thumb4 from '../../src/OurGallery/Bird/BlueJay/1.jpg'
import Thumb5 from '../../src/OurGallery/Bird/Cardinal1/1.jpg'



import Thumb6 from '../../src/OurGallery/Bird/Cardinal2/1.jpg'
import Thumb7 from '../../src/OurGallery/Bird/Cardinal3/1.jpg'
import Thumb8 from '../../src/OurGallery/Bird/Cardinal4/1.jpg'

import Thumb9 from '../../src/OurGallery/Bird/EgrettaPicata/1.jpg'
import Thumb10 from '../../src/OurGallery/Bird/Flemingo/1.jpg'
import Thumb11 from '../../src/OurGallery/Bird/Kingfisher/1.jpg'
import Thumb12 from '../../src/OurGallery/Bird/Macow/1.jpg'
import Thumb13 from '../../src/OurGallery/Bird/Osprey/1.jpg'
import Thumb14 from '../../src/OurGallery/Bird/RedBackedKingfisher/1.jpg'
import Thumb15 from '../../src/OurGallery/Bird/TheFalcon/1.jpg'
import Thumb16 from '../../src/OurGallery/Bird/Toucans/1.jpg'
import Thumb17 from '../../src/OurGallery/Bird/Woodpecker/1.jpg'
import Thumb18 from '../../src/OurGallery/Bird/YellowParrot/1.jpg'


import Thumb19 from '../../src/OurGallery/Flower/Lotus/1.jpg'
import Thumb20 from '../../src/OurGallery/Flower/RedGazania/1.jpg'
import Thumb21 from '../../src/OurGallery/Flower/Sunflower/1.jpg'

import Thumb22 from '../../src/OurGallery/OtherPaintings/Aquaphoenix/1.jpg'

import Thumb23 from '../../src/OurGallery/OtherPaintings/GardenOfHappiness/1.jpg'

import Thumb24 from '../../src/OurGallery/Animal/Deer/1.jpg'
import Thumb25 from '../../src/OurGallery/Animal/Lion/1.jpg'
import Thumb26 from '../../src/OurGallery/Aquamarine/1.jpg'
import Thumb27 from '../../src/OurGallery/Butterflies/1.jpg'

import Thumb28 from '../../src/OurGallery/Flower/BirdofParadise/1.jpg'
import Thumb29 from '../../src/OurGallery/Flower/BloomWithGrace/1.jpg'
import Thumb30 from '../../src/OurGallery/Flower/BlueAnemonesBlanda/1.jpg'

import Thumb31 from '../../src/OurGallery/Flower/GoldenQueen/1.jpg'
import Thumb32 from '../../src/OurGallery/Flower/OrangeDaisy/1.jpg'
import Thumb33 from '../../src/OurGallery/Flower/RedWildflower/1.jpg'

import Thumb34 from '../../src/OurGallery/OtherPaintings/ShipOfDesert/1.jpg'

import Thumb35 from '../../src/OurGallery/OtherPaintings/Joy/1.jpg'
import Thumb36 from '../../src/OurGallery/OtherPaintings/AwakeningCity/1.jpg'
import Thumb37 from '../../src/OurGallery/OtherPaintings/BoatsOnARiver/1.jpg'
import Thumb38 from '../../src/OurGallery/OtherPaintings/CityMetro/1.jpg'
import Thumb39 from '../../src/OurGallery/OtherPaintings/RhythmOfEcstasy/1.jpg'
import Thumb40 from '../../src/OurGallery/OtherPaintings/Rove/1.jpg'
import Thumb41 from '../../src/OurGallery/OtherPaintings/SailingAway/1.jpg'
import Thumb42 from '../../src/OurGallery/OtherPaintings/TheDhow/1.jpg'
import Thumb43 from '../../src/OurGallery/OtherPaintings/TheLightMan/1.jpg'
import Thumb44 from '../../src/OurGallery/OtherPaintings/WoodenHouse/1.jpg'








import GalleryDetail from '../CommonComponent/GalleryDetailComponenet'
import { Link } from "react-router-dom";


function Work() {
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
      key: 'Deer',
      routeTo: '/deer', 
      id:'Deer',
     src:Thumb24,
     alt:'Deer',
     title:'Deer',
     
    }, 

    { 
      key: 'Lion',
      routeTo: '/lion', 
      id:'Lion',
     src:Thumb25,
     alt:'Lion',
     title:'Lion',
     
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

    { 
      key: 'Cardinal3',
      routeTo: '/cardinal3', 
      id:'Cardinal3',
     src:Thumb7,
     alt:'Cardinal3',
     title:'Cardinal3',
    
    }, 


    { 
      key: 'Cardinal4',
      routeTo: '/cardinal4', 
      id:'Cardinal4',
     src:Thumb8,
     alt:'Cardinal4',
     title:'Cardinal4',
    
    }, 


    { 
      key: 'EgrettaPicata',
      routeTo: '/egretta-picata', 
      id:'EgrettaPicata',
     src:Thumb9,
     alt:'EgrettaPicata',
     title:'EgrettaPicata',
    
    }, 



    { 
      key: 'Flemingo',
      routeTo: '/flemingo', 
      id:'Flemingo',
     src:Thumb10,
     alt:'Flemingo',
     title:'Flemingo',
    
    }, 

    { 
      key: 'Kingfisher',
      routeTo: '/kingfisher', 
      id:'Kingfisher',
     src:Thumb11,
     alt:'Kingfisher',
     title:'Kingfisher',
    
    }, 

    { 
      key: 'Macow',
      routeTo: '/macow', 
      id:'Macow',
     src:Thumb12,
     alt:'Macow',
     title:'Macow',
     
    }, 

    

    { 
      key: 'Osprey',
      routeTo: '/osprey', 
      id:'Osprey',
     src:Thumb13,
     alt:'Osprey',
     title:'Osprey',
     
    }, 
    { 
      key: 'RedBackedKingfisher',
      routeTo: '/red-backed-kingfisher', 
      id:'RedBackedKingfisher',
     src:Thumb14,
     alt:'Red Backed Kingfisher',
     title:'Red Backed Kingfisher',
    
    }, 

    { 
      key: 'TheFalcon',
      routeTo: '/the-falcon', 
      id:'TheFalcon',
     src:Thumb15,
     alt:'The Falcon',
     title:'The Falcon',
     
    }, 

    { 
      key: 'Toucans',
      routeTo: '/toucans', 
      id:'Toucans',
     src:Thumb16,
     alt:'Toucans',
     title:'Toucans',
    
    }, 
    
    
    
    { 
      key: 'Woodpecker',
      routeTo: '/woodpecker', 
      id:'Woodpecker',
     src:Thumb17,
     alt:'Woodpecker',
     title:'Woodpecker',
     
    }, 
    { 
      key: 'YellowParrot',
      routeTo: '/yellow-parrot', 
      id:'YellowParrot',
     src:Thumb18,
     alt:'Yellow Parrot',
     title:'Yellow Parrot',
     
    }, 

    { 
      key: 'Lotus',
      routeTo: '/lotus', 
      id:'Lotus',
     src:Thumb19,
     alt:'Lotus',
     title:'Lotus',
     
    }, 

    
    
    
    



    { 
      key: 'RedGazania',
      routeTo: '/red-gazania', 
      id:'RedGazania',
     src:Thumb20,
     alt:'RedGazania',
     title:'RedGazania',
     
    }, 




    { 
      key: 'Sunflower',
      routeTo: '/sunflower', 
      id:'Sunflower',
     src:Thumb21,
     alt:'Sunflower',
     title:'Sunflower',
     
    }, 

    { 
      key: 'Aquaphoenix',
      routeTo: '/aquaphoenix', 
      id:'Aquaphoenix',
     src:Thumb22,
     alt:'Aquaphoenix',
     title:'Aquaphoenix',
     
    }, 

 

   

    { 
      key: 'Aquamarine',
      routeTo: '/aquamarine', 
      id:'Aquamarine',
     src:Thumb26,
     alt:'Aquamarine',
     title:'Aquamarine',
     
    }, 


 

    { 
      key: 'Butterflies',
      routeTo: '/butterflies', 
      id:'Butterflies',
     src:Thumb27,
     alt:'Butterflies',
     title:'Butterflies',
     
    }, 

    { 
      key: 'BirdofParadise',
      routeTo: '/bird-of-paradise', 
      id:'BirdofParadise',
     src:Thumb28,
     alt:'BirdofParadise',
     title:'BirdofParadise',
     
    }, 
    
    { 
      key: 'BloomWithGrace',
      routeTo: '/bloom-with-grace', 
      id:'BloomWithGrace',
     src:Thumb29,
     alt:'BloomWithGrace',
     title:'BloomWithGrace',
     
    }, 

    { 
      key: 'BlueAnemonesBlanda',
      routeTo: '/blue-anemones-blanda', 
      id:'BlueAnemonesBlanda',
     src:Thumb30,
     alt:'BlueAnemonesBlanda',
     title:'BlueAnemonesBlanda',
     
    }, 

    { 
      key: 'GoldenQueen',
      routeTo: '/golden-queen', 
      id:'GoldenQueen',
     src:Thumb31,
     alt:'GoldenQueen',
     title:'GoldenQueen',
     
    }, 

    { 
      key: 'OrangeDaisy',
      routeTo: '/orange-daisy', 
      id:'OrangeDaisy',
     src:Thumb32,
     alt:'OrangeDaisy',
     title:'OrangeDaisy',
     
    }, 


  
    { 
      key: 'RedWildflower',
      routeTo: '/red-wild-flower', 
      id:'RedWildflower',
     src:Thumb33,
     alt:'RedWildflower',
     title:'RedWildflower',
     
    }, 

    { 
      key: 'ShipOfDesert',
      routeTo: '/ship-of-desert', 
      id:'ShipOfDesert',
     src:Thumb34,
     alt:'ShipOfDesert',
     title:'ShipOfDesert',
     
    }, 

    { 
      key: 'WoodenHouse',
      routeTo: '/wooden-house', 
      id:'WoodenHouse',
      src:Thumb44,
     alt:'WoodenHouse',
     title:'WoodenHouse',
    
    }, 



       { 
      key: 'AwakeningCity',
      routeTo: '/awakening-city', 
      id:'AwakeningCity',
      src:Thumb36,
     alt:'AwakeningCity',
     title:'AwakeningCity',
    

    }, 

       { 
      key: 'BoatsOnARiver',
      routeTo: '/boats-on-a-river', 
      id:'BoatsOnARiver',
      src:Thumb37,
     alt:'BoatsOnARiver',
     title:'BoatsOnARiver',
    

    }, 

       { 
      key: 'CityMetro',
      routeTo: '/city-metro', 
      id:'CityMetro',
      src:Thumb38,
     alt:'CityMetro',
     title:'CityMetro',
    

    }, 

       { 
      key: 'RhythmOfEcstasy',
      routeTo: '/rhythm-of-ecstasy', 
      id:'RhythmOfEcstasy',
      src:Thumb39,
     alt:'RhythmOfEcstasy',
     title:'RhythmOfEcstasy',
    

    }, 

       { 
      key: 'Rove',
      routeTo: '/rove', 
      id:'Rove',
      src:Thumb40,
     alt:'Rove',
     title:'Rove',
    

    }, 

       { 
      key: 'SailingAway',
      routeTo: '/sailing-Aaway', 
      id:'SailingAway',
      src:Thumb41,
     alt:'SailingAway',
     title:'SailingAway',
    

    }, 

       { 
      key: 'TheDhow',
      routeTo: '/the-dhow', 
      id:'TheDhow',
      src:Thumb42,
     alt:'TheDhow',
     title:'TheDhow',
    

    }, 
       { 
      key: 'TheLightMan',
      routeTo: '/the-light-man', 
      id:'TheLightMan',
      src:Thumb43,
     alt:'TheLightMan',
     title:'TheLightMan',
    
    }, 
  

    { 
      key: 'Joy',
      routeTo: '/joy', 
      id:'Joy',
      src:Thumb35,
     alt:'Joy',
     title:'Joy',
    

    }, 


    { 
      key: 'GardenOfHappiness',
      routeTo: '/garden-of-happiness', 
      id:'GardenOfHappiness',
     src:Thumb23,
     alt:'Garden Of Happiness',
     title:'Garden Of Happiness',
     
    }, 

  

]




    return (

      
  <MainContainer>
       <>

       <ScrollToTop />
       <h2 className='CustomHeadingSpace'>Our Gallery</h2>


       
        {/* <h4>A trained artist from <strong>institute name</strong>, which is one of the most premium art institutions of India, Pue relies on her strong foundation to create unique pieces which break the rules and leave audiences awestruck. </h4>    
        <h4>While she has been around the Indian scene for a while, she broke into the art world of the Gulf around <strong>Year</strong>. Since then, her work has garnered a lot of attention and earned her many admirers. Here are some of her expressions for you to enjoy.</h4> */}

  
      
 
  <div className="GalleryContainer ">
        <div class="CustomRow clearfix " >
         {GalleryList.map((item, index) => (
             <div class=" CustomCol CustomPadding" style={item.style}>
              <Link  to={item.routeTo} id={item.id+index} className={isHover!= ''?isHover!= `${item.id}-${index}-img` ? 'GrayImg  ' : 'ColoredImg': 'ColoredImg'}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > 
                {console.log(isHover)}
                <img className='img-fluid' id={`${item.id}-${index}-img`} src={item.src} />
            </Link>
            </div>
          ))}
          </div>
          </div>
  
      </>

     </MainContainer>
    );
  }
  
  export default Work;
  