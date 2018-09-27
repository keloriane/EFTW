import React, {Component} from 'react'
import logo from './../../assets/img/LOGO@2x.png'
import ticket from './../../assets/img/ticket@2x.png'
import {Button} from '@material-ui/core';
import Menu from '../../components/Menu/Menu';

export default class Socialbar extends Component {
  // state = {
  //   isOpen: false
  // }

  // handleOpen = (e) => {
  //   this.setState({isOpen: true})
  //   this.props.opened();
  // }

  // handleClose = (e) => {
  //   this.setState({isOpen: false})
  //   this.props.closed();
  // }

  render() {
    return (
      <div>
        <div className="social_bar__container">
          <div className="menu__item">
            <button onClick={this.props.opened} variant="fab">menu</button>
          </div>
          <div className="logo_title__item">
            <img src={logo} alt="" className=""/>
          </div>
          <div className="social__container">
            <div className="ticket">
              <img className="icon__items" src={ticket} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
