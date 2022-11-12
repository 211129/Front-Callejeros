import { Link } from 'react-router-dom';
import '../assets/Styles/Section.css'





function Section(){

 
  
    return(

    <div>
     < section id="home">
         <div className="inner-width">
            <div className="content">
               <h3>Somos</h3>
                <h1>..</h1>
                  
                
                <div className='buttons'>

               <Link to="#" > Services</Link>
               <Link to="#">Contact</Link>
                 </div>




            </div>
         </div>
       </section>
      </div>


    )
}

export default Section;

