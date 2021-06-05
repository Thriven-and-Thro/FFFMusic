import React, { memo } from 'react'

import { NewDjradioWrapper } from './style'
import FFFThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function FFFNewDjradio() {
  return (
    <NewDjradioWrapper>
      <FFFThemeHeaderRcm title="新碟上架" titleLink='/discover/album/' />
    </NewDjradioWrapper>
  )
})
