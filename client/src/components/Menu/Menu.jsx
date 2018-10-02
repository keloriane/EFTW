import React, { Component } from 'react'
import {TimelineMax, TweenMax, Expo} from 'gsap'
import logo from './../../assets/img/logo_black.png'
import rightImage from './../../assets/img/Right-Picture.png'
import LeftImage from './../../assets/img/Left-Picture.png'
import closeButton from './../../assets/img/Close.svg'
import Grid from '@material-ui/core'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';


export default class Menu extends Component {
  componentDidMount(){
    
    const menuContainer = document.getElementsByClassName('Menu__container')
    const menuItem = document.getElementsByClassName('nav__menu__items')
    const leftContainer = document.getElementsByClassName('left_container')
    const rightContainer = document.getElementsByClassName('right_container')
    const menuAnimation = new TimelineMax()

    
    menuAnimation
      .from(menuContainer, 0.7,{width:0, height:0, ease:Expo.easeInOut})
      .staggerFrom(menuItem, 0.7,{y:200, yoyo:true, opacity:0,ease:Expo.easeInOut},0.1)
      .from([rightContainer, leftContainer],0.5,{opacity:0,ease:Expo.easeInOut},'-=0.3')
  }
  render() {
      
    return (

   <div className="Menu__container">
      <button onClick={this.props.closed} className="close__button"><img src={closeButton} alt="" className="close__image"/></button>
        <div className="logo__container">
          <img src={logo}alt=""/>
        </div>
          <div className="menu__wrapper">
            <div className="left_container">
                <img src={LeftImage} alt=""/>
            </div>
            <div className="center_container">
              <ul className="nav__menu">
                <li className="nav__menu__items">About</li>
                <li className="nav__menu__items">2018 Schedule</li>
                <li className="nav__menu__items">Highlight</li>
                <li className="nav__menu__items">Contact</li>
                <li className="nav__menu__items">Buy ticket</li>
              </ul>
            </div>
            <div className="right_container">
              <img src={rightImage} alt=""/>
            </div>
          </div>

        </div>
     
    
    )
  }
}
