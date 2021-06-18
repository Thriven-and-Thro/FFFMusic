import React, { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Spin } from 'antd';

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
        <Suspense fallback={
          (
            <div className="spin-div">
              <Spin size="large" wrapperClassName="spin" />
            </div>
          )
        }>
          {/* 使用路由 */}
          {renderRoutes(routes)}
        </Suspense>
        <FFFAppFooter />
        <FFFAppPlayBar />
      </HashRouter>
    </Provider>
  )
})
