import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Typography} from '@material-ui/core'
import GridContainer from '../../common/grid/GridContainer';
import GridItem from '../../common/grid/GridItem';

import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  mainPaper:{
    textAlign:'center',
    backgroundColor:'rgba(209, 130, 4, 0.5)',
    padding: '20px'
  }
};

const ContactCard = ({classes, contactTitle, contactInfos}) => {
  return (
    <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12} >
          <Paper className={classes.mainPaper} square>
            <Typography variant="title">{contactTitle}</Typography>
            <div>{contactInfos}</div>
          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  )
}

ContactCard.propTypes = {
  classes: PropTypes.object,
  contactTitle: PropTypes.string,
  contactInfos: PropTypes.node
}

export default withStyles(styles)(ContactCard);