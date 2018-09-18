import React, { Component } from 'react'

import poster from './../../assets/img/video_thumbnail@2x.png'

export default class Video extends Component {
  render() {
    return (
      <div className="video__container">
        <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster={poster} controls="control"></video>
      </div>
    )
  }
}

