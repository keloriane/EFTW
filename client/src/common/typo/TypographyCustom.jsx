import React from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import  PropTypes  from 'prop-types';

const styles ={
  fontFamily: {
    fontFamily: 'butler',
  
    
  }
}

const TypographyCustom =  ({content, classes, size, color} ) => {
  return (
    <div>
      <Typography className={classes.fontFamily} style={{fontSize:`${size}`, color:`${color}`}} >
        {
          content
        }
      </Typography>
    </div>
  )
}
TypographyCustom.propTypes = {
  content: PropTypes.string,
  classes: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string
}
export default withStyles(styles)(TypographyCustom)