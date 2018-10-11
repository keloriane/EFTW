import React, {Component} from 'react'
import Sidebar from '../../../common/sidebar/Sidebar';
import galleryImage from '../../../assets/banner/highlights.png';
import GridContainer from '../../../common/grid/GridContainer';
import GridItem from '../../../common/grid/GridItem';
import NavGallery from './NavGallery';
import Socialbar from '../../../common/socialbar/Socialbar';
import { Hidden } from '@material-ui/core';
import {Menu} from '../../Menu/Menu';

import logo from '../../../assets/svg/etfw-logo.svg';
import menu from '../../../assets/svg/menu.svg';
import ticket from '../../../assets/svg/ticket.svg';

export default class Gallery extends Component {
  state = {
    isOpen: false
  }

  opened = (e) => {
    this.setState({isOpen:true})
  }

  closed = (e) => {
    this.setState({isOpen:false})    
  }

  render() {
    
    let content = this.state.isOpen ? <Menu closed={this.closed}/> : (
      // <div className="gallery_wrapper">
      <GridContainer>
        <Hidden only={['md', 'lg', 'xl']}>
        <div style={{position:'fixed', top:0, left:0, right:0, zIndex:9999}}>
            <GridContainer justify="space-between" alignItems="center" style={{backgroundColor:'white', height:'70px', textAlign:'center'}}>
              <GridItem xs={3} sm={3}>
              <a href="https://www.weezevent.com/widget_billeterie.php?id_evenement=376927&lg_billetterie=1&code=27912&resize=1&width_auto=1&color_primary=00AEEF" target="_blank" rel="noopener noreferrer">
                  <img
                    src={ticket}
                    style={{
                    height: '50px',
                    width: '50px'
                  }}
                    alt="buy tickets"></img>
                  </a>
              </GridItem>
              <GridItem xs={4} sm={4}><img src={logo} style={{height:'50px', width:'100px'}} alt="ETFWB"></img></GridItem>
              <GridItem onClick={this.opened} xs={3} sm={3}><img src={menu} style={{height:'50px', width:'50px'}} alt="menu"></img></GridItem>
            </GridContainer>
        </div>
        </Hidden>
        <GridItem xs={12} sm={12} md={10} lg={10}>
          <div className="gallery_container fadeInFast">

            <div className="gallery_paper_image nav_gallery_paper">
            <NavGallery/>
            </div>
            
          </div>
          
        </GridItem>

        <Hidden only={['xs', 'sm']}>
          <GridItem sm={1} md={1} lg={1}>
            <div
              style={{
              position: 'fixed',
              width: '8.4%'
            }}>
              <Sidebar bgImage={galleryImage} currentPage="HIGHLIGHTS"/>
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
    // </div>
    // </div>
    )
    return (
      <div>
        {content}
      </div>
    )
  }
}
