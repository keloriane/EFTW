import React, {Component} from 'react'
import children from './../../assets/img/CHILDREN@2x.png'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import poster from '../../assets/img/video_thumbnail@2x.png'


export default class History extends Component {
  render() {
    return (
      <GridContainer justify="center">
          <GridItem
            xs={10}
            sm={10}
            md={10}
            style={{
            textAlign: 'center'
          }}>
          <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster={poster} controls="control" style={{maxWidth:'100%'}}></video>
          </GridItem>
        <GridItem
          xs={10}
          sm={10}
          md={10}
          style={{
          textAlign: 'center'
        }}>
          <h2 className="head-section">About eftwb</h2>
        </GridItem>
        <GridItem xs={10} sm={10} md={10}>
          <div className="text__headline">
            <p className="inner_text">Since seven years, the Ethno Tendanc Fashion Week
              Brussels (ETFWB) is the event that reveals the trends of the world.
            </p>
          </div>
        </GridItem>
        <GridItem xs={10} sm={10} md={10}>
          <GridContainer style={{
            marginTop: '50px'
          }}>
            <GridItem xs={12} sm={5} md={5}>
              <img
                src={children}
                style={{
                maxWidth: '100%'
              }}
                alt=""/>
            </GridItem>
            <GridItem xs={12} sm={7} md={7}>
              <p style={{
                padding: '0 0 50px 50px'
              }}>
                An artistic weekend exchanges in the beating heart of Europe revolving around
                the culture of one and the other. We created a platform where stylists and
                artists affirm their creations.
              </p>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    )
  }
}
