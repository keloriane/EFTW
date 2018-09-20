import React from 'react';
import GridContainer from '../common/grid/GridContainer';
import GridItem from '../common/grid/GridItem';
import NavHome from '../components/Home/NavHome';

export const Home = () => {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <NavHome/>
          </GridItem>
        </GridContainer>
      </div>
    )
}
