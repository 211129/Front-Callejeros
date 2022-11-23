
import '../assets/Styles/Register.css'
function SectionReg(){


    return(

    <div>
     < section id="home">
         <div className="inner-width">
            <div className="content">
            
              
        <div className="container">
        <div className="title">Registro</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nombre Completo</span>
                <input type="text" placeholder="Ingrese nombre completo" required/>
              </div>
              <div className="input-box">
                <span className="details">Nombre de Usuario</span>
                <input type="text" placeholder="Ingrese usuario" required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Ingrese email" required/>
              </div>
              <div className="input-box">
                <span className="details"> Numero de telefono</span>
                <input type="text" placeholder="Ingrese numero" required/>
              </div>
              <div className="input-box">
                <span className="details">Contraseña</span>
                <input type="text" placeholder="Ingrese contraseña" required/>
              </div>
              <div className="input-box">
                <span className="details">Confirmar contraseña</span>
                <input type="text" placeholder="Confirme contraseña" required/>
              </div>
            </div>
         
            <div className="button">
              <input type="submit" value="Registrarme"/>
            </div>
          </form>
        </div>
      </div>



            </div>
         </div>
       </section>
      
      </div>

    )
}

export default SectionReg;