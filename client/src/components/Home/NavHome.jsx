import React, {Component} from 'react'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';

import aboutImg from '../../assets/img/about.png';
import contactImg from '../../assets/img/contact.png';
import highlightsImg from '../../assets/img/highlights.png';
import programImg from '../../assets/img/program.png';

export default class NavHome extends Component {
  state={
    activeLink: 'about'
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      activeLink: e.target.id
    })
  }

  componentDidUpdate(){
    console.log(this.state)
  }
  render() {
    let imageSource = aboutImg;
    if (this.state.activeLink === 'about'){
      imageSource = aboutImg;
    } else if (this.state.activeLink === 'highlights'){
      imageSource = highlightsImg
    } else if (this.state.activeLink === 'program'){
      imageSource = programImg
    }else if (this.state.activeLink === 'contact'){
      imageSource = contactImg
    } 

    return (
      <div>
        <GridContainer>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            style={{
            textAlign: 'center',
          }}>
            <GridContainer>
            <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{
            textAlign: 'center'
          }}>
                <NavLink to='/about' style={{ textDecoration: 'none' }}>
                  <Button id="about" onMouseEnter={this.handleChange}>
                    ABOUT
                  </Button>
                </NavLink>
              </GridItem>
              <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{
            textAlign: 'center'
          }}>
                <NavLink to='/highlights' style={{ textDecoration: 'none' }}>
                  <Button id="highlights" onMouseEnter={this.handleChange}>
                    HIGHLIGHTS
                  </Button>
                </NavLink>
              </GridItem>
              <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{
            textAlign: 'center'
          }}>
                <NavLink to='/program' style={{ textDecoration: 'none' }}>
                  <Button id="program" onMouseEnter={this.handleChange}>
                    ETFW 2018's PROGRAM
                  </Button>
                </NavLink>
              </GridItem>
              <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{
            textAlign: 'center'
          }}>
                <NavLink to='/contact' style={{ textDecoration: 'none' }}>
                  <Button id="contact" onMouseEnter={this.handleChange}>
                    CONTACT
                  </Button>
                </NavLink>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            style={{
            textAlign: 'center'
          }}>
            <img src={imageSource} style={{width:'100%', maxHeight:'670px'}}>
            </img>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
