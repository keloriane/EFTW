import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import firstImage from '../../../assets/img/CASH.png';
import {NavLink} from 'react-router-dom';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '419px'
  }
});

function FirstRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4} sm={2} md={2}>
        <NavLink to="/highlights/2017">
        <img src={firstImage} className={classes.img} alt="2017"></img>
        </NavLink>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
      <NavLink to="/highlights/2016">
        <img src={firstImage} className={classes.img} alt="2016"></img>
        </NavLink>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
      <NavLink to="/highlights/2015">
        <img src={firstImage} className={classes.img} alt="2015"></img>
        </NavLink>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
      <NavLink to="/highlights/2012">
        <img src={firstImage} className={classes.img} alt="2012"></img>
        </NavLink>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
      <NavLink to="/highlights/2013">
        <img src={firstImage} className={classes.img} alt="2013"></img>
        </NavLink>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
      <NavLink to="/highlights/2012">
        <img src={firstImage} className={classes.img} alt="2012"></img>
        </NavLink>
      </Grid>
    </React.Fragment>
  );
}

FirstRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function Years(props) {
  const { classes } = props;
  console.log("from years", props);
  return (
    <div className={classes.root}>
      <Grid container spacing={8} justify="center">
        <Grid item xs={12} sm={12} md={12} container spacing={24}>
          <FirstRow classes={classes} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} container spacing={24}>
          <FirstRow classes={classes} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} container spacing={24}>
          <FirstRow classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

Years.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Years));