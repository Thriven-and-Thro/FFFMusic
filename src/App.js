import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import FFFAppHeader from '@/components/app-header'
import FFFAppFooter from '@/components/app-footer'
import routes from '@/router'

export default memo(function App() {
  return (
    <HashRouter>
      <FFFAppHeader />
      {/* 使用路由 */}
      {renderRoutes(routes)}
      <FFFAppFooter />
    </HashRouter>
  )
})
