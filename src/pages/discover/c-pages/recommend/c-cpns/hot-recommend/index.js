import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import FFFThemeHeaderRcm from '@/components/theme-header-rcm'
import FFFSongsCover from '@/components/songs-cover'
import { getHotRecommendAction } from '../../store/actionCreators'
import * as commonContants from '@/common/contants.js'

import { HotRecommendWrapper } from './style'
import { HotRecommendKeywords } from '@/common/local-data.js'

export default memo(function FFFHotRecommend() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(commonContants.HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(['recommend', 'hotRecommend'])
  }), shallowEqual)

  return (
    <HotRecommendWrapper>
      <FFFThemeHeaderRcm title="热门推荐" keywords={HotRecommendKeywords} titleLink='/discover/playlist/' />
      <div className="songs-list">
        {
          hotRecommend.map((item, index) => {
            return <FFFSongsCover key={index} songMessages={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
