


function NewsComponet(props) {
    return (
     
<>

    <div  id={props.id} key={props.key}  >
          <img src={props.src}  alt={props.alt} />
          <div class="TitleLAtestPainting"> <h4>{props.title}</h4> </div>
          {props.children}
      </div>
      
</>

    );
  }
  
  export default NewsComponet;
  