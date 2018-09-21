import React from 'react'
import logo from './../../assets/img/LOGO@2x.png'
import facebook from './../../assets/img/fbk@2x.png'
import ticket from './../../assets/img/ticket@2x.png'
import insta from './../../assets/img/ig@2x.png'

export const Socialbar = () => {
  return (
    <div className="social_bar__container">
      <div className="menu__item"></div>
      <div className="logo_title__item">
        <img src={logo} alt="" className= ""/>
      </div>
      <div className="social__container">
        <div className="ticket">
          <img className="icon__items" src={ticket} alt="" />
        </div>
      </div>
    </div>
  )
}
