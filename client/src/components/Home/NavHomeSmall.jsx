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
                      md={12}>
                      <NavLink
                        to='/about'
                        style={{
                        textDecoration: 'none'
                      }}>
                        <HomeButton>
                          <h2 className="home_boutons_small">ABOUT</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}>
                      <NavLink
                        to='/highlights'
                        style={{
                        textDecoration: 'none'
                      }}>
                        <HomeButton
                          style={{
                          color: '#FFFFFF'
                        }}>
                          <h2 className="home_boutons_small">HIGHLIGHTS</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}>
                      <NavLink
                        to='/program'
                        style={{
                        textDecoration: 'none'
                      }}>
                        <HomeButton
                          style={{
                          color: '#FFFFFF'
                        }}>
                          <h2 className="home_boutons_small">2018 SCHEDULE</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
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
                          color: '#FFFFFF'
                        }}>
                          <h2 className="home_boutons_small">CONTACT</h2>
                        </HomeButton>
                      </NavLink>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                      marginBottom: '10px'
                    }}>
                      <a
                        href='https://www.weezevent.com/widget_billeterie.php?id_evenement=376927&lg_billetterie=1&code=27912&resize=1&width_auto=1&color_primary=00AEEF%22'
                        style={{
                        textDecoration: 'none'
                      }}
                        target="_blank"
                        rel="noopener noreferrer">
                        <HomeButton
                          style={{
                          color: '#FFFFFF'
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

                          <GridContainer
                            className='fadeInSlow'
                            justify='space-between'
                            style={{
                            textAlign: 'center'
                          }}>

                            <GridItem xs={4} sm={4}>
                              <a
                                href="https://www.facebook.com/EthnoTendanceFashionWeekBrussels/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i
                                  className="fab fa-facebook fa-2x"
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
                                  className="fab fa-instagram fa-2x"
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
                                  className="fab fa-youtube fa-2x"
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
        </Hidden> 