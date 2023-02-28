import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Directory/Home";
import Gallery from "./Directory/gallery";
// import News from "./Directory/News";
import About from "./Directory/About";
import Contact from "./Directory/Contact";
import Nft from "./Directory/nft";
import Header from "./CommonComponent/Header";
import Header2 from "./CommonComponent/Header2";
import Footer from "./CommonComponent/Footer";

import RedPanda from './OurGallery/GalleryDetailPages/DetailRedPanda';
import Tiger from './OurGallery/GalleryDetailPages/DetailTiger';
import Zebra from './OurGallery/GalleryDetailPages/DetailZebra';
import BlueJay from './OurGallery/GalleryDetailPages/DetailBlueJay';
import Cardinal1 from './OurGallery/GalleryDetailPages/DetailCardinal1';
import Cardinal2 from './OurGallery/GalleryDetailPages/DetailCardinal2';
import Cardinal3 from './OurGallery/GalleryDetailPages/DetailCardinal3';
import Cardinal4 from './OurGallery/GalleryDetailPages/DetailCardinal4';


import EgrettaPicata from './OurGallery/GalleryDetailPages/DetailEgrettaPicata';
import Flemingo from './OurGallery/GalleryDetailPages/DetailFlemingo';
import Kingfisher from './OurGallery/GalleryDetailPages/DetailKingfisher';
import Macow from './OurGallery/GalleryDetailPages/DetailMacow';
import Osprey from './OurGallery/GalleryDetailPages/DetailOsprey';
import RedBackedKingfisher from './OurGallery/GalleryDetailPages/DetailRedBackedKingfisher';
import TheFalcon from './OurGallery/GalleryDetailPages/DetailTheFalcon';
import Toucans from './OurGallery/GalleryDetailPages/DetailToucans';
import Woodpecker from './OurGallery/GalleryDetailPages/DetailWoodpecker';
import YellowParrot from './OurGallery/GalleryDetailPages/DetailYellowParrot';


import Lotus from './OurGallery/GalleryDetailPages/DetailLotus';
import RedGazania from './OurGallery/GalleryDetailPages/DetailRedGazania';
import Sunflower from './OurGallery/GalleryDetailPages/DetailSunflower';



import Aquaphoenix from './OurGallery/GalleryDetailPages/DetailAquaphoenix';
import AwakeningCity from './OurGallery/GalleryDetailPages/DetailAwakeningCity';
import BoatsOnARiver from './OurGallery/GalleryDetailPages/DetailBoatsOnARiver';

import CityMetro from './OurGallery/GalleryDetailPages/DetailCityMetro';
import GardenOfHappiness from './OurGallery/GalleryDetailPages/DetailGardenOfHappiness';
import Joy from './OurGallery/GalleryDetailPages/DetailJoy';


import RhythmOfEcstasy from './OurGallery/GalleryDetailPages/DetailRhythmOfEcstasy';
import Rove from './OurGallery/GalleryDetailPages/DetailRove';
import SailingAway from './OurGallery/GalleryDetailPages/DetailSailingAway';


import ShipOfDesert from './OurGallery/GalleryDetailPages/DetailShipOfDesert';
import TheDhow from './OurGallery/GalleryDetailPages/DetailTheDhow';
import TheLightMan from './OurGallery/GalleryDetailPages/DetailTheLightMan';

import WoodenHouse from './OurGallery/GalleryDetailPages/DetailWoodenHouse';
import TnakyouPage from './Directory/Thankou';





import { useEffect } from "react";
import { useLocation } from "react-router";
// import ScrollToTop from './ScrollTop';





function App() {

  // const {pathname} = useLocation();
  // useEffect(() => {
  //   window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: 'smooth'
  //     });
  //   //   alert(window.innerHeight)
  // }, [pathname]);


  return (
    <>

   <BrowserRouter  >

   {/* <ScrollToTop /> */}
   {/* <Header /> */}
<Header2 />

<div className='MainPage'>

   <Routes>
   <Route exact path="/"  element={<Home/>}/>
   <Route exact path="/gallery"  element={<Gallery/>}/>
   {/* <Route exact path="/news"  element={<News/>}/> */}
   <Route exact path="/about"  element={<About/>}/>
   <Route exact path="/contact"  element={<Contact/>}/>

   <Route exact path="/red-panda"  element={<RedPanda/>}/>
   <Route exact path="/tiger"  element={<Tiger/>}/>
  <Route exact path="/zebra"  element={<Zebra/>}/>
  <Route exact path="/bluejay"  element={<BlueJay/>}/>
   <Route exact path="/cardinal1"  element={<Cardinal1/>}/>
  <Route exact path="/cardinal2"  element={<Cardinal2/>}/>
  <Route exact path="/cardinal3"  element={<Cardinal3/>}/>
  <Route exact path="/cardinal4"  element={<Cardinal4/>}/>

  <Route exact path="/egretta-picata"  element={<EgrettaPicata/>}/>
   <Route exact path="/flemingo"  element={<Flemingo/>}/>
  <Route exact path="/kingfisher"  element={<Kingfisher/>}/>
  <Route exact path="/macow"  element={<Macow/>}/>
   <Route exact path="/osprey"  element={<Osprey/>}/>
  <Route exact path="/red-backed-kingfisher"  element={<RedBackedKingfisher/>}/>
  <Route exact path="/the-falcon"  element={<TheFalcon/>}/>
  <Route exact path="/toucans"  element={<Toucans/>}/>
  <Route exact path="/woodpecker"  element={<Woodpecker/>}/>
  <Route exact path="/yellow-parrot"  element={<YellowParrot/>}/>
  <Route exact path="/lotus"  element={<Lotus/>}/>
  <Route exact path="/red-gazania"  element={<RedGazania/>}/>
  <Route exact path="/sunflower"  element={<Sunflower/>}/>


  <Route exact path="/aquaphoenix"  element={<Aquaphoenix/>}/>
   <Route exact path="/awakening-city"  element={<AwakeningCity/>}/>
  <Route exact path="/boats-on-a-river"  element={<BoatsOnARiver/>}/>
  <Route exact path="/city-metro"  element={<CityMetro/>}/>
   <Route exact path="/garden-of-happiness"  element={<GardenOfHappiness/>}/>
  <Route exact path="/joy"  element={<Joy/>}/>
  <Route exact path="/rhythm-of-ecstasy"  element={<RhythmOfEcstasy/>}/>
  <Route exact path="/rove"  element={<Rove/>}/>
  <Route exact path="/sailing-away"  element={<SailingAway/>}/>
  <Route exact path="/ship-of-desert"  element={<ShipOfDesert/>}/>
  <Route exact path="/the-dhow"  element={<TheDhow/>}/>
  <Route exact path="/the-light-man"  element={<TheLightMan/>}/>
  <Route exact path="/wooden-house"  element={<WoodenHouse/>}/>
  <Route exact path="/thank-you"  element={<TnakyouPage/>}/>


   </Routes>

   </div>

   <Footer />


   </BrowserRouter>



  
</>


  );
}

export default App;
