import React, {Component} from 'react';
import GalleryModal from './GalleryModal';
import GalleryImage from './GalleryImage';
import Grid from '@material-ui/core/Grid';

// Component for gallery
export default class Years extends Component {
  
  state = {
    showModal: false,
    url: '',
    index: 0
  }
  
  // Function for opening modal dialog
  openModal = (url, index, e) => {
    this.setState({showModal: true, url: url, index: index})
  };

  // Function for closing modal dialog
  closeModal = () => {
    this.setState({showModal: false, url: '', index:0})
  }

  render() {
    let imgUrls = this.props.imgUrls;
    let content = imgUrls.map((url, index) => {
      return (
        <Grid key={index} item xs={4} sm={2} md={2}>
        <div >
          <div className='gallery-card'>
            <GalleryImage
              className='gallery-thumbnail'
              src={url}
              alt={'Image number ' + (index + 1)}/>

            <span
              className='card-icon-open fa fa-expand'
              value={url}
              onClick={(e) => this.openModal(url, index, e)}></span>
          </div>
        </div>
        </Grid>
      )
    })

    return (
      <div>
           {/* <div refs='gallery-container' className='container-fluid gallery-container'> */}
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} container className="gallery_paper_content">
          {content}
          </Grid>
        </Grid>

        <GalleryModal
          onClick={this.closeModal}
          isOpen={this.state.showModal}
          src={this.state.url}
          imgUrls={this.props.imgUrls}
          index={this.state.index}/>
           {/* </div> */}
          </div>
    )
  }

}