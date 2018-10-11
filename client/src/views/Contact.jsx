import React, {Component} from 'react'
import Sidebar from '../common/sidebar/Sidebar';
import contactImage from '../assets/banner/contact.png';
import GridContainer from '../common/grid/GridContainer';
import GridItem from '../common/grid/GridItem';

import Socialbar from '../common/socialbar/Socialbar';
import {Hidden} from '@material-ui/core';
import {Menu} from '../components/Menu/Menu';
import Footer from '../common/footer/Footer';

import logo from '../assets/svg/etfw-logo.svg';
import menu from '../assets/svg/menu.svg';
import ticket from '../assets/svg/ticket.svg';
import {Divider} from '@material-ui/core';
export default class Contact extends Component {
  state = {
    isOpen: false
  }

  opened = (e) => {
    this.setState({isOpen: true})
  }

  closed = (e) => {
    this.setState({isOpen: false})
  }

  render() {
    let content = this.state.isOpen
      ? <Menu closed={this.closed}/>
      : (
        <GridContainer
          style={{
          height: '100vh',
          overflow: 'hidden'
        }}>

          <Hidden only={['md', 'lg', 'xl']}>
            <GridItem xs={12} sm={12}>
              <GridContainer
                justify="space-between"
                alignItems="center"
                style={{
                backgroundColor: 'white',
                height: '70px',
                textAlign: 'center'
              }}>
                <GridItem xs={3} sm={3}>
                  <a
                    href="https://www.weezevent.com/widget_billeterie.php?id_evenement=376927&lg_billetterie=1&code=27912&resize=1&width_auto=1&color_primary=00AEEF"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={ticket}
                      style={{
                      height: '50px',
                      width: '50px'
                    }}
                      alt="buy tickets"></img>
                  </a>
                </GridItem>
                <GridItem xs={4} sm={4}>
                  <img
                    src={logo}
                    style={{
                    height: '50px',
                    width: '100px'
                  }}
                    alt="ETFWB"></img>
                </GridItem>
                <GridItem onClick={this.opened} xs={3} sm={3}>
                  <img
                    src={menu}
                    style={{
                    height: '50px',
                    width: '50px'
                  }}
                    alt="menu"></img>
                </GridItem>
                <GridItem xs={12} sm={12}><Divider/></GridItem>
              </GridContainer>
            </GridItem>
          </Hidden>

          <GridItem xs={12} sm={12} md={10} lg={10}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className="fadeInLeft fadeInSlow">
                  <div className="contact_container">

                    <div className="contact_paper">
                      <div className="contact_paper_content">
                        <div className="contact_title_infos">
                          BRAND PARTNERSHIPS
                        </div>
                        <div className="contact_text_infos">
                          <p>Name, Position</p>
                          <p>Tel: +32 (0) 499 999 999</p>
                          <p>name.forname@ethnotendance.com</p>
                        </div>
                        <div className="contact_title_infos">
                          PRESS ACCREDITATION
                        </div>
                        <div className="contact_text_infos">
                          <p>Name, Position</p>
                          <p>Tel: +32 (0) 499 999 999</p>
                          <p>name.forname@ethnotendance.com</p>
                        </div>
                        <div className="contact_title_infos">
                          DESIGNERS (APPLICATIONS & SCHEDULE)
                        </div>
                        <div className="contact_text_infos_last">
                          <p>Name, Position</p>
                          <p>Tel: +32 (0) 499 999 999</p>
                          <p>name.forname@ethnotendance.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} lg={8}>
                <Footer/>
              </GridItem>
            </GridContainer>

          </GridItem>

          <Hidden only={['xs', 'sm']}>
            <GridItem sm={1} md={1} lg={1}>
              <div
                style={{
                position: 'fixed',
                width: '8.4%'
              }}>
                <Sidebar bgImage={contactImage} currentPage="CONTACT"/>
              </div>
            </GridItem>
            <GridItem sm={1} md={1} lg={1}>
              <div
                style={{
                position: 'fixed',
                width: '8.4%'
              }}>
                <Socialbar opened={this.opened} closed={this.closed}/>
              </div>
            </GridItem>
          </Hidden>

        </GridContainer>
      )
    return (
      <div>
        {content}
      </div>
    )
  }
}
