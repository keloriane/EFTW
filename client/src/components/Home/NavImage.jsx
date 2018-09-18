import React, {Component} from 'react'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';

export default class NavImage extends Component {
  componentDidUpdate(){
    // let imageSource = ''
    const {activeLink} = this.props;
    if (activeLink === 'about'){
      // imageSource = '../../assets/img/about.png';
    } else if (activeLink === 'contact'){
      // imageSource = '../../assets/img/contact.png'
    } else if (activeLink === 'highlights'){
      // imageSource = '../../assets/img/highlights.png'
    }
  }
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
            <img src='./dqzd/' alt={this.props.activeLink}></img>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
