import React from 'react';


export default function MainContainer(props){
return(
    <div className="MainContainer">
    <div className="container-fluid">

      {props.children}


    </div>
    </div>

);
    
}

