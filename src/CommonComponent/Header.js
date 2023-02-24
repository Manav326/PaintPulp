
import React, {useState, useEffect} from "react";

import { Link, useLocation } from "react-router-dom";









function Header() {

  // let location = useLocation();
  const [location, SetLocation] = useState('/home');

  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
      console.log(location)
      document.getElementById("scroller").scroll(0,0)
 
  }, [location]);








  const [scroll, setScroll] = useState(false);
   
 useEffect(() => {
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 142);
  });
}, []);

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

const [active, setActive] = useState(false);
 const  handleMenuClick = () => {
  setActive(true); 
  alert('hi')

}

// className={scroll ? "navbar navbar-expand-md  fixed-top bg-white" : "navbar navbar-expand-md "}
  return (
   
 <nav className= "navbar navbar-expand-md  fixed-top bg-white" >
  
  <div className="container-fluid" id='scroller'>
  <Link to='/'  className="navbar-brand" href="#"> 
    <div className="Logo"></div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
      {MenuList.map((item) => (
      <li  key={item.key} onClick={()=>{SetLocation(item.routeTo); console.log('abc')}}>
          <Link    to={item.routeTo}  className={location.pathname===item.routeTo? 'nav-link active': 'nav-link' }  >
           {item.label}
           </Link>
        </li>
           ))}
      </ul>
    
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
