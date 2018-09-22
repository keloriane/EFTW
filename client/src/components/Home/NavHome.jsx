import React, {Component} from 'react';
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import {NavLink} from 'react-router-dom';

import mainImg from '../../assets/img/RightCanvas@2x.png';
import aboutImg from '../../assets/img/about.png';
import contactImg from '../../assets/img/contact.png';
import highlightsImg from '../../assets/img/highlights.png';
import programImg from '../../assets/img/program.png';
import HomeButton from '../../common/customButtons/HomeButton';

import logo from '../../assets/img/logo_black.png';

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
    let imageSource = aboutImg;
    if (this.state.activeLink === ''){
      imageSource = mainImg;
    } else if (this.state.activeLink === 'about') {
      imageSource = aboutImg;
    } else if (this.state.activeLink === 'highlights') {
      imageSource = highlightsImg
    } else if (this.state.activeLink === 'program') {
      imageSource = programImg
    } else if (this.state.activeLink === 'contact') {
      imageSource = contactImg
    }

    return (
      <div style={{overflow:'hidden'}}>
        <GridContainer
          justify="center"
          alignItems="center"
          style={{
          backgroundColor: '#fff'
        }}>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            style={{
            textAlign: 'center',
            height: '400px'
          }}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <img src={logo} style={{width:'278px'}} alt="logo"></img>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{page:'about'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                <NavLink
                  to='/about'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton className="avenir" style={{page:'about'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                    ABOUT
                  </HomeButton>
                </NavLink>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{page:'highlights'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                <NavLink
                  to='/highlights'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton className="avenir" style={{page:'highlights'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                    HIGHLIGHTS
                  </HomeButton>
                </NavLink>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{page:'program'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                <NavLink
                  to='/program'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton className="avenir" style={{page:'program'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                    ETFW 2018's PROGRAM
                  </HomeButton>
                </NavLink>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{page:'contact'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                <NavLink
                  to='/contact'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton className="avenir" style={{page:'contact'}} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>
                    CONTACT
                  </HomeButton>
                </NavLink>
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
              src={imageSource}
              style={{
              width: '100%',
              maxHeight: '100%'
            }} alt={this.state.activeLink}></img>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
