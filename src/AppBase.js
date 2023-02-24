import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Directory/Home";
import Work from "./Directory/Work";
import News from "./Directory/News";
import About from "./Directory/About";
import Contact from "./Directory/Contact";
import Shop from "./Directory/Shop";
import Header from "./CommonComponent/Header";
import Footer from "./CommonComponent/Footer";

function AppBase() {
  return (
    <>


   <Header/>
    <Home />

    <Footer />


  
</>


  );
}

export default AppBase;
