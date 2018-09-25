import React, {Component} from 'react'
import Sidebar from '../../../common/sidebar/Sidebar';
import galleryImage from '../../../assets/img/highlights.png';
import GridContainer from '../../../common/grid/GridContainer';
import GridItem from '../../../common/grid/GridItem';
import NavGallery from './NavGallery';
import {Socialbar} from '../../../common/socialbar/Socialbar';
import { Hidden } from '@material-ui/core';

export default class Gallery extends Component {
  render() {
    return (
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
                <Socialbar/>
              </div>
            </GridItem>
          </Hidden>

        </GridContainer>
      </div>
    )
  }
}
