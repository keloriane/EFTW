import React from 'react'
import MenuGrid from './MenuGrid';
import MenuMobile from './MenuMobile';
import {Hidden} from '@material-ui/core'

export const Menu = ({closed}) => {
  return (
    <div>
      <Hidden only={["xs", "sm"]}>
        <MenuGrid closed={closed}/>
      </Hidden>

      <Hidden only={["md", "lg", "xl"]}>
      <MenuMobile closed={closed}/>
      </Hidden>
    </div>
  )
}
