import React from 'react';
import GridContainer from '../grid/GridContainer';
import GridItem from '../grid/GridItem';

export const ProgramCardItem = ({time, text, margin}) => {
  return (
    <GridItem xs={9} sm={9} md={9} style={{
      margin: `${margin}`
    }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer
            justify="space-between">
            <GridItem xs={2} sm={2} md={2}>
              <p className="program-date">{time}</p>
            </GridItem>
            <GridItem xs={9} sm={9} md={9}>
              <p className="program-openings">{text}</p>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </GridItem>
  )
}
