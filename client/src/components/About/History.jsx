import React, {Component} from 'react'
import children from './../../assets/img/CHILDREN@2x.png'
import cash from './../../assets/img/CASH.png'
import cerina from './../../assets/img/CERINA@2x.png'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import poster from '../../assets/img/video_thumbnail@2x.png'

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
          sm={8}
          md={8}
          style={{
          textAlign: 'center'
        }}>
          <h2 className="about_header">ETFWB2018 7th edition</h2>
        </GridItem>

        <GridItem xs={10} sm={8} md={8}>
          <div className="headline">
            <p>Since seven years, the Ethno Tendance Fashion Week Brussels (ETFWB) is the
              event that reveals the trends of the world. An artistic weekend exchanges in the
              beating heart of Europe revolving around the culture of one and the other. Bold,
              inclusive and empowering, we open our doors to diversity and authenticity.
            </p>
          </div>
        </GridItem>

        <GridItem xs={12} sm={8} md={8}>
          <GridContainer style={{
            margin: '5% 0'
          }}>
            <GridItem xs={12} sm={12} md={12}>
              <img
                src={children}
                style={{
                maxWidth: '100%'
              }}
                alt=""/>
            </GridItem>

          </GridContainer>

        </GridItem>

        <GridItem xs={10} sm={8} md={8}>
          <div className="headline">
            <p>We created a platform where stylists and artists affirm their creations. This
              Fashion Week is a great opportunity to highlight their abilities, imagination
              and gifts, regardless of the country of origin or the social origins.
            </p>
          </div>
        </GridItem>

        <GridItem xs={12} sm={8} md={8}>
          <img src={cash} style={{
            maxWidth: '100%'
          }} alt=""/>
        </GridItem>

        <GridItem xs={10} sm={8} md={8}>
          <p className="headline">
            This is a great opportunity to highlight their abilities, their imagination and
            their gifts, regardless of the country of origin or the social origins.
          </p>
        </GridItem>

        {/* <GridItem xs={10} sm={10} md={10}>
          <Divider/>
        </GridItem> */}

        <GridItem xs={10} sm={8} md={8}>
          <GridContainer
            justify="center"
            style={{
            marginBottom: '5%'
          }}>
            <GridItem xs={12} sm={12} md={12} style={{textAlign:'center'}}>
              <p className="download_book">Download the ETFWB’s Book to learn more about our spirit</p>
              <button className='btn_highlights'>
                HIGHLIGHTS
              </button>
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
                Brussels, orphan of a Fashion Week, like other major capitals of the world, had
                to have its event dedicated to international fashion.
              </p>
              <p className="about_text">
                In 2012, we launched this unique and innovative project, we took up the
                challenge!
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
