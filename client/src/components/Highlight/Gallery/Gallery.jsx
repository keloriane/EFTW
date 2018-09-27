import React, {Component} from 'react'
import Sidebar from '../../../common/sidebar/Sidebar';
import galleryImage from '../../../assets/img/highlights.png';
import GridContainer from '../../../common/grid/GridContainer';
import GridItem from '../../../common/grid/GridItem';
import NavGallery from './NavGallery';
import Socialbar from '../../../common/socialbar/Socialbar';
import { Hidden } from '@material-ui/core';
import Menu from '../../Menu/Menu';
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
      <div className="gallery_container">
      <GridContainer>

        <GridItem xs={12} sm={10} md={10} lg={10}>
          <div className="gallery_container">

            <div className="gallery_paper">
            <NavGallery/>
            </div>
            
          </div>
        </GridItem>

        <Hidden only="xs">
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
