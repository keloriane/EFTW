import React, {Component} from 'react'
import Sidebar from '../../../common/sidebar/Sidebar';
import galleryImage from '../../../assets/banner/gallery.png';
import GridContainer from '../../../common/grid/GridContainer';
import GridItem from '../../../common/grid/GridItem';
import Socialbar from '../../../common/socialbar/Socialbar';
import { Hidden } from '@material-ui/core';
import Years from './Years';

import logo from '../../../assets/svg/etfw-logo.svg';
import menu from '../../../assets/svg/menu.svg';
import ticket from '../../../assets/svg/ticket.svg';
import Menu from '../../Menu/MenuGrid';


export default class YearGallery extends Component {
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
    // Create new array with URLs for images
    let imgUrls = this.props.location.state.images;
    console.log(this.props);
    let content = this.state.isOpen ? <Menu closed={this.closed}/> : (

      <div className>
        
        <GridContainer>
        <Hidden only={['md', 'lg', 'xl']}>
      <div style={{position:'fixed', top:0, left:0, right:0, zIndex:9999}}>
          <GridContainer justify="space-between" alignItems="center" style={{backgroundColor:'white', height:'70px', textAlign:'center'}}>
          <GridItem xs={3} sm={3}><img src={ticket} style={{height:'50px', width:'50px'}} alt="buy tickets"></img></GridItem>
              <GridItem xs={4} sm={4}><img src={logo} style={{height:'50px', width:'100px'}} alt="ETFWB"></img></GridItem>
              <GridItem onClick={this.opened} xs={3} sm={3}><img src={menu} style={{height:'50px', width:'50px'}} alt="menu"></img></GridItem>
          </GridContainer>
      </div>
      </Hidden>
          <GridItem xs={12} sm={12} md={10} lg={10}>
            <div className="gallery_paper_container" >
              <div className="gallery_paper_content">
             <Years imgUrls={imgUrls}/>
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
                <Sidebar bgImage={galleryImage} currentPage="GALLERY"/>
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

        
        
      </div>
    )

    return (
      <div>
        {content}
      </div>
    )
  }
}
