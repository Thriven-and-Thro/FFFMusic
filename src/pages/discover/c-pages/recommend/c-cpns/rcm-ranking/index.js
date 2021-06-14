import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import FFFThemeHeaderRcm from '@/components/theme-header-rcm'
import FFFTopRanking from '@/components/top-ranking'

import { RcmRanking } from './style'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function FFFRcmRanking() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)


  return (
    <RcmRanking>
      <FFFThemeHeaderRcm title="榜单" titleLink='/discover/ranking/' />
      <div className="rcm-ranking">
        <FFFTopRanking info={upRanking} />
        <FFFTopRanking info={newRanking} />
        <FFFTopRanking info={originRanking} />
      </div>
    </RcmRanking>
  )
})
