import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../../../common/grid/GridContainer';
import GridItem from '../../../common/grid/GridItem';
// Component for gallery modal

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
            <GridItem xs={12} sm={12} md={12}>
              <a className='modal-close' onClick={this.props.onClick}>
                <span className='fa fa-times'></span>
              </a>
            </GridItem>
            <GridItem xs={2} sm={2} md={2}>
              <button
                onClick={this.prevImg}
                style={{
                float: 'left'
              }}>LEFT</button>

            </GridItem>
            <GridItem xs={8} sm={8} md={8}>
              <img
                style={{
                height: '100%',
                width: '100%'
              }}
                src={this.state.src}/>
            </GridItem>
            <GridItem xs={2} sm={2} md={2}>
              <div>
                <button
                  onClick={this.nextImg}
                  style={{
                  float: 'right'
                }}>RIGHT</button>
              </div>
            </GridItem>
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