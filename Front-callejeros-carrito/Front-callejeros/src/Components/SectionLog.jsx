
import { Link } from 'react-router-dom';
import '../assets/Styles/Login.css'

import '../assets/Styles/Section.css'


function SectionLog(){


    return(

    <div>
     < section id="home">
         <div className="inner-width">
            <div className="content">
             
             
        <div>

<form className='form'>

    <h2 className='form_title'>Inicio Sesión</h2>
    <p className='form_paragraph'>¿Aún no tienes una cuenta? <Link to="/register" className='form_link'>Entra aquí</Link></p>
    

    <div className='form_container'>

          <div className='form_group'>

              <input type="text" id="name" className='form_input' placeholder=''/>
              <label for="name" className='form_label'>Nombre:</label>
              <span className='form_line'></span>
          </div>

          
          <div className='form_group'>
          <input type="text" id="user" className='form_input' placeholder=''/>
              <label for="user" className='form_label'>Usuario:</label>
         
              <span className='form_line'></span>
          </div>

          
          <div className='form_group'>
          <input type="text" id="password" className='form_input' placeholder=''/>
              <label for="password" className='form_label'>Contraseña:</label>
              <span className='form_line'></span>
          </div>

          <input type="submit" className='form_submit' value="Entrar"/>

    </div>
</form>

</div>
                  
            </div>
         </div>
       </section>
     
      </div>


    )
}

export default SectionLog;