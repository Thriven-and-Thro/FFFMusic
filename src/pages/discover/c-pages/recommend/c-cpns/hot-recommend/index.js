import React, { memo } from 'react'

import FFFThemeHeaderRcm from '@/components/theme-header-rcm'

import { HotRecommendWrapper } from './style'
import { HotRecommendKeywords } from '@/common/local-data.js'

export default memo(function FFFHotRecommend() {
  console.log(HotRecommendKeywords);
  return (
    <HotRecommendWrapper>
      <FFFThemeHeaderRcm title="热门推荐" keywords={HotRecommendKeywords} titleLink='/discover/songs/' />
    </HotRecommendWrapper>
  )
})
