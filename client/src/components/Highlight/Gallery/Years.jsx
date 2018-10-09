import React, {Component} from 'react';
import GalleryModal from './GalleryModal';
import GalleryImage from './GalleryImage';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import backArrow from '../../../assets/svg/return.svg'

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
    this.setState({showModal: false, url: '', index: 0})
  }

  render() {
    let imgUrls = this.props.imgUrls;
    let content = imgUrls.map((url, index) => {
      return (
        <div key={index}>
          <div>
            <div className='gallery-card'>
              <GalleryImage
                className='gallery-thumbnail'
                src={url}
                alt={'Image number ' + (index + 1)}/>

              <span
                className='card-icon-open fas fa-camera'
                value={url}
                onClick={(e) => this.openModal(url, index, e)}></span>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        {/* <div refs='gallery-container' className='container-fluid gallery-container'> */}
        <Grid
          container
          justify="center"
          style={{
          backgroundColor: '#FFF4F7'
        }}>

          <Link className='back_arrow' to="/highlights">
            <img src={backArrow} alt="Back Arrow"/>
          </Link>

          <Grid item xs={10} sm={10} md={10} container className="gallery_paper_content">

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{
              marginTop: '80px',
              marginBottom: '80px',
              textAlign: 'center',
              fontSize: '30px',
              fontFamily: 'Helvetica',
              fontWeight: 'bold'
            }}>
              EFTWB 2018
            </Grid>

            <Grid
              xs={12}
              sm={12}
              md={12}
              container
              justify='space-around'
              flex-direction="flow"
              flex-wrap="wrap"
              style={{
              marginBottom: '150px'
            }}>
              {content}
            </Grid>

            <Grid xs={12} sm={12} md={8} lg={8} style={{textAlign:'center'}}>
              <footer className="cheat-footer">
                <div>Webdesign by
                  <a target='_blank' rel="noopener noreferrer" href="http://instagram.com/fmrgz">@FMRGZ</a>
                </div>
                <div>© 2018 ETFWB</div>
                <div>All rights Reserved</div>
              </footer>
            </Grid>
          </Grid>

        </Grid>

        <GalleryModal
          onClick={this.closeModal}
          isOpen={this.state.showModal}
          src={this.state.url}
          imgUrls={this.props.imgUrls}
          index={this.state.index}/>
      </div>
    )
  }

}