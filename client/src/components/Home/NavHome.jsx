import React, {Component} from 'react'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
export default class NavHome extends Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{
            textAlign: 'center'
          }}>
            <GridContainer>
            <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{
            textAlign: 'center'
          }}>
                <NavLink to='/about'>
                  <Button>
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
                <NavLink to='/highlights'>
                  <Button>
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
                <NavLink to='/program'>
                  <Button>
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
                <NavLink to='/contact'>
                  <Button>
                    CONTACT
                  </Button>
                </NavLink>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
