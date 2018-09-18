import React, { Component } from 'react'
import Sidebar from '../common/sidebar/Sidebar';
import aboutImage from '../assets/img/about.png';

export default class About extends Component {
  render() {
    return (
      <div>
        about works
        <Sidebar bgImage={aboutImage}
        currentPage='ABOUT'
        />  

      </div>
    )
  }
}
