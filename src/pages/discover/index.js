import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { DiscoverWarpper, TopMeau } from './style'
import { TopMeauNames } from '@/common/local-data.js'

export default memo(function FFFDiscover(props) {
  const { route } = props

  function TopMeauList(item, index) {
    return (
      <NavLink to={route.routes[index + 1].path} key={index}>
        <span>{item}</span>
      </NavLink>
    )
  }

  return (
    <DiscoverWarpper>
      <TopMeau>
        <div className="wrap-v2">
          {
            TopMeauNames.map((item, index) => {
              return TopMeauList(item, index)
            })
          }
        </div>
      </TopMeau>

      {renderRoutes(route.routes)}
    </DiscoverWarpper>
  )
})
