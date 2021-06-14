import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import FFFAppHeader from '@/components/app-header'
import FFFAppFooter from '@/components/app-footer'
import FFFAppPlayBar from '@/pages/player/app-player-bar'
import routes from '@/router'
import store from '@/store'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <FFFAppHeader />
        {/* 使用路由 */}
        {renderRoutes(routes)}
        <FFFAppFooter />
        <FFFAppPlayBar />
      </HashRouter>
    </Provider>
  )
})
