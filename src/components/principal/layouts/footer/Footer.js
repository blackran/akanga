import React from 'react'
import './statics/css/Styles.scss'

function Footer () {
  return(
    <div className="Footer">
      <section style={{ overflow: 'hidden' }} id="contacts">
        <div className="contacts">
          <div className="element-title">
            <div className="row">
              <div className="container">
                <div className="ti wow fadeInUp" >Envie de travailler avec nous? </div>
                <div className="sec wow fadeInUp" >collaborons ensemble afin de creer des produits incroyables</div>	
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">	
              <div className="wrapper-link">		
                <div className="our-link">
                  <div className="row">
                    <div className="text-center wrapper-link-icons">	
                      <div className="  fadeInRight mail" >	
                        <span className="">tonikonne@gmail.com</span>&nbsp; |	&nbsp;<span className="">tonikonne@gmail.com</span>&nbsp; | &nbsp;<span className="">tonikonne@gmail.com</span>

                      </div>									
                    </div>								
                  </div>								
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <div className="footer-container"> 
        <div className="bottdom-footer-left wow fadeInUp copy" >
          <p><a href="/">Akanga</a>&nbsp;-&nbsp;<span>&#169; Copyright all right reserved</span>  </p>
        </div>		  
      </div>
    </div>
  )
}

export default Footer
