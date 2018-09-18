import React, { Component } from 'react'
import Sidebar from '../common/sidebar/Sidebar';
import aboutImage from '../assets/img/about.png';
import { Socialbar } from '../common/socialbar/Socialbar';
import Video from '../components/About/Video';
import History from './../components/About/History';


export default class About extends Component {
  render() {
    return (
<div className="container__about">
      <div className="side_bar__container">
      
      <Sidebar bgImage={aboutImage}
      currentPage='ABOUT'
      />  
      <Socialbar />
      </div>
      <div className="container__about__wrapper">
      <Video />
      <History />
        </div>
      </div>
    )
  }
}
