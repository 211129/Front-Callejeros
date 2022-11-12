
import '../assets/Styles/Register.css'
function SectionReg(){


    return(

    <div>
     < section id="home">
         <div className="inner-width">
            <div className="content">
            
              
        <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div class="input-box">
                <span class="details">Username</span>
                <input type="text" placeholder="Enter your username" required/>
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required/>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required/>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required/>
              </div>
            </div>
         
            <div class="button">
              <input type="submit" value="Register"/>
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