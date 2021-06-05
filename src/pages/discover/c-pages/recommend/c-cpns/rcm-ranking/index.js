import React, { memo } from 'react'

import { RcmRanking } from './style'
import FFFThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function FFFRcmRanking() {
  return (
    <RcmRanking>

      <FFFThemeHeaderRcm title="榜单" titleLink='/discover/ranking/' />
    </RcmRanking>
  )
})
