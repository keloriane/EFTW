import React from 'react'
import GridContainer from '../grid/GridContainer';
import GridItem from '../grid/GridItem';

export default () => {
  return (
    <div>
      <GridContainer justify='center' style={{ marginBottom:'50px'}}>
       <GridItem xs={10} sm={10} md={10}>
         <GridContainer justify='space-between'>
          <GridItem xs={5} sm={5} md={5}>
          Webdesign by @FMRGZ - A VISUÆL STORY PRODUCTION
          </GridItem>
          <GridItem xs={1} sm={1} md={1}>
          2018
          </GridItem>
          <GridItem xs={5} sm={5} md={5}>
          © Ethno Tendance Fashion Week Brussels. All rights Reserved.
          </GridItem>
         </GridContainer>
         </GridItem> 
      </GridContainer>
    </div>
  )
}
