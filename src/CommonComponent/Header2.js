
import React, {useState, useEffect} from "react";

import { Link, useLocation } from "react-router-dom";









function Header() {


  // useEffect(() => {
  // }, [location]);


const MenuList = [
    { 
      key: 'home',
      label: 'Home',
      routeTo: '/', 
      hasSubMenu: false, 
      subMenuList: [],
      requiredPermission: []
    }, 
    { 
      key: 'about',
      label: 'About',
      routeTo: '/about', 
      hasSubMenu: false, 
      subMenuList: [],
      requiredPermission: []
    }, 
    { 
      key: 'gallery',
      label: 'Gallery',
      routeTo: '/gallery', 
      hasSubMenu: false, 
      subMenuList: [],
      requiredPermission: []
    }, 
    // { 
    //   key: 'nft',
    //   label: 'NFT',
    //   routeTo: 'nft', 
    //   hasSubMenu: false, 
    //   subMenuList: [],
    //   requiredPermission: []
    // }, 

    // { 
    //   key: 'news',
    //   label: 'News',
    //   routeTo: '/news', 
    //   hasSubMenu: false, 
    //   subMenuList: [],
    //   requiredPermission: []
    // }, 

    { 
      key: 'contact',
      label: 'Contact',
      routeTo: '/contact', 
      hasSubMenu: false, 
      subMenuList: [],
      requiredPermission: []
    }, 
]

const [isMobile, setIsMobile] = useState(false);



// className={scroll ? "navbar navbar-expand-md  fixed-top bg-white" : "navbar navbar-expand-md "}
  return (
   
 <nav className= "navbar navbar-expand-md  fixed-top bg-white" >
  
  <div className="container-fluid CustomNav" id="scroller">
    <div className="LogoContainer">
  <Link to='/'  className="navbar-brand" href="#"> 
    <div className="Logo"></div>
    </Link>

    </div>
    <div className="NavigationContainer">
    <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)} >
        
     {isMobile?(
         <span className="MenuIcons MenuIconClose"></span>
     
     ):(
        <span className="MenuIcons MenuIconOpen"></span>
     )}
     

    </button>
    <div className="CustomNav"   >
      <ul className={isMobile?'nav-links-mobile':'nav-links-desktop'} onClick={()=>setIsMobile(false)} >
    
      <li  >
          <Link    to='/'  className='nav-link'  >
          Home
           </Link>
        </li>

        <li  >
          <Link    to='/about'  className='nav-link'  >
          About
           </Link>
        </li>

        <li  >
          <Link    to='/gallery'  className='nav-link'  >
          Gallery
           </Link>
        </li>
        <li  >
          <Link    to='/contact'  className='nav-link'  >
          Contact
           </Link>
        </li>
         
      </ul>
      </div>
    </div>
    </div>

  {/* <div className="container-fluid">
    <Link to='/'  className="navbar-brand" href="#"> 
    <div className="Logo"></div>
    </Link>
    <div className='d-flex flex-row-reverse'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {MenuList.map((item) => (
      <li  key={item.key}>
          <Link  to={item.routeTo} className={location.pathname===item.routeTo? 'nav-link active': 'nav-link' }  >
           {item.label}
           </Link>
        </li>
           ))}
      </ul>
    </div>
    </div>
  </div> */}
</nav> 



  );
}

export default Header;
