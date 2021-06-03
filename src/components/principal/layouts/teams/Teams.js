import saryEquipe from './statics/images/sary.jpg'
import saryRealisation from './statics/images/realisation.png'
import React, { Component } from 'react'
import './Teams.scss'

class Teams extends Component {
  render () {
    return (
      <div className="Teams">
        <div className="div_containt">
          <div className='image_containt'>
            <div className='image'>
              <img src={saryEquipe} className='saryEquipe' alt='' />
            </div>
            <div className="description_Equipe">
              <h2>Qui nous sommes ?</h2>
              <div className="ligne"></div>
              <h5>
                Un equipe de jeune specialiser dans
                le develloppment de solution
                informatique constitue de
              </h5>
              <i>
                develloppeur fullstack, UI Designer,
                developpeur mobil et bureau
              </i>
            </div>
          </div>
          <div className="realisation">
            <h1>Nos recentes realisations</h1>
            <div className = "ligne_droit"> </div>
          </div>
          <div className="saryRealisations">
            <div className="saryR">
              <h3>Hotel Vanille</h3>
              <h5>Lorem ipsum dolor sit amet consectetur</h5>
              <img src={saryRealisation} className='saryRealisation' alt='' />
            </div>
            <div className="saryR">
              <h3>Hotel Vanille</h3>
              <h5>Lorem ipsum dolor sit amet consectetur</h5>
              <img src={saryRealisation} className="saryRealisation" alt='' />
            </div>
            <div className="saryR">
              <h3>Hotel Vanille</h3>
              <h5>Lorem ipsum dolor sit amet consectetur</h5>
              <img src={saryRealisation} className="saryRealisation" alt='' />
            </div>
            <div className="saryR">
              <h3>Hotel Vanille</h3>
              <h5>Lorem ipsum dolor sit amet consectetur</h5>
              <img src={saryRealisation} className="saryRealisation" alt='' />
            </div>
            <div className="saryR">
              <h3>Hotel Vanille</h3>
              <h5>Lorem ipsum dolor sit amet consectetur</h5>
              <img src={saryRealisation} className="saryRealisation" alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Teams
