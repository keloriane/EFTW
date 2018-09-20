import React from 'react'
import GridContainer from '../grid/GridContainer';
import GridItem from '../grid/GridItem';
import {Paper} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import bgImage from '../../assets/img/program.png'
const styles = {
  mainPaper:{
    background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bgImage})`
  }
}
const ProgramPaper = ({classes}) => {
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper className={classes.mainPaper}>
          <p>Hello</p>
          <p>Heyyy</p>
          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default withStyles(styles)(ProgramPaper);