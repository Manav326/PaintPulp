import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import NewsComponent from '../CommonComponent/NewsComponent';
// import Thumb1 from '../../src/NewsThumb/thumb1.png'
// import Thumb2 from '../../src/NewsThumb/thumb2.png'
// import Thumb3 from '../../src/NewsThumb/thumb3.png'
// import Thumb4 from '../../src/NewsThumb/thumb1.png'
// import Thumb5 from '../../src/NewsThumb/thumb2.png'
// import Thumb6 from '../../src/NewsThumb/thumb3.png'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },

];

export default function LatestNews() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const NewsList = [
    { 
      key: 'WorldArtDubai',
      routeTo: '/', 
      id:'WorldArtDubai',
     src:'',
     alt:'WorldArtDubai',
     title: 'World Art Dubai 2022'

    }, 

       { 
      key: 'EmergingSceneArtPrize',
      routeTo: '/', 
      id:'EmergingSceneArtPrize',
      src:'',
     alt:'EmergingSceneArtPrize',
     title:'Emerging Scene Art Prize 2022'

    }, 

    { 
      key: 'DubaiIndexDesign',
      routeTo: '/', 
      id:'DubaiIndexDesign',
     src:'',
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 

  
    { 
      key: 'DubaiIndexDesign',
      routeTo: '/', 
      id:'DubaiIndexDesign',
     src:'',
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 


    { 
      key: 'DubaiIndexDesign',
      routeTo: '/', 
      id:'DubaiIndexDesign',
     src:'',
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 


    { 
      key: 'DubaiIndexDesign',
      routeTo: '/', 
      id:'DubaiIndexDesign',
     src:'',
     alt:'Dubai Index Design 2022',
     title:'Dubai Index Design 2022',
    }, 

]



  return (
    <div className="NewsContainer">
      <div className="NewsContainerInner">
      

      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {NewsList.map((item) => (
            <NewsComponent key={item.key} src={item.src} title = {item.title}/> 
          ))}
        </Carousel>
      </div>
      </div>
    </div>
  );
}




