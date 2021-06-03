import React from 'react'
import logo from './img/akanga.svg'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import img8 from './img/8.png'
import img9 from './img/9.png'
import A1 from './img/A1.png'
import A2 from './img/A2.png'
import A3 from './img/A3.png'
import A4 from './img/A4.png'
import A5 from './img/A5.png'
import A6 from './img/A6.png'
import A7 from './img/A7.png'
import './statics/css/Styles.scss'

// const prefix = process.env.REACT_PUBLIC_BASE_PATH || ''

function Header () {
  return (
    <div className="App">
      <div className="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href='/' className="navigation__link">A propos</a></li>
            <li className="navigation__item"><a href='/' className="navigation__link">Realisation</a></li>
            <li className="navigation__item"><a href='/' className="navigation__link">Qui nous sommes</a></li>
            <li className="navigation__item"><a href='/' className="navigation__link">Contact</a></li>
          </ul>
        </nav>
      </div>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo" className="header__logo"/>
        </div>

        <div class="header__text-box">
          <img src={logo} alt="image_center" class="image--box"/>
          <h1 class="heading-primary">
            <span class="heading-primary--main">Akanga</span>
            <span class="heading-primary--sub">Confiez vos projet aux mainx de jeune experts et dynamiques</span>
          </h1>
        </div>
        <div className="background">
          <span><img src={img1} alt="imag1" div className="size__image"/></span>
          <span><img src={img2} alt="imag2" div className="size__image"/></span>
          <span><img src={img3} alt="imag2" div className="size__image"/></span>
          <span><img src={img4} alt="imag2" div className="size__image"/></span>
          <span><img src={img5} alt="imag2" div className="size__image"/></span>
          <span><img src={img6} alt="imag2" div className="size__image"/></span>
          <span><img src={img7} alt="imag2" div className="size__image"/></span>
          <span><img src={img8} alt="imag2" div className="size__image"/></span>
          <span><img src={img9} alt="imag2" div className="size__image"/></span>
          <span><img src={A1} alt="imag2" div className="size__image"/></span>
          <span><img src={A2} alt="imag2" div className="size__image"/></span>
          <span><img src={A3} alt="imag2" div className="size__image"/></span>
          <span><img src={A4} alt="imag2" div className="size__image"/></span>
          <span><img src={A5} alt="imag2" div className="size__image"/></span>
          <span><img src={A6} alt="imag2" div className="size__image"/></span>
          <span><img src={A7} alt="imag2" div className="size__image"/></span>

        </div>
      </header>
    </div>

  )
}

export default Header
