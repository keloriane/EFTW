import React, { Component } from 'react'
import Grid from '@material-ui/core'
import GridContainer from '../../common/grid/GridContainer';
import closeButton from './../../assets/img/Close.svg'
import GridItem from '../../common/grid/GridItem';
import {TimelineMax, TweenMax, Expo} from 'gsap'
import logo from './../../assets/img/logo_black.png'
import rightImage from './../../assets/img/Right-Picture.png'
import LeftImage from './../../assets/img/Left-Picture.png'
import {NavLink} from 'react-router-dom';
import Highlight from './../../views/Highlight';


export default class MenuGrid extends Component {
  handleReverse=()=>{
    const menuContainer = document.getElementsByClassName('menu-grid-container')
    const menuItem = document.getElementsByClassName('nav__menu__items')
    const leftContainer = document.getElementsByClassName('left_container')
    const rightContainer = document.getElementsByClassName('right_container')
    const menuAnimation = new TimelineMax()
    const menuAnimationReverse = new TimelineMax()
     
    menuAnimationReverse  
      .to(menuContainer, 0.7,{width:0, height:0, ease:Expo.easeInOut})
      .staggerTo(menuItem, 0.7,{y:200, yoyo:true, opacity:0,ease:Expo.easeInOut},0.1)
      .to([rightContainer, leftContainer],0.5,{opacity:0,ease:Expo.easeInOut},'-=0.3')
  }
  componentDidMount(){
    
    const menuContainer = document.getElementsByClassName('menu-grid-container')
    const menuItem = document.getElementsByClassName('nav__menu__items')
    const leftContainer = document.getElementsByClassName('left_container')
    const rightContainer = document.getElementsByClassName('right_container')
    const menuAnimation = new TimelineMax()
    const menuAnimationReverse = new TimelineMax()

    
    menuAnimation
      .from(menuContainer, 0.7,{width:0, height:0, ease:Expo.easeInOut,transformOrigin:"top right"})
      .staggerFrom(menuItem, 0.7,{y:200, yoyo:true, opacity:0,ease:Expo.easeInOut},0.1)
      .from([rightContainer, leftContainer],0.5,{opacity:0,ease:Expo.easeInOut},'-=0.3')


  }
  render() {
    return (
      <div>
      <button onClick={this.props.closed} className="close__button"><img src={closeButton} alt="" className="close__image"/></button>
      <GridContainer
      alignItems="center"
      className="menu-grid-container"
      style={{
        height:"100vh",
        border:"1px solid black",
        maxWidth:"100%"
      }}
      >
      <GridItem 
      xs={12}
      sm={12}
      md={12}
      lg={12}
      >
    
      <GridContainer
        justify="center"
        style={{
          textAlign:"center",
          height:"380px"
          
          
        }}
        >
        <GridItem
        xs={10}
        sm={10}
        md={10}
        lg={10}
        
        >
        <div className="logo__container">
          <img src={logo}alt=""/>
        </div>
    
      </GridItem>
      <GridItem
      xs={10}
      sm={10}
      md={10}
      lg={10}

       >
        <GridContainer
        justify="space-between">

          <GridItem 
          xs={12}
          sm={3}
          md={3}
          lg={3}
          >
            <div className="left_container">
              <img src={LeftImage} alt=""/>
            </div>
          </GridItem>
          <GridItem 
          xs={12}
          sm={3}
          md={3}
          lg={3}
          >
          <div className="center_container">
          <ul className="nav__menu">
            <NavLink 
            className="nav__menu__items"
            to={{
              pathname: `/about`
        
            }}
            onClick={this.props.closed}
            >
            About
            </NavLink>
            <NavLink 
            className="nav__menu__items"
            to={{
              pathname: `/about`
        
            }}
            onClick={this.props.closed}
            >
            2018 Shedule
            </NavLink>
            <NavLink 
            className="nav__menu__items"
            to={{
              pathname: `/hightlights`
        
            }}
            onClick={this.props.closed}
            >
            Highlight
            </NavLink>
            <NavLink 
            className="nav__menu__items"
            to={{
              pathname: `/contact`
        
            }}
            onClick={this.props.closed}
            >
            Contact
            </NavLink>
            <NavLink 
            className="nav__menu__items"
            to={{
              pathname: `/ticket`
        
            }}
            onClick={this.props.closed}
            >
            Buy ticket
            </NavLink>
          </ul>
        </div>
          </GridItem>
          <GridItem 
          xs={12}
          sm={3}
          md={3}
          lg={3}
          >
          <div className="right_container">
            <img src={rightImage} alt=""/>
          </div>
          </GridItem>
        </GridContainer>
      </GridItem>
      </GridContainer>


        </GridItem>
        </GridContainer>
      </div>
    )
  }
}
