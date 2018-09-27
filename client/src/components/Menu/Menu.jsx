import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div style={{position: 'fixed', top:0, left:0, right:0, bottom:0, height:'100vh', background:'blue', zIndex:99}}>
        <button onClick={this.props.closed}>CLOSE</button>
        </div>
      </div>
    )
  }
}
