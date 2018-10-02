import React from 'react'
import poster from './../../assets/img/video_thumbnail@2x.png'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';
import downArrow from '../../assets/img/down-arrow@2x.png';
export default () => {
  const video = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
  return (
    <div>
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} sm={10} md={10}>
          <video
            src={video}
            poster={poster}
            controls="control"
            className="events-video"
            style={{
          }}></video>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} style={{textAlign:'center'}}>
        <p className="see-schedule">Please see below the ETFWB 2018 schedule. <br/> Check back for regular updates.</p>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} style={{textAlign:'center'}}>
        <img className="down-arrow" src={downArrow}></img>
        </GridItem>
        </GridContainer>
    </div>
  )
}
