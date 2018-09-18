import React, { Component } from 'react'
import GridContainer from '../common/grid/GridContainer';
import GridItem from '../common/grid/GridItem';
import NavHome from '../components/Home/NavHome'
import NavImage from '../components/Home/NavImage'
export default class Home extends Component {

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <NavHome/>
          </GridItem>
          {/* <GridItem xs={4} sm={6} md={6}>
            <NavImage activeLink={this.state.activeLink}/>
          </GridItem> */}
        </GridContainer>
      </div>
    )
  }
}
