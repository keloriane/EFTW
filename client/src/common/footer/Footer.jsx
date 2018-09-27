import React from 'react'
import GridContainer from '../grid/GridContainer';
import GridItem from '../grid/GridItem';

export default () => {
  return (
    <div>
      <GridContainer justify='center' style={{ marginBottom:'100px'}}>
       <GridItem xs={10} sm={8} md={8}>
         <GridContainer justify='space-between'>
          <GridItem xs={4} sm={4} md={4}>
          Webdesign by @FMRGZ - A VISUÆL STORY PRODUCTION
          </GridItem>
          <GridItem xs={1} sm={1} md={1}>
          2018
          </GridItem>
          <GridItem xs={4} sm={4} md={4}>
          © Ethno Tendance Fashion Week Brussels. All rights Reserved.
          </GridItem>
         </GridContainer>
         </GridItem> 
      </GridContainer>
    </div>
  )
}
