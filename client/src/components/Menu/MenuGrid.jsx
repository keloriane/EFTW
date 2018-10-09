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

export default class MenuGrid extends Component {

  handleReverse = () => {

    const menuContainer = document.getElementsByClassName('menu-grid-container')
    const menuItem = document.getElementsByClassName('nav__menu__items')
    const leftContainer = document.getElementsByClassName('left_container')
    const rightContainer = document.getElementsByClassName('right_container')
    const menuAnimationReverse = new TimelineMax()

    menuAnimationReverse
      .to(menuContainer, 1, {
      width: 0,
      height: 0,
      ease: Expo.easeInOut
    })
      .staggerTo(menuItem, 0.5, {
        y: 200,
        yoyo: true,
        opacity: 0,
        ease: Expo.easeInOut
      }, 0.1)
      .to([
        rightContainer, leftContainer
      ], 0.5, {
        opacity: 0,
        ease: Expo.easeInOut
      }, '-=0.1')

  }

  componentDidMount() {

    const menuContainer = document.getElementsByClassName('menu-grid-container')
    const menuItem = document.getElementsByClassName('nav__menu__items')
    const leftContainer = document.getElementsByClassName('left_container')
    const rightContainer = document.getElementsByClassName('right_container')
    const menuAnimation = new TimelineMax()

    menuAnimation
      .from(menuContainer, 1, {
      width: 0,
      height: 0,
      ease: Expo.easeInOut,
      transformOrigin: "top right"
    })
      .staggerFrom(menuItem, 0.9, {
        y: 200,
        yoyo: true,
        opacity: 0,
        ease: Expo.easeInOut
      }, 0.1)
      .from([
        rightContainer, leftContainer
      ], 0.9, {
        opacity: 0,
        ease: Expo.easeInOut
      }, '-=0.9')

  }

  render() {

    return (
      <div>
        <Hidden only={["xs", "sm"]}>
          <GridContainer md={12} lg={12} xl={12}>

            <div className="menu-grid-container">

              <button onClick={this.props.closed} className="close__button"><img src={closeButton} alt="close" className="close"/>
              </button>

              <div className="content-wrapper">

                <div className="title">
                  <img src={logo} alt="ETFWB"/>
                </div>

                <div className="content">

                  <div className="menu_picture">
                    <img src={rightImage} alt=""/>
                  </div>

                  <ul className="menu-list">

                    <NavLink
                      className="nav__menu__items"
                      activeStyle={{ color: '#FFB437' }}
                      to={{
                      pathname: `/about`
                    }}
                      onClick={this.props.closed}>
                      About
                    </NavLink>

                    <NavLink
                      className="nav__menu__items"
                      activeStyle={{ color: '#FFB437' }}
                      to={{
                      pathname: `/program`
                    }}
                      onClick={this.props.closed}>
                      2018 Shedule
                    </NavLink>

                    <NavLink
                      className="nav__menu__items"
                      activeStyle={{ color: '#FFB437' }}
                      to={{
                      pathname: `/highlights`
                    }}
                      onClick={this.props.closed}>
                      Highlights
                    </NavLink>

                    <NavLink
                      className="nav__menu__items"
                      activeStyle={{ color: '#FFB437' }}
                      to={{
                      pathname: `/contact`
                    }}
                      onClick={this.props.closed}>
                      Contact
                    </NavLink>

                    <a
                      className="nav__menu__items"
                      href="https://google.be"
                      target="blank"
                      rel="noopener noreferrer"
                      onClick={this.props.closed}>
                      Buy ticket
                    </a>

                  </ul>

                  <div className="menu_picture">
                    <img src={leftImage} alt=""/>
                  </div>

                </div>

                <GridItem xs={12} sm={12} md={12}>

                  <GridContainer justify='center'>

                    <GridItem xs={2} sm={2}>

                      <GridContainer className='home_social_bar fadeInSlow' justify='space-between'>

                        <GridItem xs={4} sm={4}>
                          <i className="fab fa-facebook fa-2x"></i>
                        </GridItem>

                        <GridItem xs={4} sm={4}>
                          <i className="fab fa-instagram fa-2x"></i>
                        </GridItem>

                        <GridItem xs={4} sm={4}>
                          <i className="fab fa-youtube fa-2x"></i>
                        </GridItem>

                      </GridContainer>

                    </GridItem>

                  </GridContainer>

                </GridItem>

                <div className="footer">
                  <div>Webdesign by
                    <a target='_blank' rel="noopener noreferrer" href="http://instagram.com/fmrgz">@FMRGZ</a>
                  </div>
                  <div>© 2018 ETFWB</div>
                  <div>All rights Reserved</div>
                </div>

              </div>

            </div>

          </GridContainer>
        </Hidden>

        <Hidden only={["md", "lg", "xl"]}>
          <GridContainer
            justify="center"
            alignItems="center"
            style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${imageSource})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
          }}>
            <GridItem xs={12} sm={12}>
            <button onClick={this.props.closed} className="close_button"><img src={closeButton} alt="close"/></button>

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
                        to='/about'
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
                        to='/highlights'
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
                        to='/program'
                        onClick={this.props.closed}
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
                        to='/contact'
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
                        href='http://google.be'
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
                      <img src={address} className="address" alt="address"></img>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>

                      <GridContainer justify='center'>

                        <GridItem xs={6} sm={6}>

                          <GridContainer className='fadeInSlow' justify='space-between'>

                            <GridItem xs={4} sm={4}>
                              <i
                                className="fab fa-facebook fa-2x"
                                style={{
                                color: 'white'
                              }}></i>
                            </GridItem>

                            <GridItem xs={4} sm={4}>
                              <i
                                className="fab fa-instagram fa-2x"
                                style={{
                                color: 'white'
                              }}></i>
                            </GridItem>

                            <GridItem xs={4} sm={4}>
                              <i
                                className="fab fa-youtube fa-2x"
                                style={{
                                color: 'white'
                              }}></i>
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
        </Hidden>
      </div>
    )
  }
}
