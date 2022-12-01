import { Link } from 'react-router-dom';
import '../assets/Styles/Section.css'
import Cart from './Cart';





function Section(){

 
  
    return(

    <div>
     < section id="home">
         <div className="inner-width">
            <div className="content">
                <div className='buttons'>
                 <Cart></Cart>
                 <Link to="#" > </Link>
                 <Link to="#"></Link>
                </div>
            </div>
         </div>
       </section>
      </div>


    )
}

export default Section;

