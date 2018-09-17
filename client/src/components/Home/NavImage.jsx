import React, {Component} from 'react'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
export default class NavImage extends Component {
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
            Hello, image here
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
