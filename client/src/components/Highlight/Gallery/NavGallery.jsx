import React from 'react';
import Grid from '@material-ui/core/Grid';

import {NavLink} from 'react-router-dom';

import bg2017 from '../../../assets/img/2017@2x.png';
import bg2016 from '../../../assets/img/2016@2x.png';
import bg2015 from '../../../assets/img/2015@2x.png';
import bg2014 from '../../../assets/img/2014@2x.png';
import bg2013 from '../../../assets/img/2013@2x.png';
import bg2012 from '../../../assets/img/2012@2x.png';

import {images2017} from '../../../assets/mocks/images.js';
import {images2016} from '../../../assets/mocks/images.js';
import {images2015} from '../../../assets/mocks/images.js';
import {images2014} from '../../../assets/mocks/images.js';
import {images2013} from '../../../assets/mocks/images.js';
import {images2012} from '../../../assets/mocks/images.js';

function FirstRow(props) {
  const yearText = {
    color: 'white',
    fontSize: '40px',
    fontWeight: '85',
    textDecoration: 'none'
  }
  return (
    <React.Fragment>
      <Grid item xs={6} sm={4} md={4}>
        <NavLink
          style={yearText}
          to={{
          pathname: `/highlights/2017`,
          state: {
            images: images2017
          }
        }}>
          <div className="container">
          <img src={bg2017} className="bgImage"></img>
          <div className="centered">2017</div>
          </div>

        </NavLink>
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        <NavLink style={yearText}
          to={{
          pathname: `/highlights/2016`,
          state: {
            images: images2016
          }
        }}>

          <div className="container">
          <img src={bg2016} className="bgImage"></img>
          <div className="centered">2016</div>
          </div>
        </NavLink>
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        <NavLink style={yearText}
          to={{
          pathname: `/highlights/2015`,
          state: {
            images: images2015
          }
        }}>
        <div className="container">
          <img src={bg2015} className="bgImage"></img>
          <div className="centered">2015</div>
          </div>
        </NavLink>
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        <NavLink style={yearText}
          to={{
          pathname: `/highlights/2014`,
          state: {
            images: images2014
          }
        }}>
        <div className="container">
          <img src={bg2014} className="bgImage"></img>
          <div className="centered">2014</div>
          </div>
        </NavLink>
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        <NavLink style={yearText}
          to={{
          pathname: `/highlights/2013`,
          state: {
            images: images2013
          }
        }}>
        <div className="container">
          <img src={bg2013} className="bgImage"></img>
          <div className="centered">2013</div>
          </div>
        </NavLink>
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        <NavLink style={yearText}
          to={{
          pathname: `/highlights/2012`,
          state: {
            images: images2012
          }
        }}>
        <div className="container">
          <img src={bg2012} className="bgImage"></img>
          <div className="centered">2012</div>
        </div>
        </NavLink>
      </Grid>
    </React.Fragment>
  );
}

function NavGallery(props) {

  return (
    <div>
      <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12} container spacing={40}>
          <FirstRow/>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavGallery;