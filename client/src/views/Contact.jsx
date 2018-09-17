import React, { Component } from 'react'
import Sidebar from '../common/sidebar/Sidebar';
import contactImage from '../assets/img/contact.png';
import NavPills from '../common/NavPills/NavPills';
import GridContainer from '../common/grid/GridContainer';
import GridItem from '../common/grid/GridItem';

import List from '@material-ui/icons/ListAlt';
import Message from '@material-ui/icons/Message';
import Schedule from '@material-ui/icons/Schedule';
import Create from '@material-ui/icons/Create';
import Press from '@material-ui/icons/AssignmentInd';

export default class Contact extends Component {
  render() {
    return (
      <div>
        contact works
        <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Just say hello",
                      tabIcon: Message,
                      tabContent: (
                        <span>
                         contact 2
                        </span>
                      )
                    },
                    {
                      tabButton: "Jobs & Internships",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          contact 1
                        </span>
                      )
                    },
                    {
                      tabButton: "Creator & designer",
                      tabIcon: Create,
                      tabContent: (
                        <span>
                         contact 3
                        </span>
                      )
                    },
                    {
                      tabButton: "Press",
                      tabIcon: Press,
                      tabContent: (
                        <span>
                         contact 4
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              </GridContainer>
        <Sidebar bgImage={contactImage} currentPage="CONTACT"/>  
      </div>
    )
  }
}
