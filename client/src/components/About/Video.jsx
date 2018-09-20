import React, { Component } from 'react'

import poster from './../../assets/img/video_thumbnail@2x.png'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';

export default class Video extends Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} >
       <div className="video__container">
        <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster={poster} controls="control"></video>
         </div>
        </GridItem>
      </GridContainer>
    )
  }
}

