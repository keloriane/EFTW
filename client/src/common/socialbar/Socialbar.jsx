import React, {Component} from 'react';
import logo from './../../assets/svg/etfw-logo.svg';
import ticket from './../../assets/svg/ticket.svg';
import menu from './../../assets/svg/menu.svg';
import {Link} from 'react-router-dom';

export default class Socialbar extends Component {

  render() {
    return (
      
      <div>
        
        <div className="social_bar__container">
          
          <div className="menu__item">
            <button onClick={this.props.opened}> 
              <img src={menu} alt="" className="close__image__button"/>
            </button>
          </div>
          
          
            <div className="logo_title__item">
              <Link to='/'>
                <img src={logo} alt="" className=""/>
              </Link>
            </div>
          
          
          
          <a href='https://www.weezevent.com/widget_billeterie.php?id_evenement=376927&lg_billetterie=1&code=27912&resize=1&width_auto=1&color_primary=00AEEF" ' target='_blanc' className="ticket">
            <img className="icon__items" src={ticket} alt=""/>
          </a>
        
        </div>
      
      </div>
    );
  }
}
