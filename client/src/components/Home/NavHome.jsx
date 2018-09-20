import React, {Component} from 'react';
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import {NavLink} from 'react-router-dom';

import aboutImg from '../../assets/img/about.png';
import contactImg from '../../assets/img/contact.png';
import highlightsImg from '../../assets/img/highlights.png';
import programImg from '../../assets/img/program.png';
import HomeButton from '../../common/customButtons/HomeButton';

import logo from '../../assets/img/main_black.png'

export default class NavHome extends Component {
  state = {
    activeLink: 'about'
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({activeLink: e.target.id})
  }

  handleLeave = (e) => {
    e.preventDefault();
  }

  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    let imageSource = aboutImg;
    if (this.state.activeLink === 'about') {
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
              <GridItem xs={12} sm={12} md={12}>
                <NavLink
                  to='/about'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton id="about" onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave} className="avenir">
                    ABOUT
                  </HomeButton>
                </NavLink>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <NavLink
                  to='/highlights'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton id="highlights" onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave} className="avenir">
                    HIGHLIGHTS
                  </HomeButton>
                </NavLink>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <NavLink
                  to='/program'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton id="program" onMouseEnter={this.handleChange} className="avenir">
                    ETFW 2018's PROGRAM
                  </HomeButton>
                </NavLink>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <NavLink
                  to='/contact'
                  style={{
                  textDecoration: 'none'
                }}>
                  <HomeButton id="contact" onMouseEnter={this.handleChange} className="avenir">
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
