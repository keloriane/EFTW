import React, { Component } from 'react'
import Sidebar from '../common/sidebar/Sidebar.jsx';
import highlightImage from '../assets/img/highlights.png';

export default class Highlight extends Component {
  render() {
    return (
      <div>
        <Sidebar bgImage={highlightImage} currentPage="HIGHLIGHTS"/>        
      </div>
    )
  }
}
