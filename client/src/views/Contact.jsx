import React, {Component} from 'react'
import Sidebar from '../common/sidebar/Sidebar';
import contactImage from '../assets/img/contact.png';
import NavPills from '../common/NavPills/NavPills';
import GridContainer from '../common/grid/GridContainer';
import GridItem from '../common/grid/GridItem';

import List from '@material-ui/icons/ListAlt';
import Message from '@material-ui/icons/Message';
import Schedule from '@material-ui/icons/Schedule';
import Create from '@material-ui/icons/Create';
import PressIcon from '@material-ui/icons/AssignmentInd';

import {Hello} from '../components/Contact/Hello';
import {Designer} from '../components/Contact/Designer';
import {Jobs} from '../components/Contact/Jobs';
import {Press} from '../components/Contact/Press';

export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* contact works */}
        <GridContainer >
          <GridItem xs={12} sm={12} md={10} lg={10} >
          <div style={{marginTop: '100px'}}>

         
            <NavPills
              color="primary"
              horizontal={{
                tabsGrid: { xs: 12, sm: 3, md: 3 },
                contentGrid: { xs: 12, sm: 8, md: 8 }
              }}
              tabs={[
              {
                tabButton: "Just say hello",
                tabIcon: Message,
                tabContent: (
                  <span>
                    <Hello/>
                  </span>
                )
              }, {
                tabButton: "Jobs & Internships",
                tabIcon: List,
                tabContent: (
                  <span>
                    <Jobs/>
                  </span>
                )
              }, {
                tabButton: "Creator & designer",
                tabIcon: Create,
                tabContent: (
                  <span>
                    <Designer/>
                  </span>
                )
              }, {
                tabButton: "Press",
                tabIcon: PressIcon,
                tabContent: (
                  <span>
                    <Press/>
                  </span>
                )
              }
            ]}/>
             </div>
          </GridItem>
          <GridItem sm={2} md={2} lg={2}>
            <Sidebar bgImage={contactImage} currentPage="CONTACT"/>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
