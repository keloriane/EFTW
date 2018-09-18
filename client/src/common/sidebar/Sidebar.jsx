import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
const styles = {

  sidebar: {
    position: 'relative',

   
   
    width:'145px',
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    backgroundSize: 'cover'
  },
  currentPage: {
    position:'absolute',
    top:'38%',
    left:'5%',
    right:'5%',
    transform:'rotate(90deg)'
    
  },
  typo: {
    fontSize:'30px',
    color:'white',
    letterSpacing:'4px',
    textTransform: 'uppercase',
    fontFamily: 'butler'
  }
};

function Sidebar({classes, currentPage, bgImage}) {
  return (
   <div className="sectionBar">
     <Paper className={classes.sidebar} style={{background:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bgImage})`}} position="fixed" color="default">
        <Toolbar className={classes.currentPage}>
          <Typography variant="title" className={classes.typo} >
            {currentPage}
          </Typography>
        </Toolbar>
      </Paper>
      </div>
   
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPage: PropTypes.string,
  bgImage: PropTypes.string.isRequired
};

export default withStyles(styles)(Sidebar);