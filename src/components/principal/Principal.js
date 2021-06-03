import React from 'react'
import './statics/styles/Principal.scss'
import Header from './layouts/header/Header'
import Competences from './layouts/competences/Competences'
import Separator from './statics/images/Separator'
import SeparatorInv from './statics/images/SeparatorInv'
import Footer from './layouts/footer/Footer'
import Methode from './layouts/methode/Methode'
import Teams from './layouts/teams/Teams'

function Principal () {
  return (
    <div className='Principal'>
      <div className="kana">
        <Header />
      </div>
      <div className="margin-horizontal">
        <div className="rosa" style={{ position: 'relative' }}>
          <SeparatorInv fill="#e3e3e3" strocke="#e3e3e3"/>
          <Teams />
          <Separator fill="#051721" strocke="#051721"/>
        </div>
        <div>
          <Competences />
        </div>
        <div className="imortel-1" style={{ position: 'relative' }}>
          <SeparatorInv fill="#051721" strocke="#051721"/>
          <Methode />
          <Separator fill="#051721" strocke="#051721"/>
        </div>
        <div className="imortel-2" style={{ position: 'relative' }}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Principal
