import React, { memo } from 'react'

import FFFThemeHeaderRcm from '@/components/theme-header-rcm'

import { RcmRanking } from './style'

export default memo(function FFFRcmRanking() {
  return (
    <RcmRanking>
      <FFFThemeHeaderRcm title="榜单" titleLink='/discover/ranking/' />
    </RcmRanking>
  )
})
