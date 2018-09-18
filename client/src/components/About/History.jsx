import React, { Component } from 'react'
import children from './../../assets/img/CHILDREN@2x.png'

export default class History extends Component {
  render() {
    return (
      <div className="history__container__section">
      <div className="title__container">
        <h2 className="head-section">About eftwb</h2>
        </div>
        <div className="text__headline">
        <p className="inner_text">Since seven years, the Ethno Tendanc Fashion Week Brussels (ETFWB) is the event that reveals the trends of the world. </p>
        </div>
        <div className="history__section">
          <div className="image__container">
            <img src={children} alt=""/>
          </div>
          <div className="text__container">
            <p>
            An artistic weekend exchanges in 
the beating heart of Europe 
revolving around the culture of one 
and the other. 
We created a platform where stylists and artists affirm their creations. 
            </p>
          </div>
        </div>
      </div>
    )
  }
}
