import React, {Component} from 'react'
import Sidebar from '../common/sidebar/Sidebar';
import Socialbar from '../common/socialbar/Socialbar';
// import Video from '../components/About/Video';
import History from './../components/About/History';
import GridContainer from '../common/grid/GridContainer';
import GridItem from '../common/grid/GridItem';
import aboutImage from '../assets/img/about.png'
import { Hidden } from '@material-ui/core';
import Menu from '../components/Menu/Menu';

export default class About extends Component {
  
  state = {
    isOpen: false
  }

  opened = (e) => {
    this.setState({isOpen:true})
  }

  closed = (e) => {
    this.setState({isOpen:false})    
  }

  render() {
    let content = this.state.isOpen ? <Menu closed={this.closed}/> : (
      <GridContainer justify="center" style={{backgroundColor:'#F4FCFF', position:'relative'}}>

        <GridItem xs={12} sm={10} md={10}>
          <div className="slideInUp">
            <History/>
          </div>
        </GridItem>
        <Hidden only="xs">
        <GridItem sm={1} md={1} lg={1}>
          <div
            style={{
            position: 'fixed',
            width: '8.4%'
          }}>
            <Sidebar bgImage={aboutImage} currentPage="ABOUT"/>
          </div>
        </GridItem>
        <GridItem sm={1} md={1} lg={1}>
          <div
            style={{
            position: 'fixed',
            width: '8.4%'
          }}>
            <Socialbar opened={this.opened} closed={this.closed}/>
          </div>
        </GridItem>
        </Hidden>

      </GridContainer>
    )

    return (
      <div>
        {content}
      </div>
    )
  }
}
