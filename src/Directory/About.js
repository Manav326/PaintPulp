import MainContainer from "../CommonComponent/MainContainer";

import AboutPiu from '../../src/Images/AboutPiu.png'

function About() {
    return (
      <MainContainer>
      <div className=' PageAbout  '>
      <h2 className="CustomHeadingSpace">About</h2>
    
       <div className="GalleryContainer ">
      <h4 className="AboutText">Born and raised in Kolkata, the cultural capital of India, Pue’s days were engulfed in a creative spirit since her childhood. She despises all things mundane and is always looking out for new challenges.
      This exuberant attitude reflects in her craft which has helped her develop a unique style of her own over
      the years. With bright colors contrasting dense black bases or subtle details getting followed up with bold strokes, Pue’s art is the voice of her inner child. It is the voice of every person who stumbles, falls, but gets up again to rise like a phoenix. </h4>    


        <div class="row justify-content-sm-end" >
            <div class="col col-sm-12 col-md-8 alignRight AboutImg">
            <img class="img-fluid" src={AboutPiu} alt="Piu" /> 
              
        </div>
        </div>
     </div>
        <h2 className="CustomHeadingSpace" > Exhibitions</h2>

        <div className="GalleryContainer">
        <p className="AboutText2" >Pue has done many exhibitions of the years internationally. Here are some of the highlights.</p>
          <ul className="ExhibitionsList">
          

         


            <li>
            <div className="ExhibitionsYear">2023: </div>
            <div className="ExhibitionsListItemContainer">
            <span className="ExhibitionsListItem "><span className='ExhibitionsMonth'>January </span>	<span className='ExhibitionsDetail'>- Group exhibition at Silk factory art gallery, Georgia, Tblisi</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>March </span><span className='ExhibitionsDetail'>- Solo exhibition at World art dubai, Dubai, UAE</span></span>
            </div>
            </li>

            <li>
            <div className="ExhibitionsYear">2022: </div>
            <div className="ExhibitionsListItemContainer">
            <span className="ExhibitionsListItem "><span className='ExhibitionsMonth'>June </span>	<span className='ExhibitionsDetail'>- Participated in Dubai Index, UAE</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>July </span><span className='ExhibitionsDetail'>- Group exhibition at Boushari art gallery, Kuwait</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>September </span><span className='ExhibitionsDetail'>- Featured in Artist talk magazine, UK</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>December </span><span className='ExhibitionsDetail'>- Group exhibition at Jumeirah Boxpark for UAE national day, Dubai, UAE</span></span>
            </div>
            </li>


            <li>
            <div className="ExhibitionsYear">2021: </div>
            <div className="ExhibitionsListItemContainer">
            <span className="ExhibitionsListItem "><span className='ExhibitionsMonth'>March  </span>	<span className='ExhibitionsDetail'>- Group exhibition at World art dubai, Dubai, UAE<br/> - Participated in DIFC art night,  Dubai, UAE</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>July  </span><span className='ExhibitionsDetail'>- Group exhibition at Boushari art gallery, Kuwait</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>November  </span><span className='ExhibitionsDetail'>- Featured in Emerging scene art prize at World trade center, Dubai, UAE</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>December  </span><span className='ExhibitionsDetail'>- Group exhibition at Pullman hotel Businessbay, Dubai, UAE</span></span>
            </div>
            </li>

            <li>
            <div className="ExhibitionsYear">2020: </div>
            <div className="ExhibitionsListItemContainer">
            <span className="ExhibitionsListItem "><span className='ExhibitionsMonth'>February  </span>	<span className='ExhibitionsDetail'>- Group exhibition at Park Street, Kolkata, India</span></span>
            <span className="ExhibitionsListItem"><span className='ExhibitionsMonth'>March </span><span className='ExhibitionsDetail'>- Participated in DIFC art night,  Dubai, UAE</span></span>
            </div>
            </li>

            <li>
            <div className="ExhibitionsYear">2019: </div>
            <div className="ExhibitionsListItemContainer">
            <span className="ExhibitionsListItem "><span className='ExhibitionsMonth'>April  </span>	<span className='ExhibitionsDetail'>- Solo exhibition at Chemould art gallery, Kolkata,India</span></span>
           
            </div>
            </li>
            <li>
            <div className="ExhibitionsYear">2016-18 </div>
            <div className="ExhibitionsListItemContainer">
            <span className="ExhibitionsListItem "><span className='ExhibitionsMonth'>  </span>	<span className='ExhibitionsDetail'>- Participated in many group exhibitions</span></span>
            
            </div>
            </li>
            
            
            </ul>

      </div>
        </div>
    </MainContainer>
    );
  }
  
  export default About;
  