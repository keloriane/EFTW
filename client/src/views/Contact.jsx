import React, {Component} from 'react'
import Sidebar from '../common/sidebar/Sidebar';
import contactImage from '../assets/img/contact.png';
import GridContainer from '../common/grid/GridContainer';
import GridItem from '../common/grid/GridItem';

import {Socialbar} from '../common/socialbar/Socialbar';
import { Hidden } from '@material-ui/core';


export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* contact works */}
        <GridContainer>

          <GridItem xs={12} sm={10} md={10} lg={10}>
          {/* <GridContainer>
            
          </GridContainer> */}
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
                  <div className="contact_text_infos">
                    <p>Name, Position</p>
                    <p>Tel: +32 (0) 499 999 999</p>
                    <p>name.forname@ethnotendance.com</p>
                  </div>
                </div>
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
                <Sidebar bgImage={contactImage} currentPage="CONTACT"/>
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
