import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../../../common/grid/GridContainer';
import GridItem from '../../../common/grid/GridItem';
import { Hidden } from '@material-ui/core';
// Component for gallery modal
import Swipeable from 'react-swipeable';
class GalleryModal extends Component {
  state = {
    imgUrls: [],
    src: '',
    index: null
  }

  componentWillReceiveProps(nextProps) {
    // console.log('next props', nextProps)
    const {imgUrls, src, index} = nextProps;
    this.setState({imgUrls, src, index});
  }

  prevImg = (e) => {
    e.stopPropagation();
    let i = this.state.index;
    let newImage = '';
    let newIndex = null;
    
    if (i === 0) {
      return;
    } else {
      i = i - 1;
      this
        .state
        .imgUrls
        .map((img, index) => {
          if (index === i) {
            newImage = img;
            newIndex = i;
          }
          return img;
        })
      if (newImage !== '' && newIndex !== null) {
        this.setState({src: newImage, index: newIndex})
      }
    }

  }

  nextImg = (e) => {
    e.stopPropagation();
    let i = this.state.index;
    let {imgUrls} = this.state;
    let newImage = '';
    let newIndex = null;

    if (i === imgUrls.length) {
      return;
    } else {
      i = i + 1;
      imgUrls.map((img, index) => {
        if (index === i) {
          newImage = img;
          newIndex = i;
        }
        return img;
      })
      if (newImage !== '' && newIndex !== null) {
        this.setState({src: newImage, index: newIndex})
      }
    }
  }

  componentDidUpdate() {
    console.log('new state inc', this.state)
  }

  render() {

    if (this.props.isOpen === false) {
      return null;
    }

    return (
      <div
        className='modal-overlay'
        onClick={this.props.onClick}
        isOpen={this.props.isOpen}
        name={this.props.name}>
        <div className='modal-body'>
          <GridContainer justify="center" alignItems="center">
          <Hidden only="xs">
            <GridItem sm={2} md={2}>
              <button
                onClick={this.prevImg}
                style={{
                float: 'left'
              }}>LEFT</button>

            </GridItem>
          </Hidden>
            <GridItem xs={12} sm={8} md={8}>
            <Swipeable
              className="callout secondary"
              style={{ display: "inline-block", touchAction: 'none', padding: ".5rem" }}
              trackMouse
              preventDefaultTouchmoveEvent
              onSwipedLeft={(e)=>this.nextImg(e)}
              onSwipedRight={(e)=>this.prevImg(e)}
            >
              <div>
              <img
                className="view-image"
                src={this.state.src}
                alt={this.state.src}/>
              </div>
            </Swipeable>
              
            </GridItem>
            <Hidden only="xs">
            <GridItem sm={2} md={2}>
              <div>
                <button
                  onClick={this.nextImg}
                  onSwipedRight={this.nextImg}
                  style={{
                  float: 'right'
                }}>RIGHT</button>
              </div>
            </GridItem>
            </Hidden>
          </GridContainer>

        </div>
      </div>
    )
  }
}

GalleryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default GalleryModal