import React, {Component} from 'react'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import closeButton from './../../assets/svg/Close.svg'
import {TimelineMax, Expo} from 'gsap'
import logo from './../../assets/svg/etfw-logo.svg'
import rightImage from './../../assets/menu/img/right-picture.png'
import leftImage from './../../assets/menu/img/left-picture.png'
import {NavLink} from 'react-router-dom';

import HomeButton from './../../common/customButtons/HomeButton';
import {Hidden} from '@material-ui/core'

import address from './../../assets/img/address@2x.png';
import whiteLogo from './../../assets/img/etfw-logo@2x.png';
import imageSource from './../../assets/home/home.png';

// I need to create a Menu component that will render either MenuMobile or MenuGrid
export default class MenuMobile extends Component {

  handleReverse =()=>{

    const menuContainer = document.getElementsByClassName('menu-grid-container')
    const menuItem = document.getElementsByClassName('nav__menu__items')
    const leftContainer = document.getElementsByClassName('left_container')
    const rightContainer = document.getElementsByClassName('right_container')
    const menuAnimationReverse = new TimelineMax()
     
    menuAnimationReverse  
      .to(menuContainer, 1,{width:0, height:0, ease:Expo.easeInOut})
      .staggerTo(menuItem, 0.5,{y:200, yoyo:true, opacity:0,ease:Expo.easeInOut},0.1)
      .to([rightContainer, leftContainer],0.5,{opacity:0,ease:Expo.easeInOut},'-=0.1')

      setTimeout(() => { 
        this.props.closed();
      }, 2500);

  }

  componentDidMount(){
    
    const menuContainer = document.getElementsByClassName('menu-grid-container')
    const menuItem = document.getElementsByClassName('nav__menu__items')
    const leftContainer = document.getElementsByClassName('left_container')
    const rightContainer = document.getElementsByClassName('right_container')
    const menuAnimation = new TimelineMax()
    
    menuAnimation
      .from(menuContainer, 1,{width:0, height:0, ease:Expo.easeInOut,transformOrigin:"top right"})
      .staggerFrom(menuItem, 0.5,{y:200, yoyo:true, opacity:0,ease:Expo.easeInOut},0.1)
      .from([rightContainer, leftContainer],0.5,{opacity:0,ease:Expo.easeInOut},'-=0.1')

  }

  render() {

    return (

          <GridContainer
            justify="center"
            alignItems="center"
            style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${imageSource})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            overflow:'hidden'
          }}>
            <GridItem xs={12} sm={12}>
            <button onClick={this.handleReverse} className="close_button nav__menu__items"><img src={closeButton} alt="close"/></button>

              <GridContainer justify="center">
                <GridItem xs={10} sm={10} md={6}>
                  <GridContainer className="wrapperSmall fadeInMedium">
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      textAlign: 'center'
                    }}>
                      <img src={whiteLogo} className="logoSmall" alt="logo"></img>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      page: 'about'
                    }}
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <NavLink
                        className="nav__menu__items"
                        to='/about'
                        activeStyle={{ color: '#FFB437' }}
                        onClick={this.props.closed}
                        style={{
                        textDecoration: 'none'
                      }}>
                        <HomeButton
                          style={{
                          color: '#FFFFFF',
                          page: 'about'
                        }}
                          onMouseEnter={this.handleChange}
                          onMouseLeave={this.handleLeave}>
                          <h2 className="home_boutons_small">ABOUT</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      page: 'highlights'
                    }}
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <NavLink
                        className="nav__menu__items"
                        to='/highlights'
                        activeStyle={{ color: '#FFB437' }}
                        onClick={this.props.closed}
                        style={{
                        textDecoration: 'none'
                      }}>
                        <HomeButton
                          style={{
                          color: '#FFFFFF',
                          page: 'highlights'
                        }}
                          onMouseEnter={this.handleChange}
                          onMouseLeave={this.handleLeave}>
                          <h2 className="home_boutons_small">HIGHLIGHTS</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      page: 'program'
                    }}
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <NavLink
                        className="nav__menu__items"
                        to='/program'
                        onClick={this.props.closed}
                        activeStyle={{ color: '#FFB437' }}
                        style={{
                        textDecoration: 'none'
                      }}>
                        <HomeButton
                          style={{
                          color: '#FFFFFF',
                          page: 'program'
                        }}
                          onMouseEnter={this.handleChange}
                          onMouseLeave={this.handleLeave}>
                          <h2 className="home_boutons_small">2018 SCHEDULE</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      page: 'contact',
                      marginBottom: '10px'
                    }}
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <NavLink
                        className="nav__menu__items"
                        to='/contact'
                        activeStyle={{ color: '#FFB437' }}
                        onClick={this.props.closed}
                        style={{
                        textDecoration: 'none'
                      }}>
                        <HomeButton
                          style={{
                          color: '#FFFFFF',
                          page: 'contact'
                        }}
                          onMouseEnter={this.handleChange}
                          onMouseLeave={this.handleLeave}>
                          <h2 className="home_boutons_small">CONTACT</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      page: 'tickets',
                      marginBottom: '10px'
                    }}
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <a
                        className="nav__menu__items"
                        href='https://www.weezevent.com/widget_billeterie.php?id_evenement=376927&lg_billetterie=1&code=27912&resize=1&width_auto=1&color_primary=00AEEF%22'
                        style={{
                        textDecoration: 'none'
                      }}
                        target="_blank"
                        rel="noopener noreferrer">
                        <HomeButton
                          style={{
                          color: '#FFFFFF',
                          page: 'tickets'
                        }}>
                          <h2 className="home_boutons_small">BUY TICKETS</h2>
                        </HomeButton>
                      </a>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      page: 'address',
                      marginBottom: '20px'
                    }}>
                      <img src={address} className="address nav__menu__items" alt="address"></img>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>

                      <GridContainer justify='center'>

                        <GridItem xs={6} sm={6}>

                          <GridContainer className='fadeInSlow' justify='space-between' style={{textAlign:'center'}}>

                            <GridItem xs={4} sm={4}>
                              <a
                                href="https://www.facebook.com/EthnoTendanceFashionWeekBrussels/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i
                                  className="fab fa-facebook fa-2x nav__menu__items"
                                  style={{
                                  color: 'white'
                                }}></i>
                              </a>
                            </GridItem>

                            <GridItem xs={4} sm={4}>
                              <a
                                href="https://www.instagram.com/ethnotendance/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i
                                  className="fab fa-instagram fa-2x nav__menu__items"
                                  style={{
                                  color: 'white'
                                }}></i>
                              </a>
                            </GridItem>

                            <GridItem xs={4} sm={4}>
                              <a
                                href="https://www.youtube.com/channel/UCVE0KD2sjMOwZRUMWcXhgOg"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i
                                  className="fab fa-youtube fa-2x nav__menu__items"
                                  style={{
                                  color: 'white'
                                }}></i>
                              </a>
                            </GridItem>

                          </GridContainer>

                        </GridItem>

                      </GridContainer>

                    </GridItem>
                  </GridContainer>
                </GridItem>

              </GridContainer>
            </GridItem>
          </GridContainer>
    )
  }
}
