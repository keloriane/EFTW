import React, {Component} from 'react';
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import {NavLink} from 'react-router-dom';

import mainImg from '../../assets/home/home.png';
import aboutImg from '../../assets/home/about.jpg';
import contactImg from '../../assets/home/contact.jpg';
import highlightsImg from '../../assets/home/highlights.jpg';
import programImg from '../../assets/home/program.jpg';
import ticketsImg from '../../assets/home/tickets.jpg';
import HomeButton from '../../common/customButtons/HomeButton';
import {Hidden} from '@material-ui/core'

import address from '../../assets/img/address@2x.png';
import whiteLogo from '../../assets/img/etfw-logo@2x.png';

import logo from '../../assets/svg/etfw-logo.svg';

export default class NavHome extends Component {
  state = {
    activeLink: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({activeLink: e.target.style.page})
  }

  handleLeave = (e) => {
    e.preventDefault();
    this.setState({activeLink: ''})
  }

  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    let imageSource = '';
    if (this.state.activeLink === '') {
      imageSource = mainImg;
    } else if (this.state.activeLink === 'about') {
      imageSource = aboutImg;
    } else if (this.state.activeLink === 'highlights') {
      imageSource = highlightsImg
    } else if (this.state.activeLink === 'program') {
      imageSource = programImg
    } else if (this.state.activeLink === 'contact') {
      imageSource = contactImg
    } else if (this.state.activeLink === 'tickets') {
      imageSource = ticketsImg
    }

    return (
      <div style={{
        overflow: 'hidden'
      }}>
        <Hidden only={["xs", "sm"]}>
          <GridContainer className="home_wrapper">

            <GridItem
              xs={12}
              sm={6}
              md={6}
              style={{
              textAlign: 'center'
            }}>

              <GridContainer className="content_container">

                <GridItem xs={12} sm={12} md={12}>
                  <img className="logo_container fadeInFast" src={logo} alt="logo"></img>
                </GridItem>

                <GridItem
                  style={{
                  page: 'about'
                }}
                  xs={12}
                  sm={12}
                  md={12}
                  onMouseEnter={this.handleChange}
                  onMouseLeave={this.handleLeave}>

                  <NavLink className="home_boutons fadeInMedium" to='/about'>

                    <HomeButton
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <h2 style={{
                      page: 'about',
                      width: '100%'
                    }} className="home_boutons">about</h2>
                    </HomeButton>

                  </NavLink>

                </GridItem>

                <GridItem
                  style={{
                  page: 'program'
                }}
                  xs={12}
                  sm={12}
                  md={12}
                  onMouseEnter={this.handleChange}
                  onMouseLeave={this.handleLeave}>

                  <NavLink className="home_boutons" to='/program'>

                    <HomeButton
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <h2 style={{
                      page: 'program',
                      width: '100%'
                    }} className="home_boutons fadeInMedium">2018 schedule</h2>
                    </HomeButton>

                  </NavLink>

                </GridItem>

                <GridItem
                  style={{
                  page: 'highlights'
                }}
                  xs={12}
                  sm={12}
                  md={12}
                  onMouseEnter={this.handleChange}
                  onMouseLeave={this.handleLeave}>

                  <NavLink className="home_boutons" to='/highlights'>

                    <HomeButton
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <h2 style={{
                      page: 'highlights',
                      width: '100%'
                    }} className="home_boutons fadeInMedium">highlights</h2>
                    </HomeButton>

                  </NavLink>

                </GridItem>

                <GridItem
                  style={{
                  page: 'contact'
                }}
                  xs={12}
                  sm={12}
                  md={12}
                  onMouseEnter={this.handleChange}
                  onMouseLeave={this.handleLeave}>

                  <NavLink className="home_boutons" to='/contact'>

                    <HomeButton
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <h2 style={{
                      page: 'contact',
                      width: '100%'
                    }} className="home_boutons fadeInMedium">CONTACT</h2>
                    </HomeButton>

                  </NavLink>

                </GridItem>

                <GridItem
                  style={{
                  page: 'tickets'
                }}
                  xs={12}
                  sm={12}
                  md={12}
                  onMouseEnter={this.handleChange}
                  onMouseLeave={this.handleLeave}>

                  <NavLink className="home_boutons" to='/'>

                    <HomeButton
                      style={{
                      page: 'tickets',
                      width: '100%'
                    }}
                      onMouseEnter={this.handleChange}
                      onMouseLeave={this.handleLeave}>
                      <h2 className="tickets_boutons fadeInMedium">buy tickets</h2>
                    </HomeButton>

                  </NavLink>

                </GridItem>

                <GridItem xs={12} sm={12} md={12}>

                  <GridContainer justify='center'>

                    <GridItem xs={4} sm={4}>

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

              </GridContainer>

            </GridItem>

            <GridItem
              xs={12}
              sm={6}
              md={6}
              style={{
              textAlign: 'center',
              height: '100vh'
            }}>

              <img
                className="slideInRightFast"
                src={imageSource}
                style={{
                width: '100%',
                maxHeight: '100%'
              }}
                alt={this.state.activeLink}></img>

            </GridItem>

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
              <GridContainer justify="center">
                <GridItem xs={10} sm={10} md={6}>
                  <GridContainer className="wrapperSmall">
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
                              <i className="fab fa-facebook fa-2x" style={{color:'white'}}></i>
                            </GridItem>

                            <GridItem xs={4} sm={4}>
                              <i className="fab fa-instagram fa-2x" style={{color:'white'}}></i>
                            </GridItem>

                            <GridItem xs={4} sm={4}>
                              <i className="fab fa-youtube fa-2x" style={{color:'white'}}></i>
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
