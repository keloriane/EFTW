import React, {Component} from 'react'
import children from './../../assets/img/CHILDREN@2x.png'
import cash from './../../assets/img/CASH.png'
import cerina from './../../assets/img/CERINA@2x.png'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import poster from '../../assets/img/video_thumbnail@2x.png'
import bookmark from '../../assets/img/bookmark@2x.png'
import {Divider, Button} from '@material-ui/core';

export default class History extends Component {
  render() {
    const video = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <video
            src={video}
            poster={poster}
            controls="control"
            style={{
            maxWidth: '100%',
            margin: '7% 0 7.5% 0'
          }}></video>
        </GridItem>

        <GridItem
          xs={10}
          sm={10}
          md={10}
          style={{
          textAlign: 'center'
        }}>
          <h2 className="about_header">ABOUT ETFW</h2>
        </GridItem>

        <GridItem xs={10} sm={10} md={10}>
          <div className="headline">
            <p>Since seven years, the Ethno Tendance Fashion Week Brussels (ETFWB) is the
              event that reveals the trends of the world.
            </p>
          </div>
        </GridItem>

        <GridItem xs={10} sm={10} md={10}>
          <GridContainer
            justify="space-between"
            style={{
            margin: '5% 0'
          }}>
            <GridItem xs={12} sm={12} md={6}>
              <img
                src={children}
                style={{
                maxWidth: '100%'
              }}
                alt=""/>
            </GridItem>

            <GridItem xs={12} sm={12} md={5}>
              <div className="about_content">
                <p className="about_text">
                  An artistic weekend exchanges in
                  <br/>
                  the beating heart of Europe
                  <br/>
                  revolving around the culture of one
                  <br/>
                  and the other.
                  <br/>
                  <br/>
                  We created a platform where stylists and artists affirm their creations.
                </p>
              </div>
            </GridItem>
          </GridContainer>

        </GridItem>
        <GridItem xs={10} sm={10} md={10}>
          <Divider/>
        </GridItem>
        <GridItem xs={10} sm={10} md={10}>
          <GridContainer
            justify="space-between"
            style={{
            margin: '5% 0'
          }}>

            <GridItem xs={12} sm={12} md={5}>
              <p className="about_text2">
                This is a great opportunity to highlight
                <br/>
                their abilities, their imagination and their
                <br/>
                gifts, regardless of the country of origin or the social origins.
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img
                src={cash}
                style={{
                maxWidth: '100%'
              }}
                alt=""/>
            </GridItem>
          </GridContainer>
        </GridItem>

        <GridItem xs={10} sm={10} md={10}>
          <Divider/>
        </GridItem>

        <GridItem xs={10} sm={10} md={10}>
          <GridContainer
            justify="center"
            style={{
            marginBottom: '5%'
          }}>
            <GridItem xs={10} sm={10} md={10}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
              <p className="download_book">Download the ETFWB’s Book to learn more
                <br/>
                about our spirit</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <div style={{
                textAlign: 'center'
              }}>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: '250px',
                    maxWidth: '390px',
                    height: '78px'
                }}><span className="download">THE BOOK</span><img src={bookmark} className="bookmark" alt=""></img></Button>
              </div>
              </GridItem>
            </GridContainer>
             
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem
          xs={10}
          sm={10}
          md={10}
          style={{
          textAlign: 'center'
        }}>
          <h2 className="about_header2">THE FOUNDER</h2>
        </GridItem>
        <GridItem
          xs={10}
          sm={10}
          md={10}
          style={{
          textAlign: 'left',
          marginBottom: '4%'
        }}>
          <GridContainer justify="space-between" alignItems="center">
            <GridItem xs={12} sm={12} md={5}>
            <img
                src={cerina}
                style={{
                maxWidth: '100%'
              }}
                alt=""/>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            <p className="about_text">
            Brussels, orphan of a Fashion Week, like other major capitals of the world, had to have its event dedicated to international fashion.
              </p>
            <p className="about_text">
            In 2012, we launched this unique and innovative project, we took up the challenge!
              </p>
            <p className="about_author">
              Cerina De Rosen
            </p>
            <p className="about_role">
            FOUNDER & DIRECTOR OF ETFWB
            </p>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    )
  }
}
